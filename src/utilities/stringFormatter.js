/**
 * @desc formats value in accordance to the options supplied
 * @return {String}
 */
const stringFormatter = ({ occurance, delimiter, value }) => {
  // create a regex with the delimiter, as a value to remove
  const regex = new RegExp(`${delimiter}`, "g");

  // create a regex with the occurance value to apply
  const regexOccurance = new RegExp(`(.{${occurance}})`, "g");

  // create a regex to remove delimiter if there is no digit ahead
  const regexStandaloneDelimiter = new RegExp(`${delimiter}(?!.*[0-9])`, "g");

  // sanatize value by removing delimiters
  let formatedValue = value.replace(regex, "");

  // apply regex's to set and/or remove delimiter
  formatedValue = formatedValue
    .replace(regexOccurance, `$1${delimiter}`)
    .replace(regexStandaloneDelimiter, "");

  return formatedValue;
};

export default stringFormatter;
