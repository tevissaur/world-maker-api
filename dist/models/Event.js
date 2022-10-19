"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const EventSchema = new mongoose_1.Schema({
    name: String,
    date: {
        type: String,
        required: true
    }
});
const Event = (0, mongoose_1.model)('Event', EventSchema);
exports.default = Event;
