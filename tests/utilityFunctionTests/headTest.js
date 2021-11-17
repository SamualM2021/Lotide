const assert = require('chai').assert;
const utilities = require("../../utilityFunctions");
describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(utilities.getHead([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(utilities.getHead(['5']), '5');
  });

  it("returns undefined for null", () => {
    assert.strictEqual(utilities.getHead(null), undefined);
  });

  it("returns undefined for []", () => {
    assert.strictEqual(utilities.getHead([]), undefined);
  });

  it("returns 5 for [5, 6, 7]", () => {
    assert.strictEqual(utilities.getHead([5, 6, 7]), 5);
  });

  it("returns Hello for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(utilities.getHead(["Hello", "Lighthouse", "Labs"]), "Hello");
  });
});
