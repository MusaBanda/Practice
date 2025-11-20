"use client";
import { useEffect, useState } from "react";

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')     
      .then(response => response.json())
      .then(data => setUsers(data))  
      .catch(error => console.error('Error fetching user data:', error));
  }, []);


  return (
    <div>
         <div>
            {users.map(user => (
                <div key={user.id}>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
            </div>))}
         </div>
        <div>
                
        </div>
      
    </div>
  );
};

export default User;
