import React from 'react';

//can use javascript in HTML/jsx, just need { with something from js inside it} 

const Book = (props) =>{ //like this ({im, title, autor})
  //or this 
  
  //attibute, eventhandler
  const {id,im,title,autor,children} = props.book;
  const clickHandler = (e)=>{
    console.log(e);
    alert('You clicked on book id number: ' + id);
  }

  console.log(props);
  return(<article className='book'>
      
      <img className='img' src={im} alt=''/>
      <h1 onClick={()=> console.log(title)}>{title}</h1>
      <h1>{title}</h1><br/>
      <h4>{autor}</h4><br/>
      <button type='button' onClick={clickHandler}>butão</button>
  </article>
  );
}

export default Book;