"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const GameSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true
    },
    players: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'User'
        }],
    gameMaster: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User'
    },
    setting: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'World'
    }
});
const Game = (0, mongoose_1.model)('Game', GameSchema);
exports.default = Game;
