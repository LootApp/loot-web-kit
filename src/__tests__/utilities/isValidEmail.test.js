import isValidEmail from "../../utilities/isValidEmail";

const validEmail = "contact@mail.com";
const emptyDomain = "contact@mail.";
const missingDomain = "contact@mail";
const emptyAddress = "contact@.com";
const missingAddress = "contact";
const emptyName = "@mail.com";
const emptyString = "";
const array = [];
const object = {};
const boolean = false;
const number = 25;

describe("isValidEmail", () => {
  it("returns true when email has valid address and domain", () => {
    expect(isValidEmail(validEmail)).toBe(true);
  });
  it("returns false when email has no domain", () => {
    expect(isValidEmail(missingDomain)).toBe(false);
  });
  it("returns false when email domain is empty", () => {
    expect(isValidEmail(emptyDomain)).toBe(false);
  });
  it("returns false when email has no address", () => {
    expect(isValidEmail(missingAddress)).toBe(false);
  });
  it("returns false when email address is empty", () => {
    expect(isValidEmail(emptyAddress)).toBe(false);
  });
  it("returns false when email name is empty", () => {
    expect(isValidEmail(emptyName)).toBe(false);
  });
  it("returns false when input is empty string", () => {
    expect(isValidEmail(emptyString)).toBe(false);
  });
  it("returns false when input is an array", () => {
    expect(isValidEmail(array)).toBe(false);
  });
  it("returns false when input is an array", () => {
    expect(isValidEmail(array)).toBe(false);
  });
  it("returns false when input is an object", () => {
    expect(isValidEmail(object)).toBe(false);
  });
  it("returns false when input is an boolean", () => {
    expect(isValidEmail(boolean)).toBe(false);
  });
  it("returns false when input is an number", () => {
    expect(isValidEmail(number)).toBe(false);
  });
});
