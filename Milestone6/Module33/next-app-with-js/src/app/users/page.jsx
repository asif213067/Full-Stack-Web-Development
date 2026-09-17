import Link from 'next/link';
import React from 'react'

const Users = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();

    return (
        <div>
            <h2 className='text-3xl'>Users Page: {users.length}</h2>

            <div className='grid grid-cols-3 gap-4'>
                {
                    users.map(user => <div key={user.id} className="card bg-primary text-primary-content w-96">
                        <div className="card-body">
                            <h2 className="card-title">{user.name}</h2>
                            <Link href={`/users/${user.id}`}>
                            <div className="card-actions justify-end">
                                <button className="btn">View Deatils</button>
                            </div>
                            </Link>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}

export default Users