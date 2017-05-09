import stringFormatter from "./stringFormatter";

/**
 * @desc formats value into 'xx-xx-xx'
 * @return {String}
 */
const formatSortcode = (value = "") =>
  stringFormatter({
    value: value.toString().replace(/[^0-9-]/g, ""),
    delimiter: " ",
    occurance: 2
  });


export default formatSortcode;
