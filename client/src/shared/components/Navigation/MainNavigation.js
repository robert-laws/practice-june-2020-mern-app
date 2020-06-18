import React from 'react';
import { Link } from 'react-router-dom';

import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import logo from '../../../images/logo.png';

const MainNavigation = () => {
  return (
    <MainHeader>
      <Link to='/' className='title'>
        <img src={logo} alt='Logo' />
        <h1 className='title-text'>PlaceSearch</h1>
      </Link>
      <nav>
        <NavLinks />
      </nav>
    </MainHeader>
  );
};

export default MainNavigation;
