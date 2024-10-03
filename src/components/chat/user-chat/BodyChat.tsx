"use client";

import { Prisma, User } from "@prisma/client";
import useChat from "../hooks/useChat";
import MessageBox from "./MessageBox";
import { useEffect, useRef, useState } from "react";
import { pusherClient } from "@/lib/pusher";
import { find } from "lodash";
import { UseMutationResult } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

interface BodyChatProps {
  conversationId: string;
  currentuser: User;
  submitMutation: UseMutationResult<
    AxiosResponse<any, any>,
    Error,
    {
      message: string;
      conversationId: string;
      image?: any;
    },
    unknown
  >;
}

const BodyChat = ({
  conversationId,
  currentuser,
  submitMutation,
}: BodyChatProps) => {
  const { mesasgeQuery } = useChat(conversationId);

  const [messages, setMessages] = useState(mesasgeQuery.data || []);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mesasgeQuery.data) {
      setMessages(mesasgeQuery.data);
    }
  }, [mesasgeQuery.data]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [mesasgeQuery.data, submitMutation.isPending]);

  useEffect(() => {
    pusherClient.subscribe(conversationId);
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }

    const messageHandler = (
      data: Prisma.MessageGetPayload<{
        include: { sender: true; seen: true };
      }>,
    ) => {
      if (!find(messages, { id: data.id })) {
        setMessages((prevMessages) => [...prevMessages, data]);
        if (containerRef.current) {
          containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
      }
    };

    pusherClient.bind("messages:new", messageHandler);

    return () => {
      pusherClient.unsubscribe(conversationId);
      pusherClient.unbind("messages:new", messageHandler);
    };
  }, [conversationId, messages]);

  return (
    <div
      ref={containerRef}
      className="max-h-[calc(100vh-135px)] w-full flex-1 overflow-y-auto px-2 pt-[74px]"
    >
      {messages?.map((message, i) => (
        <MessageBox
          key={i}
          variant={message.senderId !== currentuser.id ? "right" : "left"}
          message={message}
        />
      ))}

      {submitMutation.isPending && (
        <MessageBox
          isPending={submitMutation.isPending}
          className="bg-black/30"
          variant="right"
          message={{
            body: submitMutation.variables?.message as string,
            image: submitMutation.variables?.image as string,
            senderId: currentuser.id,
            sender: currentuser,
            conversationId: conversationId,
            createdAt: new Date(),
            id: "",
            seen: [],
            seenIds: [],
          }}
        />
      )}
    </div>
  );
};

export default BodyChat;
