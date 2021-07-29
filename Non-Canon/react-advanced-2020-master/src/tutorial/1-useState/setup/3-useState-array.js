import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const handler = (id) =>{
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
    
  }
  const [people,setPeople] = React.useState(data);
  return <React.Fragment>useState array example
  {
    
    people.map((person)=>{
      const {id,name} = person;
      return (<div key={id} className='item'>     
      <h4>{name}</h4>
      <button onClick={() => handler(id)}>Remove</button>
      </div>
      );
    })
      
  }
  
   <br/><button onClick={() => setPeople([])}>Remove everyone</button>
  
  
  </React.Fragment>;

};

export default UseStateArray;
