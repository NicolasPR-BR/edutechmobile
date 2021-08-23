import React, { useState, useEffect } from 'react';
import { data } from '../../../data';
import { Link, useParams } from 'react-router-dom';

const Person = () => {

  const [name,setName] = useState('Default Name');
  const {id} = useParams();
  
  useEffect(()=>{
    
    const newPerson = data.find((person)=> person.id !== parseInt(id));
    const a = newPerson.name;
    setName(a);
    
  },[])
 
  return (
    <div>
      <h1>{name}</h1>
      <h3>id: {id}</h3>
      <Link to='/people'>Back home</Link>
    </div>
  );
};

export default Person;
