"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const auth_1 = require("../utils/auth");
const resolvers = {
    Query: {
        characters: async () => {
            return models_1.Character.find().populate('race');
        },
        cities: async () => {
            return models_1.City.find();
        },
        races: async () => {
            return models_1.Race.find();
        },
        countries: async () => {
            return models_1.Country.find();
        },
        classes: async () => {
            return models_1.Class.find();
        },
        me: async (parent, { _id }) => {
            return models_1.User.findById(_id).populate({
                path: 'worlds',
                model: 'World',
                populate: [
                    {
                        path: 'regions',
                        model: 'Region',
                        populate: {
                            path: 'countries',
                            model: 'Country',
                            populate: [
                                {
                                    path: 'cities',
                                    model: 'City'
                                },
                                {
                                    path: 'religions',
                                    model: 'Religion',
                                    populate: {
                                        path: 'gods',
                                        model: 'God'
                                    }
                                }
                            ]
                        }
                    },
                    {
                        path: 'religions',
                        model: 'Religion',
                        populate: {
                            path: 'gods',
                            model: 'God'
                        }
                    },
                    {
                        path: 'characters',
                        model: 'Character',
                        populate: {
                            path: 'race',
                            model: 'Race'
                        }
                    }
                ]
            });
        },
        worlds: async (parent, args) => {
            return models_1.World.find().populate([
                {
                    path: 'regions',
                    model: 'Region',
                    populate: {
                        path: 'countries',
                        model: 'Country',
                        populate: [
                            {
                                path: 'cities',
                                model: 'City'
                            },
                            {
                                path: 'religions',
                                model: 'Religion',
                                populate: {
                                    path: 'gods',
                                    model: 'God'
                                }
                            }
                        ]
                    }
                },
                {
                    path: 'religions',
                    model: 'Religion',
                    populate: {
                        path: 'gods',
                        model: 'God'
                    }
                },
                {
                    path: 'characters',
                    model: 'Character',
                    populate: {
                        path: 'race',
                        model: 'Race'
                    }
                }
            ]);
        },
        userWorlds: async (parent, { creator }) => {
            try {
                const worlds = await models_1.World.find({ creator });
                return worlds;
            }
            catch (err) {
                console.log(err);
                return err;
            }
        },
        world: async (parent, { name }) => {
            try {
                console.log(name);
                const world = await models_1.World.findOne({ name }).populate([
                    {
                        path: 'regions',
                        model: 'Region',
                        populate: {
                            path: 'countries',
                            model: 'Country',
                            populate: [
                                {
                                    path: 'cities',
                                    model: 'City'
                                },
                                {
                                    path: 'religions',
                                    model: 'Religion',
                                    populate: {
                                        path: 'gods',
                                        model: 'God'
                                    }
                                }
                            ]
                        }
                    },
                    {
                        path: 'religions',
                        model: 'Religion',
                        populate: {
                            path: 'gods',
                            model: 'God'
                        }
                    },
                    {
                        path: 'characters',
                        model: 'Character',
                        populate: {
                            path: 'race',
                            model: 'Race'
                        }
                    }
                ]);
                return world;
            }
            catch (err) {
                console.log(err);
                return err;
            }
        },
        singleCharacter: async (parent, { _id }) => {
            return models_1.Character.findById(_id).populate([
                {
                    path: 'race',
                    model: 'Race'
                }
            ]);
        },
        singleReligion: async (parent, { _id }) => {
            try {
                return models_1.Religion.findById(_id).populate('gods');
            }
            catch (error) {
                console.log(error);
                return error;
            }
        },
        singleGod: async (parent, { _id }) => {
            try {
                return models_1.God.findById(_id);
            }
            catch (error) {
                console.log(error);
                return error;
            }
        },
        singleMonster: async (parent, { _id }) => {
            try {
                return models_1.Monster.findById(_id);
            }
            catch (error) {
                console.log(error);
                return error;
            }
        },
        singleRegion: async (parent, { _id }) => {
            try {
                return models_1.Region.findById(_id);
            }
            catch (error) {
                console.log(error);
                return error;
            }
        },
    },
    Mutation: {
        createUser: async (parent, args) => {
            try {
                const user = await models_1.User.create(args);
                const token = (0, auth_1.signToken)(user);
                return { user, token };
            }
            catch (err) {
                console.log(err);
                return err;
            }
        },
        updateToken: async (parents, args) => {
        },
        login: async (parent, { email, password }) => {
            try {
                const user = await models_1.User.findOne({ email });
                if (!user) {
                    throw new Error('No Profile with that email');
                }
                const correctPw = await user.isCorrectPassword(password);
                if (!correctPw) {
                    throw new Error('Incorrect password!');
                }
                const token = (0, auth_1.signToken)(user);
                return { token, user };
            }
            catch (err) {
                console.log(err);
            }
        },
        createWorld: async (parent, { world }) => {
            try {
                const newWorld = await models_1.World.create(world);
                const updatedUser = await models_1.User.findOneAndUpdate({ _id: world.creator }, {
                    $push: { worlds: newWorld }
                }, {
                    new: true
                });
                return newWorld.populate([
                    {
                        path: 'regions',
                        model: 'Region',
                        populate: {
                            path: 'countries',
                            model: 'Country',
                            populate: [
                                {
                                    path: 'cities',
                                    model: 'City'
                                },
                                {
                                    path: 'religions',
                                    model: 'Religion',
                                    populate: {
                                        path: 'gods',
                                        model: 'God'
                                    }
                                }
                            ]
                        }
                    },
                    {
                        path: 'religions',
                        model: 'Religion',
                        populate: {
                            path: 'gods',
                            model: 'God'
                        }
                    },
                    {
                        path: 'characters',
                        model: 'Character',
                        populate: {
                            path: 'race',
                            model: 'Race'
                        }
                    }
                ]);
            }
            catch (err) {
                return err;
            }
        },
        // TODO: Optimize this shit
        updateWorld: async (parent, { world }) => {
            try {
                const updatedWorld = await models_1.World.findByIdAndUpdate(world._id, { $set: { ...world } }, { new: true });
                console.log(updatedWorld);
                return updatedWorld;
            }
            catch (err) {
                return err;
            }
        },
        deleteWorld: async (parent, { worldId }) => {
            try {
                const deleted = await models_1.World.findByIdAndDelete(worldId);
                console.log(deleted);
                return deleted;
            }
            catch (err) {
                return err;
            }
        },
        createCharacter: async (parent, { character, worldId }) => {
            try {
                const newCharacter = await models_1.Character.create(character);
                const updatedWorld = await models_1.World.findOneAndUpdate({ _id: worldId }, {
                    $push: { characters: newCharacter }
                }, {
                    new: true
                }).populate([
                    {
                        path: 'regions',
                        model: 'Region',
                        populate: {
                            path: 'countries',
                            model: 'Country',
                            populate: [
                                {
                                    path: 'cities',
                                    model: 'City'
                                },
                                {
                                    path: 'religions',
                                    model: 'Religion',
                                    populate: {
                                        path: 'gods',
                                        model: 'God'
                                    }
                                }
                            ]
                        }
                    },
                    {
                        path: 'religions',
                        model: 'Religion',
                        populate: {
                            path: 'gods',
                            model: 'God'
                        }
                    },
                    {
                        path: 'characters',
                        model: 'Character',
                        populate: {
                            path: 'race',
                            model: 'Race'
                        }
                    }
                ]);
                return updatedWorld;
            }
            catch (error) {
                console.log(error);
            }
        },
        updateCharacter: async (parent, { character, worldId }) => {
            try {
                const updatedCharacter = await models_1.Character.findByIdAndUpdate(character._id, { $set: { ...character } }, { new: true });
                const world = await models_1.World.findById(worldId, { new: true }).populate([
                    {
                        path: 'regions',
                        model: 'Region',
                        populate: {
                            path: 'countries',
                            model: 'Country',
                            populate: [
                                {
                                    path: 'cities',
                                    model: 'City'
                                },
                                {
                                    path: 'religions',
                                    model: 'Religion',
                                    populate: {
                                        path: 'gods',
                                        model: 'God'
                                    }
                                }
                            ]
                        }
                    },
                    {
                        path: 'religions',
                        model: 'Religion',
                        populate: {
                            path: 'gods',
                            model: 'God'
                        }
                    },
                    {
                        path: 'characters',
                        model: 'Character',
                        populate: {
                            path: 'race',
                            model: 'Race'
                        }
                    }
                ]);
                return world;
            }
            catch (error) {
                console.log(error);
            }
        },
        deleteCharacter: async (parent, { characterId, worldId }) => {
            try {
                const deleted = await models_1.Character.findByIdAndDelete(characterId);
                const world = await models_1.World.findById(worldId, { new: true }).populate([
                    {
                        path: 'regions',
                        model: 'Region',
                        populate: {
                            path: 'countries',
                            model: 'Country',
                            populate: [
                                {
                                    path: 'cities',
                                    model: 'City'
                                },
                                {
                                    path: 'religions',
                                    model: 'Religion',
                                    populate: {
                                        path: 'gods',
                                        model: 'God'
                                    }
                                }
                            ]
                        }
                    },
                    {
                        path: 'religions',
                        model: 'Religion',
                        populate: {
                            path: 'gods',
                            model: 'God'
                        }
                    },
                    {
                        path: 'characters',
                        model: 'Character',
                        populate: {
                            path: 'race',
                            model: 'Race'
                        }
                    }
                ]);
                return world;
            }
            catch (error) {
                console.log(error);
            }
        },
        createMonster: async (parent, { monster, worldId, regionId }) => {
            try {
                const newMonster = await models_1.Monster.create(monster);
                const updatedRegion = await models_1.Region.findByIdAndUpdate(regionId, {
                    $push: { monsters: newMonster }
                }, {
                    new: true
                });
                const world = await models_1.World.findById(worldId).populate([
                    {
                        path: 'regions',
                        model: 'Region',
                        populate: [
                            {
                                path: 'countries',
                                model: 'Country',
                                populate: [
                                    {
                                        path: 'cities',
                                        model: 'City'
                                    },
                                    {
                                        path: 'religions',
                                        model: 'Religion',
                                        populate: {
                                            path: 'gods',
                                            model: 'God'
                                        }
                                    }
                                ]
                            },
                            {
                                path: 'monsters',
                                model: 'Monster'
                            }
                        ]
                    },
                    {
                        path: 'religions',
                        model: 'Religion',
                        populate: {
                            path: 'gods',
                            model: 'God'
                        }
                    },
                    {
                        path: 'characters',
                        model: 'Character',
                        populate: {
                            path: 'race',
                            model: 'Race'
                        }
                    }
                ]);
                return world;
            }
            catch (error) {
                console.log(error);
            }
        },
        updateMonster: async (parent, { monster, worldId, regionId }) => {
            try {
                const updatedMonster = await models_1.Monster.findById(monster._id, { $set: { ...monster } }, { new: true });
                const world = await models_1.World.findById(worldId).populate([
                    {
                        path: 'regions',
                        model: 'Region',
                        populate: [
                            {
                                path: 'countries',
                                model: 'Country',
                                populate: [
                                    {
                                        path: 'cities',
                                        model: 'City'
                                    },
                                    {
                                        path: 'religions',
                                        model: 'Religion',
                                        populate: {
                                            path: 'gods',
                                            model: 'God'
                                        }
                                    }
                                ]
                            },
                            {
                                path: 'monsters',
                                model: 'Monster'
                            }
                        ]
                    },
                    {
                        path: 'religions',
                        model: 'Religion',
                        populate: {
                            path: 'gods',
                            model: 'God'
                        }
                    },
                    {
                        path: 'characters',
                        model: 'Character',
                        populate: {
                            path: 'race',
                            model: 'Race'
                        }
                    }
                ]);
                return world;
            }
            catch (error) {
                console.log(error);
            }
        },
        deleteMonster: async (parent, { monsterId, worldId, regionId }) => {
            try {
                const deleted = await models_1.Monster.findByIdAndDelete(monsterId);
                const world = await models_1.World.findById(worldId).populate([
                    {
                        path: 'regions',
                        model: 'Region',
                        populate: [
                            {
                                path: 'countries',
                                model: 'Country',
                                populate: [
                                    {
                                        path: 'cities',
                                        model: 'City'
                                    },
                                    {
                                        path: 'religions',
                                        model: 'Religion',
                                        populate: {
                                            path: 'gods',
                                            model: 'God'
                                        }
                                    }
                                ]
                            },
                            {
                                path: 'monsters',
                                model: 'Monster'
                            }
                        ]
                    },
                    {
                        path: 'religions',
                        model: 'Religion',
                        populate: {
                            path: 'gods',
                            model: 'God'
                        }
                    },
                    {
                        path: 'characters',
                        model: 'Character',
                        populate: {
                            path: 'race',
                            model: 'Race'
                        }
                    }
                ]);
                return world;
            }
            catch (error) {
                console.log(error);
            }
        },
        createRegion: async (parent, { region, worldId }) => {
            try {
                const newRegion = await models_1.Region.create(region);
                const updatedWorld = await models_1.World.findOneAndUpdate({ _id: worldId }, {
                    $push: { regions: newRegion }
                }, {
                    new: true
                }).populate([
                    {
                        path: 'regions',
                        model: 'Region',
                        populate: {
                            path: 'countries',
                            model: 'Country',
                            populate: [
                                {
                                    path: 'cities',
                                    model: 'City'
                                },
                                {
                                    path: 'religions',
                                    model: 'Religion',
                                    populate: {
                                        path: 'gods',
                                        model: 'God'
                                    }
                                }
                            ]
                        }
                    },
                    {
                        path: 'religions',
                        model: 'Religion',
                        populate: {
                            path: 'gods',
                            model: 'God'
                        }
                    },
                    {
                        path: 'characters',
                        model: 'Character',
                        populate: {
                            path: 'race',
                            model: 'Race'
                        }
                    }
                ]);
                return updatedWorld;
            }
            catch (error) {
                console.log(error);
            }
        },
        updateRegion: async (parent, { region, worldId }) => {
            try {
                const updatedRegion = await models_1.Region.findByIdAndUpdate(region._id, { $set: { ...region } }, { new: true });
                const world = await models_1.World.findById(worldId).populate([
                    {
                        path: 'regions',
                        model: 'Region',
                        populate: {
                            path: 'countries',
                            model: 'Country',
                            populate: [
                                {
                                    path: 'cities',
                                    model: 'City'
                                },
                                {
                                    path: 'religions',
                                    model: 'Religion',
                                    populate: {
                                        path: 'gods',
                                        model: 'God'
                                    }
                                }
                            ]
                        }
                    },
                    {
                        path: 'religions',
                        model: 'Religion',
                        populate: {
                            path: 'gods',
                            model: 'God'
                        }
                    },
                    {
                        path: 'characters',
                        model: 'Character',
                        populate: {
                            path: 'race',
                            model: 'Race'
                        }
                    }
                ]);
                return world;
            }
            catch (error) {
                console.log(error);
            }
        },
        deleteRegion: async (parent, { regionId, worldId }) => {
            try {
                const deleted = await models_1.Region.findByIdAndDelete(regionId);
                const world = await models_1.World.findById(worldId).populate([
                    {
                        path: 'regions',
                        model: 'Region',
                        populate: {
                            path: 'countries',
                            model: 'Country',
                            populate: [
                                {
                                    path: 'cities',
                                    model: 'City'
                                },
                                {
                                    path: 'religions',
                                    model: 'Religion',
                                    populate: {
                                        path: 'gods',
                                        model: 'God'
                                    }
                                }
                            ]
                        }
                    },
                    {
                        path: 'religions',
                        model: 'Religion',
                        populate: {
                            path: 'gods',
                            model: 'God'
                        }
                    },
                    {
                        path: 'characters',
                        model: 'Character',
                        populate: {
                            path: 'race',
                            model: 'Race'
                        }
                    }
                ]);
                return world;
            }
            catch (error) {
                console.log(error);
            }
        },
        createReligion: async (parent, { religion, worldId }) => {
            try {
                const newReligion = await models_1.Religion.create(religion);
                const updatedWorld = await models_1.World.findOneAndUpdate({ _id: worldId }, {
                    $push: { religions: newReligion }
                }, {
                    new: true
                }).populate([
                    {
                        path: 'regions',
                        model: 'Region',
                        populate: {
                            path: 'countries',
                            model: 'Country',
                            populate: [
                                {
                                    path: 'cities',
                                    model: 'City'
                                },
                                {
                                    path: 'religions',
                                    model: 'Religion',
                                    populate: {
                                        path: 'gods',
                                        model: 'God'
                                    }
                                }
                            ]
                        }
                    },
                    {
                        path: 'religions',
                        model: 'Religion',
                        populate: {
                            path: 'gods',
                            model: 'God'
                        }
                    },
                    {
                        path: 'characters',
                        model: 'Character',
                        populate: {
                            path: 'race',
                            model: 'Race'
                        }
                    }
                ]);
                return updatedWorld;
            }
            catch (error) {
                console.log(error);
            }
        },
        updateReligion: async (parent, { religion, worldId }) => {
            try {
                const updatedReligion = await models_1.Religion.findByIdAndUpdate(religion._id, { $set: { ...religion } });
                const world = await models_1.World.findOneAndUpdate(worldId).populate([
                    {
                        path: 'regions',
                        model: 'Region',
                        populate: {
                            path: 'countries',
                            model: 'Country',
                            populate: [
                                {
                                    path: 'cities',
                                    model: 'City'
                                },
                                {
                                    path: 'religions',
                                    model: 'Religion',
                                    populate: {
                                        path: 'gods',
                                        model: 'God'
                                    }
                                }
                            ]
                        }
                    },
                    {
                        path: 'religions',
                        model: 'Religion',
                        populate: {
                            path: 'gods',
                            model: 'God'
                        }
                    },
                    {
                        path: 'characters',
                        model: 'Character',
                        populate: {
                            path: 'race',
                            model: 'Race'
                        }
                    }
                ]);
                return world;
            }
            catch (error) {
                console.log(error);
            }
        },
        deleteReligion: async (parent, { religionId, worldId }) => {
            try {
                const deleted = await models_1.Religion.findByIdAndDelete(religionId);
                const world = await models_1.World.findById(worldId).populate([
                    {
                        path: 'regions',
                        model: 'Region',
                        populate: {
                            path: 'countries',
                            model: 'Country',
                            populate: [
                                {
                                    path: 'cities',
                                    model: 'City'
                                },
                                {
                                    path: 'religions',
                                    model: 'Religion',
                                    populate: {
                                        path: 'gods',
                                        model: 'God'
                                    }
                                }
                            ]
                        }
                    },
                    {
                        path: 'religions',
                        model: 'Religion',
                        populate: {
                            path: 'gods',
                            model: 'God'
                        }
                    },
                    {
                        path: 'characters',
                        model: 'Character',
                        populate: {
                            path: 'race',
                            model: 'Race'
                        }
                    }
                ]);
                return world;
            }
            catch (error) {
                console.log(error);
            }
        },
        createGod: async (parent, { god, worldId, religionId }) => {
            try {
                const newGod = await models_1.God.create(god);
                const updatedReligion = await models_1.Religion.findByIdAndUpdate(religionId, {
                    $push: { gods: newGod }
                }, {
                    new: true
                });
                const world = await models_1.World.findById(worldId).populate([
                    {
                        path: 'regions',
                        model: 'Region',
                        populate: {
                            path: 'countries',
                            model: 'Country',
                            populate: [
                                {
                                    path: 'cities',
                                    model: 'City'
                                },
                                {
                                    path: 'religions',
                                    model: 'Religion',
                                    populate: {
                                        path: 'gods',
                                        model: 'God'
                                    }
                                }
                            ]
                        }
                    },
                    {
                        path: 'religions',
                        model: 'Religion',
                        populate: {
                            path: 'gods',
                            model: 'God'
                        }
                    },
                    {
                        path: 'characters',
                        model: 'Character',
                        populate: {
                            path: 'race',
                            model: 'Race'
                        }
                    }
                ]);
                return world;
            }
            catch (error) {
                console.log(error);
            }
        },
        updateGod: async (parent, { god, worldId }) => {
            try {
                const updatedGod = await god.findByIdAndUpdate(god._id, { $set: { ...god } });
                const world = await models_1.World.findOneAndUpdate(worldId).populate([
                    {
                        path: 'regions',
                        model: 'Region',
                        populate: {
                            path: 'countries',
                            model: 'Country',
                            populate: [
                                {
                                    path: 'cities',
                                    model: 'City'
                                },
                                {
                                    path: 'religions',
                                    model: 'Religion',
                                    populate: {
                                        path: 'gods',
                                        model: 'God'
                                    }
                                }
                            ]
                        }
                    },
                    {
                        path: 'religions',
                        model: 'Religion',
                        populate: {
                            path: 'gods',
                            model: 'God'
                        }
                    },
                    {
                        path: 'characters',
                        model: 'Character',
                        populate: {
                            path: 'race',
                            model: 'Race'
                        }
                    }
                ]);
                return world;
            }
            catch (error) {
                console.log(error);
            }
        },
        deleteGod: async (parent, { godId, worldId }) => {
            try {
                const deleted = await models_1.God.findByIdAndDelete(godId);
                const world = await models_1.World.findById(worldId).populate([
                    {
                        path: 'regions',
                        model: 'Region',
                        populate: {
                            path: 'countries',
                            model: 'Country',
                            populate: [
                                {
                                    path: 'cities',
                                    model: 'City'
                                },
                                {
                                    path: 'religions',
                                    model: 'Religion',
                                    populate: {
                                        path: 'gods',
                                        model: 'God'
                                    }
                                }
                            ]
                        }
                    },
                    {
                        path: 'religions',
                        model: 'Religion',
                        populate: {
                            path: 'gods',
                            model: 'God'
                        }
                    },
                    {
                        path: 'characters',
                        model: 'Character',
                        populate: {
                            path: 'race',
                            model: 'Race'
                        }
                    }
                ]);
                return world;
            }
            catch (error) {
                console.log(error);
            }
        }
    }
};
exports.default = resolvers;
