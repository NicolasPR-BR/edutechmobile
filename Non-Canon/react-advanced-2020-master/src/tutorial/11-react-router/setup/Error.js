import React from 'react';
import { Link } from 'react-router-dom';
const Error = () => {
  return (
    
    <div>
      <h1>Error Page</h1>
      <h3>Such page does not exist</h3>
      <Link to='/' className='btn'>Home page</Link>
    </div>
    
  );
};

export default Error;
