import db from "../config/connection";
import {
  Character,
  City,
  Country,
  Class,
  God,
  Monster,
  Organization,
  History,
  Landmark,
  Race,
  Region,
  Religion,
  User,
  World,
} from "../models";
import mongoose from "mongoose";
const {
  Types: { ObjectId },
} = mongoose;

let characterIds = [new ObjectId(), new ObjectId(), new ObjectId()];

let classIds = [new ObjectId(), new ObjectId(), new ObjectId(), new ObjectId()];

let orgIds = [new ObjectId(), new ObjectId(), new ObjectId(), new ObjectId()];

let monsterIds = [
  new ObjectId(),
  new ObjectId(),
  new ObjectId(),
  new ObjectId(),
];

let cityIds = [new ObjectId(), new ObjectId(), new ObjectId(), new ObjectId()];

let countryIds = [new ObjectId(), new ObjectId(), new ObjectId()];

let godIds = [
  new ObjectId(),
  new ObjectId(),
  new ObjectId(),
  new ObjectId(),
  new ObjectId(),
  new ObjectId(),
  new ObjectId(),
  new ObjectId(),
];

let raceIds = [new ObjectId(), new ObjectId(), new ObjectId(), new ObjectId()];

let religionIds = [new ObjectId(), new ObjectId(), new ObjectId()];

let userIds = [new ObjectId(), new ObjectId(), new ObjectId()];

let worldIds = [new ObjectId(), new ObjectId(), new ObjectId()];

let regionIds = [
  new ObjectId(),
  new ObjectId(),
  new ObjectId(),
  new ObjectId(),
];

let landmarkIds = [
  new ObjectId(),
  new ObjectId(),
  new ObjectId(),
  new ObjectId(),
];
const monsterData = [
  {
    _id: monsterIds[0],
    name: "Hippogriff",
    description: "Half bird, half horse",
    size: "Large",
  },
  {
    _id: monsterIds[1],
    name: "Zombie",
    description: "Undead creature",
    size: "Medium",
  },
  {
    _id: monsterIds[2],
    name: "Drow",
    description: "Evil elf",
    size: "Medium",
  },
];

const characterData = [
  {
    _id: characterIds[0],
    description: "Red hair and slender, with a green flowing dress",
    race: raceIds[3],
    motives: {
      bonds: [],
      goals: [],
      fears: [],
    },
    name: "Alexandria",
    backstory: "She has complete control of her entire being.",
  },
  {
    _id: characterIds[1],
    description: "Dark haired man with a beard, and piercing blue eyes",
    race: raceIds[2],
    motives: {
      bonds: [],
      goals: [],
      fears: [],
    },
    name: "Oz",
    backstory: "Mysterious as he is clever.",
  },
  {
    _id: characterIds[2],
    description: "Stout dwarf who is as prideful as he is short",
    race: raceIds[3],
    motives: {
      bonds: [],
      goals: [],
      fears: [],
    },
    name: "Ardik",
    backstory: "Molded from the very Clay of Aerden.",
  },
];

const cityData = [
  {
    _id: cityIds[0],
    name: "Hearth of the Bay",
  },
  {
    _id: cityIds[1],
    name: "Bastow",
  },
  {
    _id: cityIds[2],
    name: "Storm's End",
  },
  {
    _id: cityIds[3],
    name: "Ravenstone",
  },
];

const countryData = [
  {
    _id: countryIds[0],
    name: "Tarlir",
    religions: [religionIds[2], religionIds[1]],
    government: {
      style: "Parlimentary Republic",
    },
    cities: [cityIds[3]],
  },
  {
    _id: countryIds[1],
    name: "Eleron",
    religions: [religionIds[0]],
    government: {
      style: "Feudal",
    },
    cities: [cityIds[0], cityIds[2]],
  },
  {
    _id: countryIds[2],
    name: "Baern",
    religions: [religionIds[2], religionIds[1]],
    government: {
      style: "Theocracy",
    },
    cities: [cityIds[1]],
  },
];

