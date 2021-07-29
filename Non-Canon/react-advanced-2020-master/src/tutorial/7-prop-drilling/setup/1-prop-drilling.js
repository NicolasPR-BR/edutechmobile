import React, { useState } from 'react';
import {data} from '../../../data'

// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {

  const [people, setPeople] = useState(data);

  const removePerson = (id) =>{
    setPeople((people)=>{
      return people.filter((person) =>person.id !== id);
      
    })
  }

  return <>

    <h3>Prop drilling</h3>
    <List people={people} removePerson={removePerson}/>
  </>;

};

const List = ({people,removePerson}) =>{

    return <>
    {people.map((person) =>{
      return <SinglePerson key={person.id} {...person} removePerson={removePerson}/>;
    })}
    
    </>;
  
  }
const SinglePerson = ({id,name,removePerson})=>{
  return <div className='item'>
    <h3>{name}</h3>
    <button onClick={() => removePerson(id)}>Remove</button>
    </div>;
}
  
export default PropDrilling;
