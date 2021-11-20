const assert = require('chai').assert;
const utilities = require("../../utilityFunctions");

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const firstResult = utilities.countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

describe("#countOnly", () => {
  it("counting jason should return 1", () => {
    assert.equal(firstResult["Jason"], 1);
  });
  it("counting Karima should return undefined", () => {
    assert.equal(firstResult["Karima"], undefined);
  });
  it("counting Fang should return 2", () => {
    assert.equal(firstResult["Fang"], 2);
  });
  it("counting Agouhanna should return undefined", () => {
    assert.equal(firstResult["Agouhanna"], undefined);
  });
});
