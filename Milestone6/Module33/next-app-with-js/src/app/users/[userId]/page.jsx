import React from 'react'

const UserDeatilsPage = async({params}) => {
    const {userId} = await params;

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = await res.json();

  return (
    <div>
        <h2 className='text-3xl'>User Deatils Page</h2>
        <h2>{user.name}</h2>
        <h2>{user.email}</h2>
        <h2>{user.website}</h2>
        <h2>{user.phone}</h2>
    </div>
  )
}

export default UserDeatilsPage