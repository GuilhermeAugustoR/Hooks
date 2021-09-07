import React from 'react';

const Input = ({ id, label, onChange, value, type, onBlur, error }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
        onChange={onChange}
        onBlur={onBlur}
        type={type}
        value={value}
      />
    </>
  );
};

export default Input;
