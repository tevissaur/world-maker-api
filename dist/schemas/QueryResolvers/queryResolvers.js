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
const Query = {
    getSingleSubject: (parent, { _id, modelName }) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            switch (modelName) {
                case models_1.User.modelName:
                    return yield models_1.User.findById(_id);
                case models_1.Character.modelName:
                    return yield models_1.Character.findById(_id);
                case models_1.Religion.modelName:
                    return yield models_1.Religion.findById(_id);
                case models_1.Region.modelName:
                    return yield models_1.Region.findById(_id);
                case models_1.City.modelName:
                    return yield models_1.City.findById(_id);
                case models_1.Country.modelName:
                    return yield models_1.Country.findById(_id);
                case models_1.World.modelName:
                    return yield models_1.World.findById(_id);
                case models_1.Monster.modelName:
                    return yield models_1.Monster.findById(_id);
                case models_1.God.modelName:
                    return yield models_1.God.findById(_id);
                case models_1.Class.modelName:
                    return yield models_1.Class.findById(_id);
                case models_1.History.modelName:
                    return yield models_1.History.findById(_id);
                case models_1.Race.modelName:
                    return yield models_1.Race.findById(_id);
                case models_1.Organization.modelName:
                    return yield models_1.Organization.findById(_id);
                default:
                    break;
            }
        }
        catch (error) {
            return error;
        }
    }),
    getAllOfOneSubject: (parent, { modelName }) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            console.log(modelName);
            switch (modelName) {
                case "User":
                    return yield models_1.User.find();
                case "Character":
                    return yield models_1.Character.find();
                case "Religion":
                    return yield models_1.Religion.find();
                case "Region":
                    return yield models_1.Region.find();
                case "City":
                    return yield models_1.City.find();
                case "Country":
                    return yield models_1.Country.find();
                case "World":
                    return yield models_1.World.find();
                case "Monster":
                    return yield models_1.Monster.find();
                case "God":
                    return yield models_1.God.find();
                case "Class":
                    return yield models_1.Class.find();
                case "History":
                    return yield models_1.History.find();
                case "Race":
                    return yield models_1.Race.find();
                case "Organization":
                    return yield models_1.Organization.find();
                default:
                    break;
            }
        }
        catch (error) {
            return error;
        }
    }),
};
exports.default = Query;
//# sourceMappingURL=queryResolvers.js.map