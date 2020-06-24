import React, { useReducer, useEffect } from 'react';

import { validate } from '../../util/validators';

const inputReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        value: action.payload,
        isValid: validate(action.payload, action.validators),
      };

    case 'TOUCH':
      return {
        ...state,
        isTouched: true,
      };

    default:
      return state;
  }
};

const Input = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.value || '',
    isTouched: false,
    isValid: props.valid || false,
  });

  const {
    id,
    label,
    element,
    type,
    placeholder,
    errorText,
    validators,
    onInput,
    rows = 3,
  } = props;
  const { value, isValid, isTouched } = inputState;

  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, isValid, onInput]);

  const handleChange = (event) => {
    dispatch({ type: 'CHANGE', payload: event.target.value, validators });
  };

  const handleBlur = () => {
    dispatch({ type: 'TOUCH' });
  };

  const formElement =
    element === 'input' ? (
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
      />
    ) : (
      <textarea
        id={id}
        rows={rows}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
      />
    );

  return (
    <div
      className={`form-control ${
        !isValid && isTouched && 'form-control--invalid'
      }`}
    >
      <label htmlFor={id}>{label}</label>
      {formElement}
      {!isValid && isTouched && <p>{errorText}</p>}
    </div>
  );
};

export default Input;
