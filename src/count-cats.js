const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let mainLength = backyard.length,
      catsCount = 0;

  for (let i = 0; i < mainLength; i++){
    let smallLength = backyard[i].length;
    for (let j = 0; j < smallLength; j++){
      let smallElement = backyard[i][j];
      if (smallElement === '^^'){
        catsCount += 1;
      };
    };
  };
  return catsCount;
};