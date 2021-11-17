const assertObjectsEqual = require("../../assertions/assertObjectsEqual");

const firstTestObject = {awesome: "sauce", battle: "bots"};
const secondTestObject = {awesome: "sauce", battle: "bots"};
const thirdTestObject = {awesome: "sauce", battle: "batman"};
const fourthTestObject = {awesome: "sauce", battle: "bots", drink: "shots"};

//PASSES
console.log("EXPECTED PASSES - 1");
assertObjectsEqual(firstTestObject, secondTestObject);

//FAILS
console.log("EXPECTED FAILS - 2");
assertObjectsEqual(firstTestObject, thirdTestObject);
assertObjectsEqual(firstTestObject, fourthTestObject);
