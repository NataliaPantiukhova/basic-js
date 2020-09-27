const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let { repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|' } = options;
  if (str != null){
    str = str.toString();
  } else {
    str = 'null';
  }
  if (addition != null){
    addition = addition.toString();
  } else {
    addition = 'null';
  }

  console.log(str);
  console.log(options);
  console.log(repeatTimes);
  console.log(additionRepeatTimes);
  let additionString = addition,
      resultStr = str;
  for (let i = 1; i < additionRepeatTimes; i++){
    additionString = `${additionString}${additionSeparator}${addition}`;
  };
  for (let i = 1; i < repeatTimes; i++){
    resultStr = `${resultStr}${additionString}${separator}${str}`;
  };  
  resultStr = `${resultStr}${additionString}`;

  console.log(resultStr);
  return resultStr;
};

