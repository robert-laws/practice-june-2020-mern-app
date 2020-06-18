import React from 'react';

import Avatar from '../../shared/components/UIElements/Avatar';

const UserItem = ({ user }) => {
  const { id, image, name, placeCount } = user;
  return (
    <li className='user-item'>
      <Avatar image={image} alt={name} width={'100px'} height={'100px'} />
      <section>
        <h4>{name}</h4>
        <p>Places Visited: {placeCount}</p>
      </section>
    </li>
  );
};

export default UserItem;
