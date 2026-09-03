
const UserCard = ({user}: any) => {
  return (
    <div className="user-card">
        <h2>Name: {user.name}</h2>
        <p>Email: {user.email}</p>
    </div>
  )
}

export default UserCard