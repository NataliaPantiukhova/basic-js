const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date == null) {
    return 'Unable to determine the time of year!';
  }
  function isValidDate(date) {
    return date && Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date);
  }

  if (isValidDate(date) == false) {
    throw new Error('Unable to determine the time of year!');
  }

  let monthNumber = date.getMonth();

  if (monthNumber <= 4 && monthNumber >= 2){
    return 'spring';
  } else if (monthNumber <= 7 && monthNumber >= 5){
    return 'summer';
  } else if (monthNumber <= 10 && monthNumber >= 8){
    return 'fall';
  } else if (monthNumber == 11 || monthNumber == 1 || monthNumber == 0) {
    return 'winter';
  } else {
    throw new Error('Unable to determine the time of year!');
  };

  
};
