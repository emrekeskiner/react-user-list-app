import React, {useEffect, useState} from 'react';
import axios from 'axios';
function UserList() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        getData();

    },[])

    const getData= async () => {

        const {data: users} = await axios("https://jsonplaceholder.typicode.com/users");
        setUsers(users);
        console.log("users", users);
        setLoading(false);
    };


  return (
    <div>
       <h2>Kullanıcılar</h2> 
       {loading && <div>Yükleniyor...</div>}

       <ul className='user-list'>
        {users.map((user) =>(
            <li key={user.id}>{user.name}</li>
        ))}
       </ul>
    </div>
  )
};

export default UserList