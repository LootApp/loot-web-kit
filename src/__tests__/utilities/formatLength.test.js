import formatLength from "../../utilities/formatLength";

describe("formatLength", () => {
  it("for maxLength 11 and occurance 3 should return 9", () => {
    expect(formatLength(11, 3, "-")).toEqual(9);
  });
  it("for maxLength 19 and occurance 4 should return 16", () => {
    expect(formatLength(19, 4, "-")).toEqual(16);
  });
  it("for maxLength 5 and occurance 2 should return 4", () => {
    expect(formatLength(5, 2, "-")).toEqual(4);
  });
  it("for maxLength 16 and occurance 4 should return 13", () => {
    expect(formatLength(16, 4, "-")).toEqual(13);
  });
  it("for maxLength 19 and occurance 2 should return 13", () => {
    expect(formatLength(19, 2, "-")).toEqual(13);
  });
  it("for maxLength 10 and occurance 3 should return 8", () => {
    expect(formatLength(10, 3, "-")).toEqual(8);
  });
  it("for maxLength 9 and occurance 2 should return 7", () => {
    expect(formatLength(10, 2, "-")).toEqual(7);
  });
  it("for maxLength 9 and occurance 3 should return 7", () => {
    expect(formatLength(9, 3, "-")).toEqual(7);
  });
  it("for maxLength 8 and occurance 4 should return 7", () => {
    expect(formatLength(8, 4, "-")).toEqual(7);
  });
  it("for maxLength 17 and occurance 4 should return 14", () => {
    expect(formatLength(17, 4, "-")).toEqual(14);
  });
  it("for maxLength 20 and occurance 2 should return 14", () => {
    expect(formatLength(20, 2, "-")).toEqual(14);
  });
  it("for maxLength 8 and occurance 2 should return 6", () => {
    expect(formatLength(8, 2, "-")).toEqual(6);
  });
  it("for maxLength 7 and occurance 3 should return 6", () => {
    expect(formatLength(7, 3, "-")).toEqual(6);
  });
  it("for maxLength 13 and occurance 4 should return 11", () => {
    expect(formatLength(13, 4, "-")).toEqual(11);
  });
  it("for maxLength 28 and occurance 5 should return 24", () => {
    expect(formatLength(28, 5, "-")).toEqual(24);
  });
  it("for maxLength 8 and occurance 0 should return 8", () => {
    expect(formatLength(8, 0, "-")).toEqual(8);
  });
  it("for only maxLength 8 should return 8", () => {
    expect(formatLength(8)).toEqual(8);
  });
  it("for no arguments should return null", () => {
    expect(formatLength()).toEqual(null);
  });
});
