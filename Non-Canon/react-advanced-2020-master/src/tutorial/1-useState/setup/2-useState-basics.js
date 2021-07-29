import React, { useState } from 'react';

const UseStateBasics = () => {
  const [text,setText] = useState('random title');
  const handleClick = () =>{
    if(text !== 'random title'){
    setText('Novo');
    }else{
      setText('random title');
    }
  }
  return (<React.Fragment>
    <h1>{text}</h1>
    <button className='btn' onClick={handleClick}>Set text</button>
    
    </React.Fragment>);

};

export default UseStateBasics;
