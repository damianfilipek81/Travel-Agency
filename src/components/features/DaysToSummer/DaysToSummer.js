import React from 'react';
import styles from './DaysToSummer.scss';

class DaysToSummer extends React.Component {

  daysCount() {
    const currentDate = new Date();

    const currentUTCYear = currentDate.getUTCFullYear();
    const currentUTCMonth = currentDate.getUTCMonth();
    const currentUTCDay = currentDate.getUTCDate();
    const currentFullUTCDate = new Date(currentUTCYear, currentUTCMonth, currentUTCDay);

    const holidayStartDate = new Date(currentUTCYear, 5, 21);
    const holidayEndDate = new Date(currentUTCYear, 8, 23);

    let difference;
    if (currentFullUTCDate.getTime() > holidayStartDate.getTime()) {
      const nextHolidayYear = currentUTCYear + 1;
      const nextHolidayYearDate = new Date(nextHolidayYear, 5, 21);
      if (currentFullUTCDate.getTime() >= holidayStartDate.getTime() && currentFullUTCDate.getTime() <= holidayEndDate.getTime()) {
        difference = null;
      } else {
        difference = Math.abs(nextHolidayYearDate - currentFullUTCDate);
      }
    } else {
      difference = Math.abs(holidayStartDate - currentFullUTCDate);
    }

    const days = difference / (1000 * 3600 * 24);

    return days;
  }

  render() {
    return (
      <div className={styles.component}>
        {this.daysCount() == 0 ? null : (this.daysCount() == 1 ? `${this.daysCount()} day to summer` : `${this.daysCount()} days to summer`)}
      </div>
    );
  }
}

export default DaysToSummer;