import { User } from "@prisma/client";
import UserBox from "./UserBox";

interface UsersListProps {
  users: User[];
}

const UsersList = ({ users }: UsersListProps) => {
  return (
    <>
      {users.map((user) => (
        <UserBox key={user.email} user={user} />
      ))}
    </>
  );
};

export default UsersList;
