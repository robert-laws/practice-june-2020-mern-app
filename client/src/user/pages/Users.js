import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Bob Cobb',
      image:
        'https://images.pexels.com/photos/1227513/pexels-photo-1227513.jpeg?cs=srgb&dl=photo-of-grass-field-1227513.jpg&fm=jpg',
      placeCount: 4,
    },
    {
      id: 'u2',
      name: 'Hal Hope',
      image:
        'https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?cs=srgb&dl=photo-lavender-flower-field-under-pink-sky-1166209.jpg&fm=jpg',
      placeCount: 8,
    },
  ];

  return (
    <div className='users'>
      <UsersList users={USERS} />
    </div>
  );
};

export default Users;
