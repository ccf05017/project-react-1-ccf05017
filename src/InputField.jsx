import React from 'react';

export default function InputField({
  label, name, value, onChange, type = 'text',
}) {
  const id = `inputField-${name}`;

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      />
    </>
  );
}
