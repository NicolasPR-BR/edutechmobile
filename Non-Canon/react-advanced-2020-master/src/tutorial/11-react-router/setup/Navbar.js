import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return <nav>
    <ul>
      <li>
      <Link to='/'>Home</Link>
      </li>
      <li>
      <Link to='/about'>About</Link>
      </li>
      <li>
      <Link to='/people'>People</Link>
      </li>
      <li>
      <Link to='/remove'>Use reducer</Link>
      </li>
      <li>
      <Link to='/setup'>Use Memo</Link>
      </li>
    </ul>
    </nav>;
};

export default Navbar;
