import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({
  good,
  neutral,
  bad,
  totalfeedback,
  feedbackPercentage,
}) => {
  return (
    <ul className={s.list}>
      <li className={s.item}>
        Good: <span className={s.itemtext}>{good}</span>
      </li>
      <li className={s.item}>
        Neutral: <span className={s.itemtext}>{neutral}</span>
      </li>
      <li className={s.item}>
        Bad: <span className={s.itemtext}>{bad}</span>
      </li>
      <li className={s.item}>
        Total: <span className={s.itemtext}>{totalfeedback}</span>
      </li>
      <li className={s.item}>
        Positive feedback:{' '}
        <span className={s.itemtext}>%{feedbackPercentage}</span>
      </li>
    </ul>
  );
};

export default Statistics;

Statistics.defaultProps = {
  good: 0,
  neutral: 0,
  bad: 0,
  totalfeedback: 0,
  feedbackPercentage: 0,
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalfeedback: PropTypes.number.isRequired,
  feedbackPercentage: PropTypes.number.isRequired,
};
