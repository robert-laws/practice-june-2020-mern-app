import React from 'react';
import { Link } from 'react-router-dom';

import Avatar from '../../shared/components/UIElements/Avatar';

const UserItem = ({ user }) => {
  const { id, image, name, placeCount } = user;
  return (
    <li className='user-item'>
      <Link to={`/${id}/places`}>
        <Avatar image={image} alt={name} width={'80px'} height={'80px'} />
        <section>
          <h4>{name}</h4>
          <p>Places Visited: {placeCount}</p>
        </section>
      </Link>
    </li>
  );
};

export default UserItem;
