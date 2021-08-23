import React, { useState } from 'react';


// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);

  const handler = (e) =>{
    e.preventDefault();
    if(firstName && email){
      const person = {id: new Date().getTime().toString(),firstName, email};
      console.log(people);
      setPeople((people) => {
        return [...people, person];
       })
     setFirstName('');
     setEmail('');
    }
  }



  return <>
  <article>
    <form className='form' onSubmit={handler}>
      <div className="form-control">
        <label htmlFor='firstName'>First name:</label>
        <input type='text' id='firstName' name='firstName' value={firstName} onChange={(e) => {
          setFirstName(e.target.value);
        }}/>
      </div>
      
      <div className="form-control">
        <label htmlFor='email'>email:</label>
        <input type='email' id='email' name='email' value={email} onChange={(e) =>{
          setEmail(e.target.value);

        }}/>
      </div>
      <button className='submit' onClick={handler}>Send data</button>
    </form>
    {
      people.map((person) =>{
        const {id,firstName, email} = person;
        
        return <div className='item' key={id} > 
        <h4>{firstName}</h4>
        <p>{email}</p>
        </div>
      })
    }
  </article>
  
  </>;
};

export default ControlledInputs;
