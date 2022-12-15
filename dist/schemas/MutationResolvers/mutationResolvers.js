"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../../models");
const auth_1 = require("../../utils/auth");
const Mutation = {
    createUser: (parent, args) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const user = yield models_1.User.create(args);
            const token = (0, auth_1.signToken)(user);
            return { user, token };
        }
        catch (err) {
            return (err);
            return err;
        }
    }),
    login: (parent, { email, password }) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const user = yield models_1.User.findOne({ email });
            if (!user) {
                throw new Error("No Profile with that email");
            }
            const correctPw = yield user.schema.methods.isCorrectPassword(password);
            if (!correctPw) {
                throw new Error("Incorrect password!");
            }
            const token = (0, auth_1.signToken)(user);
            return { token, user };
        }
        catch (err) {
            return (err);
        }
    }),
    createWorld: (parent, { world }) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            return yield models_1.World.create(world);
        }
        catch (err) {
            return err;
        }
    }),
    // TODO: Optimize this shit
    updateWorld: (parent, { world }) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            return yield models_1.World.findByIdAndUpdate(world._id, { $set: Object.assign({}, world) }, { new: true });
        }
        catch (err) {
            return err;
        }
    }),
    deleteWorld: (parent, { worldId }) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield models_1.World.findByIdAndDelete(worldId);
            return worldId;
        }
        catch (err) {
            return err;
        }
    }),
    createCharacter: (parent, { character }) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            return yield models_1.Character.create(character);
        }
        catch (error) {
            return (error);
        }
    }),
    updateCharacter: (parent, { character, worldId }) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            return yield models_1.Character.findByIdAndUpdate(character._id, { $set: Object.assign({}, character) }, { new: true });
        }
        catch (error) {
            return error;
        }
    }),
    deleteCharacter: (parent, { characterId, worldId }) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield models_1.Character.findByIdAndDelete(characterId);
            return characterId;
        }
        catch (error) {
            return error;
        }
    }),
    createMonster: (parent, { monster }) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            return yield models_1.Monster.create(monster);
        }
        catch (error) {
            return error;
        }
    }),
    updateMonster: (parent, { monster, worldId, regionId }) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            return yield models_1.Monster.findById(monster._id, { $set: Object.assign({}, monster) }, { new: true });
        }
        catch (error) {
            return error;
        }
    }),
    deleteMonster: (parent, { monsterId, worldId }) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            return yield models_1.Monster.findByIdAndDelete(monsterId);
        }
        catch (error) {
            return error;
        }
    }),
    createRegion: (parent, { region, worldId }) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const newRegion = yield models_1.Region.create(region);
            const updatedWorld = yield models_1.World.findOneAndUpdate({ _id: worldId }, {
                $push: { regions: newRegion },
            }, {
                new: true,
            });
            return newRegion;
        }
        catch (error) {
            return error;
        }
    }),
    updateRegion: (parent, { region, worldId }) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const updatedRegion = yield models_1.Region.findByIdAndUpdate(region._id, { $set: Object.assign({}, region) }, { new: true });
            const world = yield models_1.World.findById(worldId).populate([
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
            return updatedRegion;
        }
        catch (error) {
            return error;
        }
    }),
    deleteRegion: (parent, { regionId, worldId }) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const deleted = yield models_1.Region.findByIdAndDelete(regionId);
            const world = yield models_1.World.findById(worldId).populate([
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
            return error;
        }
    }),
    createReligion: (parent, { religion, worldId }) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const newReligion = yield models_1.Religion.create(religion);
            const updatedWorld = yield models_1.World.findOneAndUpdate({ _id: worldId }, {
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
            return newReligion;
        }
        catch (error) {
            return error;
        }
    }),
    updateReligion: (parent, { religion, worldId }) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            return yield models_1.Religion.findByIdAndUpdate(religion._id, {
                $set: Object.assign({}, religion),
            });
        }
        catch (error) {
            return (error);
        }
    }),
    deleteReligion: (parent, { religionId, worldId }) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const deleted = yield models_1.Religion.findByIdAndDelete(religionId);
            const world = yield models_1.World.findById(worldId).populate([
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
            return (error);
        }
    }),
    createGod: (parent, { god, worldId, religionId }) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const newGod = yield models_1.God.create(god);
            const updatedReligion = yield models_1.Religion.findByIdAndUpdate(religionId, {
                $push: { gods: newGod },
            }, {
                new: true,
            });
            const world = yield models_1.World.findById(worldId).populate([
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
            return (error);
        }
    }),
    updateGod: (parent, { god, worldId }) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            return yield models_1.God.findByIdAndUpdate(god._id, {
                $set: Object.assign({}, god),
            });
        }
        catch (error) {
            return (error);
        }
    }),
    deleteGod: (parent, { godId, worldId }) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            return yield models_1.God.findByIdAndDelete(godId);
        }
        catch (error) {
            return (error);
        }
    }),
};
exports.default = Mutation;
//# sourceMappingURL=mutationResolvers.js.map