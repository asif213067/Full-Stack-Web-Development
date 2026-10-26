import React, { use } from 'react'

const Users = ({ usersPromise }) => {
  const users = use(usersPromise());
  return (
    <div>
      <h2>Users from users components: {users.length}</h2>
      {
        users.map(user => <li key={user.id}>
          {user.name}: {user.email}
        </li>)
      }
    </div>
  )
}

export default Users