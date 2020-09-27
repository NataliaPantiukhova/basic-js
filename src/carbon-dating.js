const CustomError = require("../extensions/custom-error");

const initialIsotopeActivity= 15; 
const c14HalfLife= 5730;
const ln2Value = 0.693;

module.exports = function dateSample(sampleActivity) {
  if (typeof(sampleActivity) === 'string'){
    if (Number.isInteger(parseFloat(sampleActivity)) && (parseFloat(sampleActivity) > 0) && (parseFloat(sampleActivity) < 100)){
      let nValue = initialIsotopeActivity / parseFloat(sampleActivity);
      let rateConstant = ln2Value / c14HalfLife;
      let result = Math.log(nValue) / rateConstant;  
      return Math.ceil(result); 
    } else {
      return false;
    }
  } else {
    return false;
  };
};
