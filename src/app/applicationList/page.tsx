import Link from 'next/link';
import React, { use } from 'react'

interface User {
    id: number,
    name: string
};

const ApplicationList = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users',
    { 
    });

    const users: User[] = await res.json();
    return (
        <div>
            <h1>Users</h1>
            <p>{new Date().toLocaleTimeString()}</p>

            <ul>
                {users.map(user => <li key={user.id}>- {user.name}</li>)}
            </ul>
            ======
        </div>
    )
}

export default ApplicationList
