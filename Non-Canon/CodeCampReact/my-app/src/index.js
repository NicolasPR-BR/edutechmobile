import React from 'react'; //To create a component, react from react needs to be imported
import ReactDom from 'react-dom'; //react down owns Render(), to render we need it, duh, Only needed once, normally


//books
import {books} from './books';
import Book from './Book';
//css
import './index.css';

//Function needs to be capital for react to recognize as a component, it'll return JSX but no one cares so i'll call it HTML
function BookList(){ //This function is the component
  return(
    <section className='booklist'>
      {books.map((book)=>{
      return<Book key={book.id} book={book}></Book>; //instead of using key={} you can instead use {...book} a spread operator
      })} 
    </section>
    );
}

ReactDom.render(<BookList/>, document.getElementById('root')); //Requires something to render, in this case Greeting needs rendering
//Document.getElementById('root') says where we'll be rendering