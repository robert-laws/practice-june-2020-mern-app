import React from 'react';
import Button from '../../shared/components/FormElements/Button';

const PlaceItem = ({ place }) => {
  const {
    id,
    imageUrl,
    title,
    description,
    address,
    creator,
    location,
  } = place;

  return (
    <li className='place-item'>
      <div className='image'>
        <img src={imageUrl} alt={title} />
        <div className='info'>
          <h2>{title}</h2>
          <h3>{address}</h3>
          <p>{description}</p>
        </div>
      </div>
      <div className='actions'>
        <Button>View on Map</Button>
        <Button to={`/places/${id}`}>Edit</Button>
        <Button>Delete</Button>
      </div>
    </li>
  );
};

export default PlaceItem;
