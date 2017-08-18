/**
 * @desc Returns length for Input Format with delimiters
 * @param  {Number} maxLength
 * @param  {Number} occurance
 * @return {Number}
 */
const formatLength = (maxLength, occurance) => {
  if (occurance) {
    const newLength =
      this.props.maxLength - (this.props.occurance - this.props.maxLength % this.props.occurance);
    return newLength;
  }
  return maxLength;
};

export default formatLength;
