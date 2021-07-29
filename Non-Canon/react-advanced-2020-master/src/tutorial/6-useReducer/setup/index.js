import React, { useState, useReducer, useEffect } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
import {reducer} from './reduce.js';
// reducer function

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent:'',
}


const Index = () => {
  const [name, setName] = useState('');
  const [state, dispatch] = useReducer(reducer,defaultState);
  
  
 const submitHandler = (e) =>{
    e.preventDefault();
    if(name){
      setName('');
      const newItem = {id: new Date().getTime().toString(), name};
      dispatch({type:'ADD_ITEM', payload:newItem});
    
    }else{
      dispatch({type:'NO_VALUE'})
   }
  }
  const closeModal = () =>{
    dispatch({type: 'CLOSE_MODAL'});
  }
  

  return <>
  {state.isModalOpen && <Modal closeModal={closeModal} modalContent={state.modalContent}/>}
  <form className='form' onSubmit={submitHandler}>
    <div>
    <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
    <button className='btn' type='submit'>Send</button>
    </div>
  </form>
  {
    state.people.map((person) =>{
      
     
      return <div key={person.id}>
        <h3>{person.name}</h3>
        <button onClick={()=>{
          dispatch({type:'REMOVE_ITEM', payload: person.id});
        }
        }>Remove</button>
      </div>;
    })
  }
  </>;
};

export default Index;
