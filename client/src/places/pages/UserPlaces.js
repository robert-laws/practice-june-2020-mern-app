import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';

const PLACES = [
  {
    id: 'p1',
    title: 'Empire State Building',
    description: 'One of the most famous buildings in the world',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/1/10/Empire_State_Building_%28aerial_view%29.jpg',
    address: '20 W 34th Street, New York, NY 10001',
    location: {
      lat: 40.748,
      lng: -73.987,
    },
    creator: 'u1',
  },
  {
    id: 'p2',
    title: 'Chrysler Building',
    description: 'A famous artistic building in NYC',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Chrysler_Building_by_David_Shankbone_Retouched.jpg/800px-Chrysler_Building_by_David_Shankbone_Retouched.jpg',
    address: '12 E 49 Street, New York, NY 10001',
    location: {
      lat: 43.748,
      lng: -70.987,
    },
    creator: 'u2',
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = PLACES.filter((place) => place.creator === userId);

  return (
    <div className='places'>
      <h2>User Places</h2>
      <PlaceList places={loadedPlaces} />
    </div>
  );
};

export default UserPlaces;
