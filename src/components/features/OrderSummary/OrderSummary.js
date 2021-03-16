import React from 'react';
import styles from './OrderSummary.scss';
import PropTypes from 'prop-types';
import { calculateTotal } from '../../../utils/calculateTotal';
import { formatPrice } from '../../../utils/formatPrice';
import { formatDate, addDays } from '../../../utils/formatDate';

const OrderSummary = (props) => {
  const { tripCost, options, days } = props;
  const date = options['start-date'];
  const newDate = formatDate(date);
  const formatNewDate = addDays(newDate, days);
  return (
    <div>
      <h2 className={styles.component}>Total: <strong>{formatPrice(calculateTotal(tripCost, options))}</strong></h2>
      <h2 className={styles.component}>Trip starts: {newDate} <strong></strong><br /> Trip ends: {formatNewDate}<strong></strong></h2>
    </div>
  );
};

OrderSummary.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  days: PropTypes.number,
};

export default OrderSummary;