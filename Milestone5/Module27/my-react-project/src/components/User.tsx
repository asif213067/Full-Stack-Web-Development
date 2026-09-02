interface UserInfoType {
  name: string;
  isLogin: boolean;
}

const users: UserInfoType[] = [
  {
    name: "Asif",
    isLogin: true,
  },
  {
    name: "Rahim",
    isLogin: false,
  },
  {
    name: "Karim",
    isLogin: true,
  },
  {
    name: "Sakib",
    isLogin: false,
  },
  {
    name: "Nayeem",
    isLogin: true,
  },
];

const User = () => {
  return (
    users.map((user) => <h3>Name: {user.name}</h3>)
  );
};

export default User;
