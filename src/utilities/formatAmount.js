/**
 * @desc Formats amount into 0.00
 * @param  {String} value
 * @return {String}
 */
const formatAmount = value => {
  if (typeof value === "string") {
    let formatedValue = value.toString().replace(/[^0-9]/g, "") || "0.00";
    if (formatedValue.length === 1) formatedValue = `0.0${value}`;
    else {
      formatedValue = formatedValue.split(".").join("");
      const length = formatedValue.length;
      formatedValue = `${formatedValue.substring(0, length - 2)}.${formatedValue.substring(
        length - 2
      )}`;
    }
    formatedValue = Number(formatedValue).toString();
    if (formatedValue.indexOf(".") === -1) formatedValue = `${formatedValue}.00`;
    const decimal = formatedValue.substring(formatedValue.indexOf(".") + 1);
    if (decimal.length < 2) formatedValue = `${formatedValue}0`;
    if (formatedValue.indexOf(".") === -1) formatedValue = `${formatedValue}.00`;
    return formatedValue === "NaN" ||
    formatedValue === "0" ||
    formatedValue === "00.00" ||
    formatedValue === "NaN.00"
      ? ""
      : formatedValue;
  }
};

export default formatAmount;
