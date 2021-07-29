import React, { useState, useEffect } from 'react';

const ShowHide = () => {
   
  const [isShow, setiIsShow] = useState(true);

  return <><h2>{ isShow || <Item/>}</h2>
  <button className='btn' onClick={() => setiIsShow(!isShow)}>{isShow ? <>Enable</>:<>Disable</>} object</button>
  
  </>;

};

 const Item = () =>{

    const [size, setSize] = useState(window.innerWidth);

    useEffect(() => {
      window.addEventListener('resize', checkSize);
     return () =>{
      window.removeEventListener('resize', checkSize);
     }
    },[])

    const checkSize = () =>{
      setSize(window.innerWidth);
    }


    return (<div>
      <h2>Window Size: {size}</h2>
      
    </div>);
  }


export default ShowHide;
