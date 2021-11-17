const assertions = require("../../assertions");
const utilities = require("../../utilityFunctions");

const runTests = function() {
  const firstTestObject = { a: "1", b: "2" };
  const secondTestObject = { b: "2", a: "1" };
  const thirdTestObject = { a: "1", b: "2", c: "3" };
  const firstDeepTestObject = { a: "1", b: { message: "YES"}, c: "3" };
  const secondDeepTestObject = { a: "1", b: { message: "YES"}, c: "3" };
  const thirdDeepTestObject = { a: "1", b: { message: "NO"}, c: "3" };
  const firstArrayTestObject = { c: "1", d: ["2", 3] };
  const secondArrayTestObject = { d: ["2", 3], c: "1" };
  const thirdArrayTestObject = { c: "1", d: ["2", 3, 4] };
  assertions.assertTrue(utilities.eqObjects(firstTestObject, secondTestObject));
  assertions.assertFalse(utilities.eqObjects(firstTestObject, thirdTestObject));
  assertions.assertFalse(utilities.eqObjects(null, []));
  assertions.assertTrue(utilities.eqObjects(null, null));
  assertions.assertTrue(utilities.eqObjects({}, {}));
  assertions.assertFalse(utilities.eqObjects(firstTestObject, thirdDeepTestObject));
  assertions.assertTrue(utilities.eqObjects(firstDeepTestObject, secondDeepTestObject));
  assertions.assertFalse(utilities.eqObjects(firstDeepTestObject, thirdDeepTestObject));
  assertions.assertTrue(utilities.eqObjects(firstArrayTestObject, secondArrayTestObject));
  assertions.assertFalse(utilities.eqObjects(firstArrayTestObject, thirdArrayTestObject));
};

runTests();
