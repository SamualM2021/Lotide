const assert = require('chai').assert;
const utilities = require("../../utilityFunctions");

const firstTestObject = { a: "1", b: "2" };
const secondTestObject = { b: "2", a: "1" };
const thirdTestObject = { a: "1", b: "2", c: "3" };
const firstDeepTestObject = { a: "1", b: { message: "YES"}, c: "3" };
const secondDeepTestObject = { a: "1", b: { message: "YES"}, c: "3" };
const thirdDeepTestObject = { a: "1", b: { message: "NO"}, c: "3" };
const firstArrayTestObject = { c: "1", d: ["2", 3] };
const secondArrayTestObject = { d: ["2", 3], c: "1" };
const thirdArrayTestObject = { c: "1", d: ["2", 3, 4] };

describe("#eqObjects", () => {
  it("{ a: '1', b: '2' } should equal {  b: '2', a: '1' }", () => {
    assert.isTrue(utilities.eqObjects(firstTestObject, secondTestObject));
  });
  it("null should equal null", () => {
    assert.isTrue(utilities.eqObjects(null, null));
  });
  it("{ a: '1', b: { message: 'YES'}, c: '3 } should equal { a: '1', b: { message: 'YES'}, c: '3 }", () => {
    assert.isTrue(utilities.eqObjects(firstDeepTestObject, secondDeepTestObject));
  });
  it("{c: '1', d: ['2', 3] } should equal {d: ['2', 3], c: '1' } ", () => {
    assert.isTrue(utilities.eqObjects(firstArrayTestObject, secondArrayTestObject));
  });
  it("{ a: '1', b: '2' } should equal { a: '1', b: '2', c= '3'}", () => {
    assert.isFalse(utilities.eqObjects(firstTestObject, thirdTestObject));
  });
  it("null should not equal an empty array", () => {
    assert.isFalse(utilities.eqObjects(null, []));
  });
  it("two empty objects are not equal", () => {
    assert.isFalse(utilities.eqObjects({}, {}));
  });
  it("{ a: '1', b: '2' } should not equal { a: '1', b: { message: 'NO'}, c: '3 }", () => {
    assert.isFalse(utilities.eqObjects(firstTestObject, thirdDeepTestObject));
  });
  it("{ a: '1', b: { message: 'YES'}, c: '3 } should not equal { a: '1', b: { message: 'NO'}, c: '3 }", () => {
    assert.isFalse(utilities.eqObjects(firstDeepTestObject, thirdDeepTestObject));
  });
  it("{c: '1', d: ['2', 3] } should not equal {c: '1', d: ['2', 3, 4] } should equal", () => {
    assert.isFalse(utilities.eqObjects(firstArrayTestObject, thirdArrayTestObject));
  });
});
