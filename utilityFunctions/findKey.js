/**
* This function asserts if the actual value is equivalent to the
* expected value.
* @param {the actual value} actual
* @param {the expected value} expected
*/
const assertEqual = function(actual, expected) {
  const assertionPassedMessage = `💚💚💚 Assertion Passed: ${actual} === ${expected}`;
  const assertionFailedMessage = `💔💔💔 Assertion Failed: ${actual} !== ${expected}`;
  if (actual === expected) {
    console.log(assertionPassedMessage);
  } else {
    console.log(assertionFailedMessage);
  }
};


/**
* This function scans the object and returns the first key when the callback return a truthy value
* Otherwise this returns undefined
* @param {the given object} object
* @param {the callback to use to check the key} callback
* @returns {either undefined or} key
*/
const findKey = function(object, callback) {
  for (let key in object) {
    if (callback(key)) {
      return key;
    }
  }
  return undefined;
};

const runTests = function() {
  const magicEvents = {
    "Gray Fullbuster": { type: "Ice" , isDragonslayerMagic: false, spell: "Ice Cannon", value: 25 },
    "Erza Scarlet": { type: "Requip" , isDragonslayerMagic: false, spell: "Equip Heaven's Wheel Armor", value: 0 },
    "Lucy Heartfilia": { type: "Holder", isDragonslayerMagic: false , spell: "Open Gate: Aquarius", value: 0 },
    "Natsu Dragneel": { type: "Fire" , isDragonslayerMagic: true, spell: "Fire Dragon Roar", value: 25 }

  };

  assertEqual(findKey(magicEvents, key => magicEvents[key].type === "Holder"), "Lucy Heartfilia");
  assertEqual(findKey(magicEvents, key => magicEvents[key].isDragonslayerMagic), "Natsu Dragneel");
  assertEqual(findKey(magicEvents, key => magicEvents[key].value > 0), "Gray Fullbuster");
  assertEqual(findKey(magicEvents, key => magicEvents[key].spell.includes("Equip")), "Erza Scarlet");
  assertEqual(findKey(magicEvents, key => magicEvents[key].type === "Water"), undefined);
};

runTests();
