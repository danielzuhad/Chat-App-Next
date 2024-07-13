import UsersList from "./UsersList";

interface UsersSectionProps {}

const UsersSection = ({}: UsersSectionProps) => {
  return (
    <>
      <div className="mt-10 flex w-full justify-center">
        <UsersList />
      </div>
    </>
  );
};

export default UsersSection;
