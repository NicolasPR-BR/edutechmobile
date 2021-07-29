import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const delayed= () =>{
    setTimeout(()=>{setValue((prevState)=>{
      return prevState+1;})}, 1000);
  }
  return <>
  <section style={{margin:'4rem 0'}}>
  <h2>Regular counter</h2>
  <h1>{value}</h1>
  <button className='btn' onClick={() => setValue(value-1)}>Subtrair</button>
  <button className='btn' onClick={() => setValue(0)}>Resetar</button>
  <button className='btn' onClick={() => setValue(value+1)}>Acrescentar</button>
  </section>
  <br/><br/><br/>

  <section style={{margin:'4rem 0'}}>
  <h2>Complex counter</h2>
  <h1>{value}</h1>
  <button className='btn' onClick={delayed}>Acrescentar</button>
  </section>
  
  </>
  ;

};

export default UseStateCounter;
