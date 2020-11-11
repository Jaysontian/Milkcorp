var data = {

   //Main Stats
   coins: 0,
   rate: 0,
   speed: 1000,
   milk: 100,
   maxmilk: 100,
   click:1,
   price: 1,
   cows: 1,

   //Constant Indices
   value: 0,
   newsindex: 0,
   researchlevel: 0,
   ascendlevel: 0,
   multiplier:1,
   
   // Upgrades
   rank: 1,
   upgrades: 0, // Upgrade Count
   upgradesmax: 20, // Upgrades needed for next rank
   
   // Hidden Features
   unlockresearch: false,
   unlockascension: true,
   unlocktown: true,

   //Possible Other Stuff???
   diamonds: 0,
   kindness: 0,
}

/* Ideas For Updates

- Achievements
- Unlocking New Minigames

*/

var upgrades = [
{
   "name":"Carton Packaging",
   "details":"Automilk $0.1 more per second.",
   "base":15,
   "increment":1.1,
   "count":0,
   "max":20,
   "function":"Game.upgrade1()",
   "rank":1,
},
{
   "name":"Hire Farmer",
   "details":"Increase milk regeneration speed by 15%.",
   "base":30,
   "increment":1.65,
   "count":0,
   "max":3,
   "function":"Game.upgrade2()",
   "rank":1,
},
{
   "name":"Antibiotics",
   "details":"Better milk quality to increase sale price by $0.25",
   "base":60,
   "increment":1.35,
   "count":0,
   "max":10,
   "function":"Game.upgrade3()",
   "rank":1,
},
{
   "name":"Hire Scientist",
   "details":"Ability to research.",
   "base":200,
   "increment":1.35,
   "count":0,
   "max":1,
   "function":"Game.upgrade4()",
   "rank":1,
},
{
   "name":"Chocolate Milk",
   "details":"Automilk increases by 10% per second.",
   "base":50,
   "increment":1.15,
   "count":0,
   "max":20,
   "function":"Game.upgrade5()",
   "rank":2,
},
{
   "name":"Farmhouse Remodel",
   "details":"Increase milk storage capacity by 25%",
   "base":132,
   "increment":1.39,
   "count":0,
   "max":15,
   "function":"Game.upgrade6()",
   "rank":2,
},
{
   "name":"Comfy Housing",
   "details":"Increase milk generation speed by 20%.",
   "base":100,
   "increment":1.4,
   "count":0,
   "max":10,
   "function":"Game.upgrade7()",
   "rank":2,
},
{
   "name":"Low Fat Milk",
   "details":"Increase sales price by $0.5",
   "base":125,
   "increment":1.22,
   "count":0,
   "max":10,
   "function":"Game.upgrade8()",
   "rank":3,
},
{
   "name":"Better Filtration",
   "details":"Increase automilk rate by 25%.",
   "base":150,
   "increment":1.4,
   "count":0,
   "max":20,
   "function":"Game.upgrade9()",
   "rank":3,
},
{
   "name":"Modify Genetics",
   "details":"Increase milk generation speed by 5%.",
   "base":200,
   "increment":1.3,
   "count":0,
   "max":30,
   "function":"Game.upgrade10()",
   "rank":3,
},
{
   "name":"Golden Milk",
   "details":"Filtered gold out of milk. Increase price by 10 cents.",
   "base":500,
   "increment":2.13,
   "count":0,
   "max":10,
   "function":"Game.upgrade11()",
   "rank":4,
},
{
   "name":"Metal Barns",
   "details":"New material. Increase milk storage capacity by 10%.",
   "base":1125,
   "increment":1.52,
   "count":0,
   "max":20,
   "function":"Game.upgrade12()",
   "rank":4,
},
{
   "name":"Another Cow",
   "details":"Buy another cow.",
   "base":6500,
   "increment":1.0,
   "count":0,
   "max":1,
   "function":"Game.upgrade13()",
   "rank":5,
},
]

