"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const auth_1 = require("../utils/auth");
const resolvers = {
    ArticleSubject: {
        __resolveType(obj, context, { variableValues: { modelName } }) {
            return modelName;
        },
    },
    Query: {
        getSingleSubject: async (parent, { _id, modelName }) => {
            try {
                switch (modelName) {
                    case "User":
                        return await models_1.User.findById(_id);
                    case "Character":
                        return await models_1.Character.findById(_id);
                    case "Religion":
                        return await models_1.Religion.findById(_id);
                    case "Region":
                        return await models_1.Region.findById(_id);
                    case "City":
                        return await models_1.City.findById(_id);
                    case "Country":
                        return await models_1.Country.findById(_id);
                    case "World":
                        return await models_1.World.findById(_id);
                    case "Monster":
                        return await models_1.Monster.findById(_id);
                    case "God":
                        return await models_1.God.findById(_id);
                    case "Class":
                        return await models_1.Class.findById(_id);
                    case "History":
                        return await models_1.History.findById(_id);
                    case "Race":
                        return await models_1.Race.findById(_id);
                    case "Organization":
                        return await models_1.Organization.findById(_id);
                    default:
                        break;
                }
            }
            catch (error) {
                return error;
            }
        },
        getAllOfOneSubject: async (parent, { modelName }) => {
            try {
                switch (modelName) {
                    case "User":
                        return await models_1.User.find();
                    case "Character":
                        return await models_1.Character.find();
                    case "Religion":
                        return await models_1.Religion.find();
                    case "Region":
                        return await models_1.Region.find();
                    case "City":
                        return await models_1.City.find();
                    case "Country":
                        return await models_1.Country.find();
                    case "World":
                        return await models_1.World.find();
                    case "Monster":
                        return await models_1.Monster.find();
                    case "God":
                        return await models_1.God.find();
                    case "Class":
                        return await models_1.Class.find();
                    case "History":
                        return await models_1.History.find();
                    case "Race":
                        return await models_1.Race.find();
                    case "Organization":
                        return await models_1.Organization.find();
                    default:
                        break;
                }
            }
            catch (error) {
                return error;
            }
        }
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
        updateToken: async (parents, args) => { },
        login: async (parent, { email, password }) => {
            try {
                const user = await models_1.User.findOne({ email });
                if (!user) {
                    throw new Error("No Profile with that email");
                }
                const correctPw = await user.isCorrectPassword(password);
                if (!correctPw) {
                    throw new Error("Incorrect password!");
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
                return await models_1.World.create(world);
            }
            catch (err) {
                return err;
            }
        },
        // TODO: Optimize this shit
        updateWorld: async (parent, { world }) => {
            try {
                return await models_1.World.findByIdAndUpdate(world._id, { $set: { ...world } }, { new: true });
            }
            catch (err) {
                return err;
            }
        },
        deleteWorld: async (parent, { worldId }) => {
            try {
                await models_1.World.findByIdAndDelete(worldId);
                return worldId;
            }
            catch (err) {
                return err;
            }
        },
        createCharacter: async (parent, { character }) => {
            try {
                return await models_1.Character.create(character);
            }
            catch (error) {
                console.log(error);
            }
        },
        updateCharacter: async (parent, { character, worldId }) => {
            try {
                return await models_1.Character.findByIdAndUpdate(character._id, { $set: { ...character } }, { new: true });
            }
            catch (error) {
                return error;
            }
        },
        deleteCharacter: async (parent, { characterId, worldId }) => {
            try {
                await models_1.Character.findByIdAndDelete(characterId);
                return characterId;
            }
            catch (error) {
                return error;
            }
        },
        createMonster: async (parent, { monster }) => {
            try {
                return await models_1.Monster.create(monster);
            }
            catch (error) {
                return error;
            }
        },
        updateMonster: async (parent, { monster, worldId, regionId }) => {
            try {
                return await models_1.Monster.findById(monster._id, { $set: { ...monster } }, { new: true });
            }
            catch (error) {
                return error;
            }
        },
        deleteMonster: async (parent, { monsterId, worldId, regionId }) => {
            try {
                return await models_1.Monster.findByIdAndDelete(monsterId);
            }
            catch (error) {
                return error;
            }
        },
        createRegion: async (parent, { region, worldId }) => {
            try {
                const newRegion = await models_1.Region.create(region);
                const updatedWorld = await models_1.World.findOneAndUpdate({ _id: worldId }, {
                    $push: { regions: newRegion },
                }, {
                    new: true,
                });
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
                        path: "regions",
                        model: "Region",
                        populate: {
                            path: "countries",
                            model: "Country",
                            populate: [
                                {
                                    path: "cities",
                                    model: "City",
                                },
                                {
                                    path: "religions",
                                    model: "Religion",
                                    populate: {
                                        path: "gods",
                                        model: "God",
                                    },
                                },
                            ],
                        },
                    },
                    {
                        path: "religions",
                        model: "Religion",
                        populate: {
                            path: "gods",
                            model: "God",
                        },
                    },
                    {
                        path: "characters",
                        model: "Character",
                        populate: {
                            path: "race",
                            model: "Race",
                        },
                    },
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
                        path: "regions",
                        model: "Region",
                        populate: {
                            path: "countries",
                            model: "Country",
                            populate: [
                                {
                                    path: "cities",
                                    model: "City",
                                },
                                {
                                    path: "religions",
                                    model: "Religion",
                                    populate: {
                                        path: "gods",
                                        model: "God",
                                    },
                                },
                            ],
                        },
                    },
                    {
                        path: "religions",
                        model: "Religion",
                        populate: {
                            path: "gods",
                            model: "God",
                        },
                    },
                    {
                        path: "characters",
                        model: "Character",
                        populate: {
                            path: "race",
                            model: "Race",
                        },
                    },
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
                    $push: { religions: newReligion },
                }, {
                    new: true,
                }).populate([
                    {
                        path: "regions",
                        model: "Region",
                        populate: {
                            path: "countries",
                            model: "Country",
                            populate: [
                                {
                                    path: "cities",
                                    model: "City",
                                },
                                {
                                    path: "religions",
                                    model: "Religion",
                                    populate: {
                                        path: "gods",
                                        model: "God",
                                    },
                                },
                            ],
                        },
                    },
                    {
                        path: "religions",
                        model: "Religion",
                        populate: {
                            path: "gods",
                            model: "God",
                        },
                    },
                    {
                        path: "characters",
                        model: "Character",
                        populate: {
                            path: "race",
                            model: "Race",
                        },
                    },
                ]);
                return updatedWorld;
            }
            catch (error) {
                console.log(error);
            }
        },
        updateReligion: async (parent, { religion, worldId }) => {
            try {
                const updatedReligion = await models_1.Religion.findByIdAndUpdate(religion._id, {
                    $set: { ...religion },
                });
                const world = await models_1.World.findOneAndUpdate(worldId).populate([
                    {
                        path: "regions",
                        model: "Region",
                        populate: {
                            path: "countries",
                            model: "Country",
                            populate: [
                                {
                                    path: "cities",
                                    model: "City",
                                },
                                {
                                    path: "religions",
                                    model: "Religion",
                                    populate: {
                                        path: "gods",
                                        model: "God",
                                    },
                                },
                            ],
                        },
                    },
                    {
                        path: "religions",
                        model: "Religion",
                        populate: {
                            path: "gods",
                            model: "God",
                        },
                    },
                    {
                        path: "characters",
                        model: "Character",
                        populate: {
                            path: "race",
                            model: "Race",
                        },
                    },
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
                        path: "regions",
                        model: "Region",
                        populate: {
                            path: "countries",
                            model: "Country",
                            populate: [
                                {
                                    path: "cities",
                                    model: "City",
                                },
                                {
                                    path: "religions",
                                    model: "Religion",
                                    populate: {
                                        path: "gods",
                                        model: "God",
                                    },
                                },
                            ],
                        },
                    },
                    {
                        path: "religions",
                        model: "Religion",
                        populate: {
                            path: "gods",
                            model: "God",
                        },
                    },
                    {
                        path: "characters",
                        model: "Character",
                        populate: {
                            path: "race",
                            model: "Race",
                        },
                    },
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
                    $push: { gods: newGod },
                }, {
                    new: true,
                });
                const world = await models_1.World.findById(worldId).populate([
                    {
                        path: "regions",
                        model: "Region",
                        populate: {
                            path: "countries",
                            model: "Country",
                            populate: [
                                {
                                    path: "cities",
                                    model: "City",
                                },
                                {
                                    path: "religions",
                                    model: "Religion",
                                    populate: {
                                        path: "gods",
                                        model: "God",
                                    },
                                },
                            ],
                        },
                    },
                    {
                        path: "religions",
                        model: "Religion",
                        populate: {
                            path: "gods",
                            model: "God",
                        },
                    },
                    {
                        path: "characters",
                        model: "Character",
                        populate: {
                            path: "race",
                            model: "Race",
                        },
                    },
                ]);
                return world;
            }
            catch (error) {
                console.log(error);
            }
        },
        updateGod: async (parent, { god, worldId }) => {
            try {
                const updatedGod = await god.findByIdAndUpdate(god._id, {
                    $set: { ...god },
                });
                const world = await models_1.World.findOneAndUpdate(worldId).populate([
                    {
                        path: "regions",
                        model: "Region",
                        populate: {
                            path: "countries",
                            model: "Country",
                            populate: [
                                {
                                    path: "cities",
                                    model: "City",
                                },
                                {
                                    path: "religions",
                                    model: "Religion",
                                    populate: {
                                        path: "gods",
                                        model: "God",
                                    },
                                },
                            ],
                        },
                    },
                    {
                        path: "religions",
                        model: "Religion",
                        populate: {
                            path: "gods",
                            model: "God",
                        },
                    },
                    {
                        path: "characters",
                        model: "Character",
                        populate: {
                            path: "race",
                            model: "Race",
                        },
                    },
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
                        path: "regions",
                        model: "Region",
                        populate: {
                            path: "countries",
                            model: "Country",
                            populate: [
                                {
                                    path: "cities",
                                    model: "City",
                                },
                                {
                                    path: "religions",
                                    model: "Religion",
                                    populate: {
                                        path: "gods",
                                        model: "God",
                                    },
                                },
                            ],
                        },
                    },
                    {
                        path: "religions",
                        model: "Religion",
                        populate: {
                            path: "gods",
                            model: "God",
                        },
                    },
                    {
                        path: "characters",
                        model: "Character",
                        populate: {
                            path: "race",
                            model: "Race",
                        },
                    },
                ]);
                return world;
            }
            catch (error) {
                console.log(error);
            }
        },
    },
};
exports.default = resolvers;
