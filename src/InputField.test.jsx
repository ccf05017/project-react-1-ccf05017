import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import InputField from './InputField';

describe('InputField', () => {
  const label = '주문자 이름';
  const name = 'username';
  const value = '';
  const handleChange = jest.fn();

  function renderInputField() {
    return render((
      <InputField
        label={label}
        name={name}
        value={value}
        onChange={handleChange}
      />
    ));
  }

  it('renders the form', () => {
    const { getByLabelText } = renderInputField();

    expect(getByLabelText(label)).not.toBeNull();
  });

  it('listens the change event', () => {
    const { getByLabelText } = renderInputField();

    fireEvent.change(getByLabelText(label), {
      target: { value: '홍길동' },
    });

    expect(handleChange).toBeCalled();
  });
});