var research = [
{
   "name":"Factory Upgrade",
   "details":"Increase factory size to hold 25% more milk.",
   "txt":"The factory was upgraded and milk storage capacity increased.",
   "cost":105,
   "function":"Research.factoryupgrade()",
   "level":0,
   'completed':false,
},
{
   "name":"Health Analysis",
   "details":"Increase click to be 2 times as effective.",
   "txt":"Researchers discover that cow size is linked to amount of proteins in diet.",
   "cost":225,
   "function":"Research.breedanalysis()",
   "level":0,
   'completed':false,
},
{
   "name":"Protein Injection",
   "details":"Feed cows more protein to double automilk rate.",
   "txt":"Protein diet was effective. Cows now have more milk.",
   "cost":388,
   "function":"Research.proteininjection()",
   "level":1,
   'completed':false,
},
{
   "name":"Selective Breeding",
   "details":"Grow cows to double income per manual click.",
   "txt":"Selectively bred cows increased in size and produced 2x more milk.",
   "cost":700,
   "function":"Research.selectivebreeding()",
   "level":3,
   'completed':false,
},
{
   "name":"Cancer Transplant",
   "details":"Conduct a provincial experiment on cows and mutation.",
   "txt":"The mutation experiment was a success! Your company was awarded $1000.",
   "cost":1520,
   "function":"Research.cancertransplant()",
   "level":3,
   'completed':false,
},
{
   "name":"Valuable Clicks",
   "details":"Your clicks are worth 10 times more.",
   "txt":"Each click is now worth $ " + data.coins,
   "cost":3000,
   "function":"Research.valuableclicks()",
   "level":4,
   'completed':false,
},
{
   "name":"Russian Moolette",
   "details":"Gain membership to local casino to earn some quick cash.",
   "txt":"You left your farm for the first time and went to the local village.",
   "cost":4052,
   "function":"Research.russianmoolette()",
   "level":5,
   'completed':false,
},
{
   "name":"Field Maintenance",
   "details":"Buy some land and open a garden.",
   "txt":"You repaved the land and bought some seeds. It\'s close to the farm.",
   "cost":2978,
   "function":"Research.()",
   "level":6,
   'completed':false,
},
{
   "name":"upgrade_name",
   "details":"details",
   "txt":"after text",
   "cost":0,
   "function":"Research.()",
   "level":10,
   'completed':false,
},
]

var ascension = [
{
   "name":'Muscular Cow',
   "details":'It is an abnormally strong cow that makes milk with lots of iron.',
   "value":10000,
},
{
   "name":'Medicinal Cow',
   "details":'This cow makes milk that can have healing effects on humans.',
   "value":500000,
},
{
   "name":'Antiquity Cow',
   "details":'This cow creates milk containing the different antiquity metals - gold, silver etc. ',
   "value":4000000,
},
{
   "name":'Electricity Cow',
   "details":'Humans can now use cow milk as a source of energy. ',
   "value":23000000,
},
{
   "name":'Atomic Cow',
   "details":'Any matter can now be built with milk.',
   "value":54000000000,
},
{
   "name":'Dark Matter Cow',
   "details":'Dark matter milk unlocks the possibilities of space innovation and discovery. ',
   "value":72000000000000,
},
{
   "name":'Galaxy Cow',
   "details":'Humans can now use cow milk as a source of energy. ',
   "value":89000000000000000,
},
{
   "name":'Alien Cow',
   "details":'Humans explore and discover cows from another solar system that produces galactic milk. ',
   "value":2400000000000000000000,
},
{
   "name":'AI Cow',
   "details":'Humans can now use cow milk as a source of energy. ',
   "value":45000000000000000000000000,
},
{
   "name":'Robot Cow',
   "details":'Humans can now use cow milk as a source of energy. ',
   "value":4000000,
},
{
   "name":'Terminator Cow',
   "details":'Humans can now use cow milk as a source of energy. ',
   "value":4000000,
},
{
   "name":'Universe Cow',
   "details":'Humans can now use cow milk as a source of energy. ',
   "value":4000000,
},
]

var places = [{
   "name":"Casino",
   "unlock":false,
   "function":"Place.casino()",
}
]





