import { isPlaceholderType } from '@babel/types';
import React, { useState } from 'react';



const UseStateObject = () => {
  const changeMessage = () =>{
    if(person.message === 'Hello World'){
    setPerson({...person,message: 'Change da world'});
  }else
    setPerson({...person,message: 'Hello World'}); //Spread operator DOT DOT DOT, saves the other two and allows us to change only the message
  }

  const [person, setPerson] = useState({name:'peter', age:24,message:'change da world',});
  
  return (<><h2>useState object example</h2>
  <h3>{person.name}</h3> 
  <h3>{person.age}</h3>
  <h3>{person.message}</h3>
  
  <button onClick={changeMessage}>Change message</button>
  </>);
};

export default UseStateObject;
