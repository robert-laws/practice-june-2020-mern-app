import React, { useState, useContext } from 'react';
import Button from '../../shared/components/FormElements/Button';
import Modal from '../../shared/components/UIElements/Modal';

import { AuthContext } from '../../shared/context/auth-context';

const PlaceItem = ({ place }) => {
  const auth = useContext(AuthContext);

  const [confirmModal, setConfirmModal] = useState(false);

  const deleteWarningHandler = () => {
    setConfirmModal(true);
  };

  const cancelDeleteHandler = () => {
    setConfirmModal(false);
  };

  const confirmDeleteHandler = () => {
    setConfirmModal(false);
    console.log('deleting...');
  };

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
    <>
      <Modal
        show={confirmModal}
        cancel={cancelDeleteHandler}
        header='Are you sure?'
        footerClass='modal-buttons'
        footer={
          <>
            <Button onClick={cancelDeleteHandler}>Cancel</Button>
            <Button onClick={confirmDeleteHandler}>Delete</Button>
          </>
        }
      >
        <p>Do you want to proceed and delete this place?</p>
      </Modal>
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
          {auth.isLoggedIn && (
            <>
              <Button to={`/places/${id}`}>Edit</Button>
              <Button onClick={deleteWarningHandler}>Delete</Button>
            </>
          )}
        </div>
      </li>
    </>
  );
};

export default PlaceItem;
