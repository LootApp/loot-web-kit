var stringFormatter = require("../../utilities/stringFormatter");

var defaultOptions = {
  value: "34strings",
  delimiter: ""
};

var numericOptions = {
  value: "34strings".replace(/[^0-9-]/g, ""),
  delimiter: "",
  occurance: 0
};

var sortCodeOptions = {
  value: "233434",
  delimiter: "-",
  occurance: 2
};

describe("stringFormatter", () => {
  it("returns unformatted string when options are default", () => {
    expect(stringFormatter(defaultOptions)).toEqual("34strings");
  });
  it("returns only Numbers when numbersOnly props is passed", () => {
    expect(stringFormatter(numericOptions)).toEqual("34");
  });
  it("returns formatted sort code when sortCodeOptions is passed", () => {
    expect(stringFormatter(sortCodeOptions)).toEqual("23-34-34");
  });
});
