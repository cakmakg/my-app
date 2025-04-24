import React from 'react'

const User = () => {
    const users=["ALI","ahmet","ayse"]
  return (
    <div>User
   { users.map((user,i)=>(
        <div key={i}> <link href={"/user/${user}"}>Go to details- {user}</link></div>
    ))
   }
    </div>
  )
}

export default User