import React from 'react';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';

const OrderOptionDate = ({ setOptionValue, currentValue }) => (
  <div className={styles.component}>
    <DatePicker
      className={styles.input}
      selected={currentValue}
      onChange={date => setOptionValue(date)}
    />
  </div>
);

OrderOptionDate.propTypes = {
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.any,
};

export default OrderOptionDate;