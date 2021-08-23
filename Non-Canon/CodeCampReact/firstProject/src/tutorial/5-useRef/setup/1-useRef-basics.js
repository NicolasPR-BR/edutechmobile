import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {

  const refContainer = useRef(null);
  const divContainer = useRef(null);
  const handler = (e) =>{
    e.preventDefault();
    console.log(refContainer.current.value);
  }
  useEffect(() => {
    refContainer.current.focus();
  });


  console.log(refContainer);
  return <>
  <form className='form'  onSubmit={handler}>
  <div>
   <input type="text" className="text" ref={refContainer}/>
   <button type='submit' className="btn">Submit</button>
  </div>

  </form>
  <div ref={divContainer}>Hello World</div>
  
  </>;
};

export default UseRefBasics;
