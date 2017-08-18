/**
 * @desc Returns length for Input Format with delimiters
 * @param  {Number} rchar
 * @param  {Number} occur
 * @return {Number}
 */
const formatLength = (rchar, occur) => {
  if (!occur) return rchar;
  const length = rchar + (rchar + (occur - 1)) / occur - 1;
  return Math.floor(length);
};

export default formatLength;
