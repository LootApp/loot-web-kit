import formatLength from "../../utilities/formatLength";

describe("formatLength", () => {
  it("should return 9 for length 11 and occurance 3", () => {
    expect(formatLength(11, 3)).toEqual(9);
  });
  it("should return 16 for length 19 and occurance 4", () => {
    expect(formatLength(19, 4)).toEqual(16);
  });
  it("should return 4 for length 5 and occurance 2", () => {
    expect(formatLength(5, 2)).toEqual(4);
  });
  it("should return 6 for length 8 and occurance 2", () => {
    expect(formatLength(8, 2)).toEqual(6);
  });
});
