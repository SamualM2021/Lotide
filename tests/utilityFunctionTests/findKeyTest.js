const assert = require('chai').assert;
const utilities = require("../../utilityFunctions");

const magicEvents = {
  "Gray Fullbuster": { type: "Ice" , isDragonslayerMagic: false, spell: "Ice Cannon", value: 25 },
  "Erza Scarlet": { type: "Requip" , isDragonslayerMagic: false, spell: "Equip Heaven's Wheel Armor", value: 0 },
  "Lucy Heartfilia": { type: "Holder", isDragonslayerMagic: false , spell: "Open Gate: Aquarius", value: 0 },
  "Natsu Dragneel": { type: "Fire" , isDragonslayerMagic: true, spell: "Fire Dragon Roar", value: 25 }

};

//Used to showcase a variety of uses and keep test code a bit cleaner
const isTypeHolder = key => magicEvents[key].type === "Holder";
const isDragonslayerMagic = key => magicEvents[key].isDragonslayerMagic;
const doesDealDamage = key => magicEvents[key].value > 0;
const isEquipSpell = key => magicEvents[key].spell.includes("Equip");
const isWaterType = key => magicEvents[key].type === "Water";
describe("#findKey", () => {
  it("the first key of type holder should be Lucy Heartfilia", () => {
    assert.equal(utilities.findKey(magicEvents, isTypeHolder), "Lucy Heartfilia");
  });
  it("the first key with dragonslayer magic true should be Natsu Dragneel", () => {
    assert.equal(utilities.findKey(magicEvents, isDragonslayerMagic), "Natsu Dragneel");
  });
  it("the first key that deals damage should be Gray Fullbuster", () => {
    assert.equal(utilities.findKey(magicEvents, doesDealDamage), "Gray Fullbuster");
  });
  it("the first key that is an Equip spell should be Erza Scarlet", () => {
    assert.equal(utilities.findKey(magicEvents, isEquipSpell), "Erza Scarlet");
  });
  it("trying to find a key with water type returns undefined", () => {
    assert.equal(utilities.findKey(magicEvents, isWaterType), undefined);
  });
});
