/**
 * @desc Returns length for Input Format with delimiters
 * @param  {Number} rchar
 * @param  {Number} occur
 * @return {Number}
 */
const formatLength = (rchar, occur) => {
  if (!occur) return rchar;
  const length = Math.floor(rchar + (rchar + (occur - 1)) / occur + 1 - 2);
  return length;
};

export default formatLength;
