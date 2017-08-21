import stringFormatter from "./stringFormatter";

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

const formatLength = (maxLength, occurance, delimiter) => {
  const value = new Array(maxLength + 1).join("x"); // 8 here is maxLength
  const formatedPlaceholder = stringFormatter({
    occurance,
    delimiter,
    value
  });
  const formatedPlaceholderWithCorrectLength = formatedPlaceholder.substring(0, maxLength);
  const reqCharacters = formatedPlaceholderWithCorrectLength.split(delimiter).join("");
  return reqCharacters.length;
};

export default formatLength;
