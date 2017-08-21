/**
 * @desc Returns length for Input Format with delimiters
 * @param  {Number} rchar
 * @param  {Number} occur
 * @return {Number}
 */
// const formatLength = (rchar, occur) => {
//   if (!occur) return rchar;
//   const length = (rchar - 1) / occur + rchar;
//   return Math.floor(length);
// };

const formatLength = (maxLength, occurance) => {
  let requiredChar = 0;
  if (maxLength % occurance === 0) requiredChar = maxLength - occurance;
  else requiredChar = maxLength - maxLength % occurance;
  return requiredChar;
};

export default formatLength;
