import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () =>{
    setSize(window.innerWidth);
    console.log(window.innerWidth);
  }
  
  useEffect(() => {
    window.addEventListener('resize', checkSize);
    
    return ()=>{
      console.log('cleanup');
      window.removeEventListener('resize', checkSize);
    
    }
  });

  return <> <h2>useEffect cleanup</h2>
  <h2>{size}</h2>
  <button className='btn' onClick={() => setSize(window.innerWidth = (window.innerWidth+100))}>Aumentar tamanho</button>
  </>;
};

export default UseEffectCleanup;
