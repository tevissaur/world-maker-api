import db from '../config/connection';
import { Character, City, Country, Class, God, Monster, Organization, Race, Region, Religion, User, World } from '../models';
import { Schema } from 'mongoose'

const { ObjectId } = Schema.Types

let characterIds = [
    ObjectId,
    ObjectId,
    ObjectId,
]

let cityIds = [
    ObjectId,
    ObjectId,
    ObjectId,
    ObjectId,
]

let countryIds = [
    ObjectId,
    ObjectId,
    ObjectId,
]

let godIds = [
    ObjectId,
    ObjectId,
    ObjectId,
    ObjectId,
    ObjectId,
    ObjectId,
    ObjectId,
    ObjectId,
]

let raceIds = [
    ObjectId,
    ObjectId,
    ObjectId,
    ObjectId,
]

let religionIds = [
    ObjectId,
    ObjectId,
    ObjectId,
]

let userIds = [
    ObjectId,
    ObjectId,
    ObjectId,
]

let worldIds = [
    ObjectId,
    ObjectId,
    ObjectId,
]

let regionIds = [
    ObjectId,
    ObjectId,
    ObjectId,
    ObjectId,
]

let monsterIds = [
    ObjectId,
    ObjectId,
    ObjectId,
]

const monsterData = [
    {
        _id: monsterIds[0],
        name: 'Hippogriff',
        description: 'Half bird, half horse',
        size: 'Five feet in length',
    },
    {
        _id: monsterIds[1],
        name: '',
        description: '',
        size: '',
    },
    {
        _id: monsterIds[2],
        name: '',
        description: '',
        size: '',
    },
]

const characterData = [
    {
        _id: characterIds[0],
        description: "",
        race: raceIds[3],
        bonds: [],
        goals: [],
        fears: [],
        name: "Alexandria",
        backstory: "She has complete control of her entire being."
    },
    {
        _id: characterIds[1],
        description: "",
        race: raceIds[2],
        bonds: [],
        goals: [],
        fears: [],
        name: "Oz",
        backstory: "Mysterious as he is clever."
    },
    {
        _id: characterIds[2],
        description: "",
        race: raceIds[3],
        bonds: [],
        goals: [],
        fears: [],
        name: "Ardik",
        backstory: "Molded from the very Clay of Aerden."
    }
]

const cityData = [
    {
        _id: cityIds[0],
        name: "Hearth of the Bay"
    },
    {
        _id: cityIds[1],
        name: "Bastow"
    },
    {
        _id: cityIds[2],
        name: "Storm's End"
    },
    {
        _id: cityIds[3],
        name: "Ravenstone"
    }
]

const countryData = [
    {
        _id: countryIds[0],
        name: "Tarlir",
        religions: [
            religionIds[2],
            religionIds[1]
        ],
        government: {
            style: "Parlimentary Republic"
        },
        cities: [
            cityIds[3]
        ]
    },
    {
        _id: countryIds[1],
        name: "Eleron",
        religions: [
            religionIds[0]
        ],
        government: {
            style: "Feudal"
        },
        cities: [
            cityIds[0],
            cityIds[2],
        ]
    },
    {
        _id: countryIds[2],
        name: "Baern",
        religions: [
            religionIds[2],
            religionIds[1]
        ],
        government: {
            style: "Theocracy"
        },
        cities: [
            cityIds[1]
        ]
    }
]

