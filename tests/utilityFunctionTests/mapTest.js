const assertions = require("../../assertions");
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

const runTests = function() {
  assertions.assertArraysEqual(utilities.map(bands, band => band.length), [11, 11, 21, 3, 16]);
  assertions.assertArraysEqual(utilities.map(bands, band => band[0]), ["L", "E", "R", "D", "T"]);
  assertions.assertArraysEqual(utilities.map(bands, band => isInFavourites(band)), [true, false, true, true, false]);
};

runTests();
