import React from 'react';
import PropTypes from 'prop-types';
import s from './Notification.module.css';

const Notification = ({ message }) => {
  return (
    <div className={s.wrapper}>
      <p className={s.text}>{message}</p>
    </div>
  );
};

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
