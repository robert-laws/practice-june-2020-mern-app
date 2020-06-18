import React from 'react';
import UserItem from './UserItem';

const UsersList = ({ users }) => {
  if (users.length === 0) {
    return (
      <div className='users-list'>
        <p>No Users Found</p>
      </div>
    );
  }

  return (
    <div className='users-list'>
      <ul>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
