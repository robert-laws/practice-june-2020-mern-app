import React from 'react';

const UserItem = ({ user }) => {
  const { id, image, name, placeCount } = user;
  return (
    <li className='user-item'>
      <img src={image} alt='name' />
      <section>
        <h4>{name}</h4>
        <p>Places Visited: {placeCount}</p>
      </section>
    </li>
  );
};

export default UserItem;
