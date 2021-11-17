const assertions = require("../../assertions");
const utilities = require("../../utilityFunctions");

const runTests = function() {
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

  assertions.assertEqual(utilities.findKey(magicEvents, isTypeHolder), "Lucy Heartfilia");
  assertions.assertEqual(utilities.findKey(magicEvents, isDragonslayerMagic), "Natsu Dragneel");
  assertions.assertEqual(utilities.findKey(magicEvents, doesDealDamage), "Gray Fullbuster");
  assertions.assertEqual(utilities.findKey(magicEvents, isEquipSpell), "Erza Scarlet");
  assertions.assertEqual(utilities.findKey(magicEvents, isWaterType), undefined);
};

runTests();