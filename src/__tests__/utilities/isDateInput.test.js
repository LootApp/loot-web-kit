import isDateInput from "../../utilities/isDateInput";

describe("isDateInput", () => {
  it("returns false when browser doesnt support date input", () => {
    expect(isDateInput()).toEqual(false);
  });
});
