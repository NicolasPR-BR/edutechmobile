import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world';
  const [isError, setisError] = useState(false); 

  return <><h2>{isError ? <>Error...</>: firstValue}</h2><button className='btn' onClick={()=> setText('mudado')}>change</button><button className='btn' onClick={() =>setisError(!isError)}>Create error</button>



  </>;

};
 
export default ShortCircuit;
