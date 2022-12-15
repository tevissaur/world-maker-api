"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../../models");
const Query = {
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
            console.log(modelName);
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
    },
};
exports.default = Query;
