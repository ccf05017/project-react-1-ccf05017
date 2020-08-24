import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import OrderFormModal from './OrderFormModal';

jest.mock('react-redux');

describe('OrderFormModal', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      orderForm: {
        username: given.username,
        phoneNumber: '',
        amount: 0,
        address: '',
      },
      orderResult: given.orderResult,
    }));
  });

  context('when modal opened', () => {
    // Material 테스트 어떻게 할지 학습할 것
    it('can be closed by clicking outside', () => {
      const open = true;
      const closeModal = jest.fn();

      const { container } = render((
        <OrderFormModal open={open} closeModal={closeModal}>hello</OrderFormModal>
      ));
    });
  });
});
