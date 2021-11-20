const assert = require('chai').assert;
const utilities = require("../../utilityFunctions");

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  comedySciFi: "Resident Alien",
  canadianSciFi: "Orphan Black"
};

describe("#findKeyByValue", () => {
  it("Brooklyn 99 should be found to be a comedy", () => {
    assert.equal(utilities.findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
  });
  it("The Expanse should be found to be a scifi", () => {
    assert.equal(utilities.findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sciFi");
  });
  it("Fairy Tail should return undefined", () => {
    assert.equal(utilities.findKeyByValue(bestTVShowsByGenre, "Fairy Tail"), undefined);
  });
  it("an empty array should return undefined", () => {
    assert.equal(utilities.findKeyByValue([], "The Wire"), undefined);
  });
  it("null object should return undefined", () => {
    assert.equal(utilities.findKeyByValue(null, "The Wire"), undefined);
  });
  it("a null key should return undefined", () => {
    assert.equal(utilities.findKeyByValue(bestTVShowsByGenre, null), undefined);
  });
  it("Resident Alien should return comedySciFi", () => {
    assert.equal(utilities.findKeyByValue(bestTVShowsByGenre, "Resident Alien"), "comedySciFi");
  });
  it("Orphan Black should return canadianSciFi", () => {
    assert.equal(utilities.findKeyByValue(bestTVShowsByGenre, "Orphan Black"), "canadianSciFi");
  });
});
