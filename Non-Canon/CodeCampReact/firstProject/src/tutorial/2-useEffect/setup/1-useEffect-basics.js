import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  const [timer, setTimer] = useState(0)
  useEffect(() =>{
    if(value >= 1){
   document.title = 'teste ' + value;
    }else
    {
      document.title = 'teste';
    }
   }, [value]
   );

  useEffect(() => {
    setTimeout(() => setTimer(timer+1),1000);
  }, [timer]);
  return <>
  
  <h1>{value}</h1>
   <button className='btn' onClick={() => setValue(value+1)}>Change title</button>
   <h1>{timer}</h1>
  </>;
};

export default UseEffectBasics;
