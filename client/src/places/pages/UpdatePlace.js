import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';

import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';

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

const UpdatePlace = () => {
  const placeId = useParams().placeId;
  const [loaded, setLoaded] = useState(false);

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: '',
        isValid: false,
      },
      description: {
        value: '',
        isValid: false,
      },
    },
    false
  );

  const identifiedPlace = PLACES.find((p) => p.id === placeId);

  useEffect(() => {
    if (identifiedPlace) {
      setFormData(
        {
          title: {
            value: identifiedPlace.title,
            isValid: true,
          },
          description: {
            value: identifiedPlace.description,
            isValid: true,
          },
        },
        true
      );
    }
    setLoaded(true);
  }, [setFormData, identifiedPlace]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  if (!identifiedPlace) {
    return (
      <div className='new-place'>
        <h2>Could Not Find Place</h2>
      </div>
    );
  }

  return (
    loaded && (
      <form className='place-form' onSubmit={handleSubmit}>
        <Input
          id='title'
          element='input'
          type='text'
          label='title'
          validators={[VALIDATOR_REQUIRE()]}
          errorText='Please enter a valid title'
          onInput={inputHandler}
          value={formState.inputs.title.value}
          valid={formState.inputs.title.isValid}
        />
        <Input
          id='description'
          element='textarea'
          label='Description'
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText='Please enter a valid description (min. 5 characters).'
          onInput={inputHandler}
          value={formState.inputs.description.value}
          valid={formState.inputs.description.isValid}
        />
        <Button type='submit' disabled={!formState.isValid}>
          Update Place
        </Button>
      </form>
    )
  );
};

export default UpdatePlace;