const godsData = [
  {
    _id: godIds[0],
    name: "Dansa",
    description: "the god of Brawls, Athletics, and Smithing",
    domains: ["Ambition", "Strength", "Forge"],
    symbol: "A fist holding a smithing hammer",
    alignment: "LG",
  },
  {
    _id: godIds[1],
    name: "Inaely",
    description: " the goddess of Summer, Justice, Truth, and Order",
    domains: ["City", "Strength", "Knowledge"],
    symbol: "A fist holding a smithing hammer",
    alignment: "LG",
  },
  {
    _id: godIds[2],
    name: "Bareshna",
    description: "the Oracle of Eleron, the god of the Sun",
    domains: ["Light"],
    symbol: "An eye with the sun as the pupil",
    alignment: "NG",
  },
  {
    _id: godIds[3],
    name: "The Traveler",
    description: "the god of Trickery",
    domains: ["Trickery", "Grave"],
    symbol:
      "Hand giving a finger gun with a banner popping out of the barrel saying 'BANG!' or whatever you want really he doesn't care",
    alignment: "CN",
  },
  {
    _id: godIds[4],
    name: "Vodu",
    description: "the Sea, River, and Oceans",
    domains: ["Druidic"],
    symbol: "Water",
    alignment: "CN",
  },
  {
    _id: godIds[5],
    name: "Asmodeus",
    description: "the god of Tyranny, and Deceit",
    domains: ["Trickery", "Forge", "War"],
    symbol: "Devil's Horns",
    alignment: "LE",
  },
  {
    _id: godIds[6],
    name: "Tiamat",
    description: "the dragon goddess of Evil",
    domains: ["War", "Death"],
    symbol: "Dragons head with broken horns",
    alignment: "NE",
  },
  {
    _id: godIds[7],
    name: "Bhaal",
    description: "the god of Murder",
    domains: ["Death", "Grave", "War"],
    symbol: "Skull with blood coming out the eyes",
    alignment: "CE",
  },
];

const raceData = [
  {
    _id: raceIds[0],
    name: "Human",
  },
  {
    _id: raceIds[1],
    name: "Elf",
  },
  {
    _id: raceIds[2],
    name: "Dwarf",
  },
  {
    _id: raceIds[3],
    name: "Half-Elf",
  },
];

const landmarkData = [
  {
    _id: landmarkIds[0],
    name: "The Wolf's Wall",
    description: "Big ol wall",
    regions: [regionIds[0]],
  },
];

const regionData = [
  {
    _id: regionIds[0],
    name: "The Northern Realms",
    description: "Temperate climate, but colder the more you go north",
  },
  {
    _id: regionIds[1],
    name: "The Southern Reach",
    description: "The most beautiful place in the world",
  },
];

const religionData = [
  {
    _id: religionIds[0],
    name: "Convent of the Commons",
    gods: [
      godIds[0],
      godIds[1],
      godIds[2],
      godIds[3],
      godIds[4],
      godIds[5],
      godIds[6],
      godIds[7],
    ],
  },
  {
    _id: religionIds[1],
    name: "Children of the Light",
    gods: [
      godIds[0],
      godIds[1],
      godIds[2],
      godIds[3],
      godIds[4],
      godIds[5],
      godIds[6],
      godIds[7],
    ],
  },
  {
    _id: religionIds[2],
    name: "The Old Ways",
    gods: [
      godIds[0],
      godIds[1],
      godIds[2],
      godIds[3],
      godIds[4],
      godIds[5],
      godIds[6],
      godIds[7],
    ],
  },
];

const worldData = [
  {
    _id: worldIds[0],
    name: "Aerden",
    creator: userIds[0],
    regions: [regionIds[0], regionIds[1]],
    religions: [religionIds[0], religionIds[1], religionIds[2]],
    characters: [characterIds[0], characterIds[1], characterIds[2]],
  },
];

const userData = {
  _id: userIds[0],
  username: "Tevissaur",
  email: "tevis@email.com",
  password: "pass12345",
  worlds: [worldIds[0]],
};

db.once("open", async () => {
  await Character.deleteMany({});
  await City.deleteMany({});
  await Country.deleteMany({});
  await God.deleteMany({});
  await Race.deleteMany({});
  await Region.deleteMany({});
  await Religion.deleteMany({});
  await User.deleteMany({});
  await World.deleteMany({});

  await Character.insertMany(characterData);
  await City.insertMany(cityData);
  await Country.insertMany(countryData);
  await Class.insertMany(classData);
  await God.insertMany(godsData);
  await History.insertMany(historyData);
  await Monster.insertMany(monsterData);
  await Organization.insertMany(orgData);
  await Race.insertMany(raceData);
  await Region.insertMany(regionData);
  await Religion.insertMany(religionData);
  await User.create(userData);
  await User.insertMany(userData);
  await World.insertMany(worldData);

  console.log("all done!");
  process.exit(0);
});