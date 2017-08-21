import stringFormatter from "./stringFormatter";

/**
 * @desc Returns length for Input Format with delimiters
 * @param  {Number} rchar
 * @param  {Number} occur
 * @return {Number}
 */
const formatLength = (maxLength, occurance, delimiter) => {
  if (!maxLength) return null;
  if (!occurance || !delimiter) return maxLength;
  const value = new Array(maxLength + 1).join("1");
  const formatedValue = stringFormatter({
    occurance,
    delimiter,
    value
  }).substring(0, maxLength);
  const requiredChar = formatedValue.split(delimiter).join("");
  return requiredChar.length;
};

export default formatLength;
