import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { AuthContext } from '../../context/auth-context';

const NavLinks = () => {
  const auth = useContext(AuthContext);

  return (
    <>
      <NavLink to='/' exact>
        All Users
      </NavLink>
      {auth.isLoggedIn && (
        <>
          <NavLink to='/u1/places'>My Places</NavLink>
          <NavLink to='/places/new'>New Place</NavLink>
          <button onClick={auth.logout}>Logout</button>
        </>
      )}

      {!auth.isLoggedIn && <NavLink to='/auth'>Authenticate</NavLink>}
    </>
  );
};

export default NavLinks;
