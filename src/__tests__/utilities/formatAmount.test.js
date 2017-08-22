import formatAmount from "../../utilities/formatAmount";

const numeric = 434;
const emptyString = "";
const threeDecimals = "0.434";
const fourDecimals = "0.1232";
const twoHundredFifty = "250";
const zero = "0.00";

describe("formatAmount", () => {
  it("returns undefined when amount is not passed", () => {
    expect(formatAmount()).toEqual(undefined);
  });
  it("returns undefined when amount is numeric", () => {
    expect(formatAmount(numeric)).toEqual(undefined);
  });
  it("returns emptyString when amount is empty string", () => {
    expect(formatAmount(emptyString)).toEqual("");
  });
  it("returns 4.34 when amount is 0.434", () => {
    expect(formatAmount(threeDecimals)).toEqual("4.34");
  });
  it("returns 12.32 when amount is 0.1232", () => {
    expect(formatAmount(fourDecimals)).toEqual("12.32");
  });
  it("returns 0.00 when amount is 0", () => {
    expect(formatAmount(zero)).toEqual("0.00");
  });
  it("returns 2.50 when amount is 250", () => {
    expect(formatAmount(twoHundredFifty)).toEqual("2.50");
  });
});
