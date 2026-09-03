import { use } from "react";
import UserCard from "./UserCard";

const User = ({ usersDataPromise }: any) => {
  const users: any = use(usersDataPromise);

  return (
    <div>
      <h2>Users: {users.length}</h2>
      {users.map((user: any) => (
        <UserCard user={user} />
      ))}
    </div>
  );
};

export default User;
