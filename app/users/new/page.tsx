import React from 'react'

interface User {
  id: number;
  name: string; 
  email: string; 
}

const UsersPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users',
  {cache: 'no-store'}
  );
  const users: User[] = await res.json();
    
  return (
    <>
    <p>{new Date().toLocaleTimeString()}</p>
    <div>
       routing 2
    </div>
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
    {users.map(user => 
    <tr>
      <th>
      {user.name}
      </th>
      <th>
      {user.email}
      </th>
    </tr>

    )}
  </tbody>
</table>
    </>
    // <a href='/users'></a>
  )
}

export default UsersPage

