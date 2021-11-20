const assert = require('chai').assert;
const utilities = require("../../utilityFunctions");

const bands = ["Linkin Park", "Evanescence", "Red Hot Chili Peppers", "D12", "Three Days Grace"];

/**
* Custom Callback function to help test map. This one will determine
* if a given band is a favourite
* @param {the band to check} band
* @returns
*/
const isInFavourites = function(band) {
  const favourites = ["Linkin Park", "Red Hot Chili Peppers", "D12"];
  return favourites.includes(band);
};

describe("#map", () => {
  it("mapping the bands to their length should be [11, 11, 21, 3, 16]", () => {
    assert.deepEqual(utilities.map(bands, band => band.length), [11, 11, 21, 3, 16]);
  });
  it("mapping the bands to their first character should be ['L', 'E', 'R', 'D', 'T']", () => {
    assert.deepEqual(utilities.map(bands, band => band[0]), ["L", "E", "R", "D", "T"]);
  });
  it("mapping the bands to the isInFavourites check should be [true, false, true, true, false]", () => {
    assert.deepEqual(utilities.map(bands, band => isInFavourites(band)), [true, false, true, true, false]);
  });
});
