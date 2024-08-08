import { useQueryClient } from "@tanstack/react-query";

const useOptimisticUpdate = () => {
  const queryClient = useQueryClient();

  //   samakan queryKey disini dengan queryKey GET nya
  const optimisticUpdate = async (queryKey: string) => {
    return await queryClient.invalidateQueries({
      queryKey: [{ queryKey }],
    });
  };

  return {
    optimisticUpdate,
  };
};

export default useOptimisticUpdate;
