import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users, setusers] = useState([]);
    const getUsers = async() =>{
      const response = await fetch(url);
      const users = await response.json();
      setusers(users);
      console.log(users);
    }
    useEffect(() => {
    
    getUsers();

  }, [])

  return (<>
  <h1>Github Users</h1>
  <ul className='users'>
  {users.map((user) =>{
    console.log(user);
    const {id, login,avatar_url, html_url} = user;
    return <li key={id}>
      <img src={avatar_url} alt=''/>
      <div>
      <h4>{login}</h4>
      <a href={html_url}>profile</a>
      </div>
    </li>
    
    ;
  })}</ul>

  </>);
};

export default UseEffectFetchData;
