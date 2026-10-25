import React from 'react'

const UserPage = async () => {
    const data = await fetch('http://localhost:5000/users');
    const users = await data.json();
  return (
      <div>
          <h2>User Data Comming soon: {users.length}</h2>
    </div>
  )
}

export default UserPage