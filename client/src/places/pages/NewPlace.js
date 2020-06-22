import React from 'react';

import Input from '../../shared/components/FormElements/Input';
import { VALIDATOR_REQUIRE } from '../../shared/util/validators';

const NewPlace = () => {
  return (
    <div className='new-place'>
      <h2>New Place</h2>
      <form className='place-form'>
        <h6>New Place Form</h6>
        <Input
          type='text'
          element='input'
          label='Title'
          validators={[VALIDATOR_REQUIRE()]}
          errorText='Please enter a valid title'
        />
      </form>
    </div>
  );
};

export default NewPlace;
