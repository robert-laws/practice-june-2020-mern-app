import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
  return (
    <>
      <NavLink to='/' exact>
        All Users
      </NavLink>
      <NavLink to='/u1/places'>My Places</NavLink>
      <NavLink to='/places/new'>New Place</NavLink>
      <NavLink to='/auth'>Authenticate</NavLink>
    </>
  );
};

export default NavLinks;
