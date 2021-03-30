export const formatTime = param => {
  let seconds = 0;
  let minutes = 0;
  let hours = 0;

  if (param == undefined || isNaN(param) || param < 0) {
    return null;
  }
  if (param > 59) {
    seconds = param % 60;
  } else if (param <= 59) {
    seconds = param;
  }
  if (param > 59) {
    minutes = Math.floor((param / 60) % 60);
  }
  if (param > 59) {
    hours = Math.floor(param / 3600);
  }

  if (seconds <= 9) {
    seconds = '0' + seconds;
  }
  if (minutes <= 9) {
    minutes = '0' + minutes;
  }
  if (hours <= 9) {
    hours = '0' + hours;
  }
  return `${hours}:${minutes}:${seconds}`;
};