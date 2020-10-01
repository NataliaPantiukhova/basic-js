const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let resultArray = [],
      arrayLength = arr.length,
      filteredArray = [];

  for (let i = 0; i < arrayLength; i++){
    switch (arr[i]) {
      case '--discard-next':
        if ((i + 1) < arrayLength){
          resultArray.splice(0, i);
          resultArray.splice(0, i + 1);
        } else {
          resultArray.splice(0, i);
        };
        break;
      case '--discard-prev':
        if ((i - 1) >= 0){
          resultArray.splice(0, i);
          resultArray.splice(0, i - 1);
        } else {
          resultArray.splice(0, i);
        };
        break;
      case '--double-next':
        if ((i + 1) < arrayLength){
          resultArray[i] = arr[i + 1];
        } else {
          resultArray.splice(0, i);
        };
        break;
      case '--double-prev':
        if ((i - 1) >= 0){
          resultArray[i] = arr[i - 1];
        } else {
          resultArray.splice(0, i);
        };
        break;
      default:
        resultArray[i] = arr[i];
      break;
    }
  };
  
// console.log(arr);
//console.log(resultArray);
  filteredArray = resultArray.filter(function () { return true });
  //console.log(resultArray);
  filteredArray = resultArray;
  filteredArray = resultArray.filter(function( element ) {
    // console.log(typeof element);
    // return element !== undefined && element != null;

      // return element !== null;
      return true;
  });
  for (let i = 0; i < filteredArray.length; i++){
    if (typeof filteredArray[i] == 'undefined' ){
      filteredArray.splice(0, i);
    };
  };
  filteredArray = resultArray;//filteredArray.filter(function () { return true });
  return filteredArray;
};