const godsData = [
    {
        _id: godIds[0],
        name: 'Dansa',
        description: 'the god of Brawls, Athletics, and Smithing',
        domains: ['Ambition', 'Strength', 'Forge'],
        symbol: 'A fist holding a smithing hammer',
        alignment: 'LG'
    },
    {
        _id: godIds[1],
        name: 'Inaely',
        description: ' the goddess of Summer, Justice, Truth, and Order',
        domains: ['City', 'Strength', 'Knowledge'],
        symbol: 'A fist holding a smithing hammer',
        alignment: 'LG'
    },
    {
        _id: godIds[2],
        name: 'Bareshna',
        description: 'the Oracle of Eleron, the god of the Sun',
        domains: ['Light'],
        symbol: 'An eye with the sun as the pupil',
        alignment: 'NG'
    },
    {
        _id: godIds[3],
        name: 'The Traveler',
        description: 'the god of Trickery',
        domains: ['Trickery', 'Grave'],
        symbol: 'Hand giving a finger gun with a banner popping out of the barrel saying \'BANG!\' or whatever you want really he doesn\'t care',
        alignment: 'CN'
    },
    {
        _id: godIds[4],
        name: 'Vodu',
        description: 'the Sea, River, and Oceans',
        domains: ['Druidic'],
        symbol: 'Water',
        alignment: 'CN'
    },
    {
        _id: godIds[5],
        name: 'Asmodeus',
        description: 'the god of Tyranny, and Deceit',
        domains: ['Trickery', 'Forge', 'War'],
        symbol: 'Devil\'s Horns',
        alignment: 'LE'
    },
    {
        _id: godIds[6],
        name: 'Tiamat',
        description: 'the dragon goddess of Evil',
        domains: ['War', 'Death'],
        symbol: 'Dragons head with broken horns',
        alignment: 'NE'
    },
    {
        _id: godIds[7],
        name: 'Bhaal',
        description: 'the god of Murder',
        domains: ['Death', 'Grave', 'War'],
        symbol: 'Skull with blood coming out the eyes',
        alignment: 'CE'
    },
]

const raceData = [
    {
        _id: raceIds[0],
        name: 'Human'
    },
    {
        _id: raceIds[1],
        name: 'Elf'
    },
    {
        _id: raceIds[2],
        name: 'Dwarf'
    },
    {
        _id: raceIds[3],
        name: 'Half-Elf'
    }
]

const regionData = [
    {
        _id: regionIds[0],
        name: 'The Northern Realms',
        countries: [
            countryIds[0],
            countryIds[2],
        ],
        landmarks: [
            {
                name: 'The Wolf\'s Wall',
                description: 'Big ol wall'
            },

        ]
    },
    {
        _id: regionIds[1],
        name: 'The Southern Reach',
        countries: [
            countryIds[1]
        ]
    }
]

const religionData = [
    {
        _id: religionIds[0],
        name: 'Convent of the Commons',
        gods: [
            godIds[0],
            godIds[1],
            godIds[2],
            godIds[3],
            godIds[4],
            godIds[5],
            godIds[6],
            godIds[7],
        ]
    },
    {
        _id: religionIds[1],
        name: 'Children of the Light',
        gods: [
            godIds[0],
            godIds[1],
            godIds[2],
            godIds[3],
            godIds[4],
            godIds[5],
            godIds[6],
            godIds[7],
        ]
    },
    {
        _id: religionIds[2],
        name: 'The Old Ways',
        gods: [
            godIds[0],
            godIds[1],
            godIds[2],
            godIds[3],
            godIds[4],
            godIds[5],
            godIds[6],
            godIds[7],
        ]
    }
]

const worldData = [
    {
        _id: worldIds[0],
        name: 'Aerden',
        creator: userIds[0],
        regions: [
            regionIds[0],
            regionIds[1]
        ],
        religions: [
            religionIds[0],
            religionIds[1],
            religionIds[2],
        ],
        characters: [
            characterIds[0],
            characterIds[1],
            characterIds[2],
        ]
    }
]

const userData = {
    _id: userIds[0],
    username: 'Tevissaur',
    email: 'tevis@email.com',
    password: 'pass12345',
    worlds: [
        worldIds[0]
    ]
}





db.once('open', async () => {

    await Character.deleteMany({})
    await City.deleteMany({})
    await Country.deleteMany({})
    await God.deleteMany({})
    await Race.deleteMany({})
    await Region.deleteMany({})
    await Religion.deleteMany({})
    await User.deleteMany({})
    await World.deleteMany({})

    const characters = await Character.insertMany(characterData)
    const cities = await City.insertMany(cityData)
    const countries = await Country.insertMany(countryData)
    // const classes = await Class.insertMany(classData)
    const gods = await God.insertMany(godsData)
    // const histories = await History.insertMany(historyData)
    // const monsters= await Monster.insertMany(monsterData)
    // const organizations = await Organization.insertMany(orgData)
    // const quotes = await Quote.insertMany(quoteData)
    const races = await Race.insertMany(raceData)
    const regions = await Region.insertMany(regionData)
    const religions = await Religion.insertMany(religionData)
    const users = await User.create(userData)
    // const users = await User.insertMany(userData)
    const worlds = await World.insertMany(worldData)

    console.log('all done!')
    process.exit(0)
})
