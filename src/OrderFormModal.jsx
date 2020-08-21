import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Modal from '@material-ui/core/Modal';

import OrderFormContainer from './OrderFormContainer';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    position: 'absolute',
    width: 300,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function OrderFormModal({ open, closeModal }) {
  const classes = useStyles();

  const body = (
    <div className={classes.paper}>
      <h2 id="orderform-modal-title">주문서</h2>
      <div id="orderfrom-modal-description">
        <OrderFormContainer />
      </div>
    </div>
  );

  return (
    <Modal
      open={open}
      onClose={closeModal}
      className={classes.modal}
      aria-labelledby="orderform-modal-title"
      aria-describedby="orderfrom-modal-description"
    >
      {body}
    </Modal>
  );
}
