import stringFormatter from "../utilities/stringFormatter";

const defaultOptions = {
  value: "34strings",
  delimiter: "",
  occurance: 0
};

const numericOptions = {
  value: "34strings".replace(/[^0-9-]/g, ""),
  delimiter: "",
  occurance: 0
};

const sortCodeOptions = {
  value: "233434",
  delimiter: "-",
  occurance: 2
};

describe("stringFormatter", () => {
  it("returns unformatted string when options are default", () => {
    expect(stringFormatter(defaultOptions)).toBe("34strings");
  });
  it("returns only Numbers when numbersOnly props is passed", () => {
    expect(stringFormatter(numericOptions)).toBe("34");
  });
  it("returns formatted sort code when sortCodeOptions is passed", () => {
    expect(stringFormatter(sortCodeOptions)).toBe("23-34-34");
  });
});
