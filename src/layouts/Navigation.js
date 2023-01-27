import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/Navigation.css'

const Navigation = () => {
  return (
    <>
      <ul className='nav-ul'>
        <li>
          <NavLink className='nav-link' to='/'>Dodaj</NavLink>
        </li>
        <li>
          <NavLink className='nav-link' to='/tasks'>Do wykonania</NavLink>
        </li>
        <li>
          <NavLink className='nav-link' to='/done'>Wykonane</NavLink>
        </li>
      </ul>
    </>
  );
}

export default Navigation;