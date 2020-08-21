import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Modal from '@material-ui/core/Modal';

import OrderFormContainer from './OrderFormContainer';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
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
  const [modalStyle] = React.useState(getModalStyle);

  const body = (
    <div style={modalStyle} className={classes.paper}>
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
      aria-labelledby="orderform-modal-title"
      aria-describedby="orderfrom-modal-description"
    >
      {body}
    </Modal>
  );
}
