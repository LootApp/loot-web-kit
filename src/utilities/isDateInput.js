/**
 * @desc detect browser support for date input
 * @return {Boolean}
 */
const isDateInput = () => {
  const input = document.createElement("input");
  input.setAttribute("type", "date");
  const notADateValue = "not-a-date";
  input.setAttribute("value", notADateValue);
  return input.value !== notADateValue;
};

export default isDateInput;
