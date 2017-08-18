/**
 * @desc Returns length for Input Format with delimiters
 * @param  {Number} maxLength
 * @param  {Number} occurance
 * @return {Number}
 */
const formatLength = (maxLength, occurance) => {
  if (occurance) {
    const newLength = maxLength - (occurance - maxLength % occurance);
    return newLength;
  }
  return maxLength;
};

export default formatLength;
