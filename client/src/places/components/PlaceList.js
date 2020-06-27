import React from 'react';

import PlaceItem from './PlaceItem';
import Button from '../../shared/components/FormElements/Button';

const PlaceList = ({ places }) => {
  if (places.length === 0) {
    return (
      <div className='users-list'>
        <p className='no-users'>No Places Found</p>
        <Button to='/places/new'>Add a Place</Button>
      </div>
    );
  }

  return (
    <ul className='place-list'>
      {places.map((place) => (
        <PlaceItem key={place.id} place={place} />
      ))}
    </ul>
  );
};

export default PlaceList;
