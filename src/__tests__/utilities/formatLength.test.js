import formatLength from "../../utilities/formatLength";

describe("formatLength", () => {
  it("for requiredChar 9 and occurance 3 should return 11", () => {
    expect(formatLength(9, 3)).toEqual(11);
  });
  it("for requiredChar 16 and occurance 4 should return 19", () => {
    expect(formatLength(16, 4)).toEqual(19);
  });
  it("for requiredChar 4 and occurance 2 should return 5", () => {
    expect(formatLength(4, 2)).toEqual(5);
  });
  it("for requiredChar 13 and occurance 4 should return 16", () => {
    expect(formatLength(13, 4)).toEqual(16);
  });
  it("for requiredChar 13 and occurance 2 should return 19", () => {
    expect(formatLength(13, 2)).toEqual(19);
  });
  it("for requiredChar 8 and occurance 3 should return 10", () => {
    expect(formatLength(8, 3)).toEqual(10);
  });
  it("for requiredChar 7 and occurance 2 should return 9", () => {
    expect(formatLength(7, 2)).toEqual(10);
  });
  it("for requiredChar 7 and occurance 3 should return 9", () => {
    expect(formatLength(7, 3)).toEqual(9);
  });
  it("for requiredChar 7 and occurance 4 should return 8", () => {
    expect(formatLength(7, 4)).toEqual(8);
  });
  it("for requiredChar 14 and occurance 4 should return 17", () => {
    expect(formatLength(14, 4)).toEqual(17);
  });
  it("for requiredChar 14 and occurance 2 should return 20", () => {
    expect(formatLength(14, 2)).toEqual(20);
  });
  it("for requiredChar 6 and occurance 2 should return 8", () => {
    expect(formatLength(6, 2)).toEqual(8);
  });
  it("for requiredChar 6 and occurance 3 should return 7", () => {
    expect(formatLength(6, 3)).toEqual(7);
  });
  it("for requiredChar 11 and occurance 4 should return 13", () => {
    expect(formatLength(11, 4)).toEqual(13);
  });
  it("for requiredChar 24 and occurance 5 should return 28", () => {
    expect(formatLength(24, 5)).toEqual(28);
  });
  it("for requiredChar 8 and occurance 0 should return 8", () => {
    expect(formatLength(8, 0)).toEqual(8);
  });
});
