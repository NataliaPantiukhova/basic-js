const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let resultArray = [],
    arrayLength = arr.length,
    filteredArray = [];
  const processedValue = 'xxx';
  for (let i = 0; i < arrayLength; i++) {
    switch (arr[i]) {
      case '--discard-next':
        if ((i + 1) < arrayLength) {
          resultArray[i] = processedValue;
          resultArray[i + 1] = processedValue;
        } else {
          resultArray[i] = processedValue;
        };
        break;
      case '--discard-prev':
        if ((i - 1) >= 0) {
          resultArray[i] = processedValue;
          resultArray[i - 1] = processedValue;
        } else {
          resultArray[i] = processedValue;
        };
        break;
      case '--double-next':
        if ((i + 1) < arrayLength) {
          resultArray[i] = arr[i + 1];
          //resultArray[i + 1] = arr[i + 1];
        } else {
          resultArray[i] = processedValue;
        };
        break;
      case '--double-prev':
        if ((i - 1) >= 0) {
          resultArray[i] = arr[i - 1];
          //resultArray[i - 1] = arr[i - 1];
        } else {
          resultArray[i] = processedValue;
        };
        break;
      default:
        if (resultArray[i] !== processedValue) {
          resultArray[i] = arr[i];
        };
        break;
    }
  };

  filteredArray = resultArray.filter(item => item !== processedValue);
  return filteredArray;
};

