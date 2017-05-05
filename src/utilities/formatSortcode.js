/**
 * @desc formats value in accordance to the options
 * @return {String}
 */
const format = (options) => {
  // create a regex with the delimiter as a value to remove
  const regex = new RegExp(`${options.delimiter}`, "g");

  // sanatize the value by removing delimiter before use
  const value = options.value.replace(regex, "");

  // create new array to store the strings
  const inputAsArray = [];

  for (let i = 0; i < value.length; i += 1) { // eslint-disable-next-line

    // applies the delimiter at every point in which the options.occurance states
    if (i !== 0 && i % options.occurance === 0) inputAsArray.push(options.delimiter);

    // push the charecter into the array
    inputAsArray.push(value[i]);
  }

  return inputAsArray.join().replace(/,/g, "");
};


/**
 * @desc formats value into 'xx-xx-xx'
 * @return {String}
 */
const formatSortcode = (value = "") =>
  format({
    value: value.toString().replace(/[^0-9-]/g, ""),
    delimiter: "-",
    occurance: 2
  });


export default formatSortcode;
