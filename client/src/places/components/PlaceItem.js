import React from 'react';

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
        <button>View on Map</button>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </li>
  );
};

export default PlaceItem;
