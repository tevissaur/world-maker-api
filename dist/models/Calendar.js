"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const CalendarSchema = new mongoose_1.Schema({
    months: [{
            name: String,
            numDays: Number
        }],
    week: {
        numDaysPerWeek: Number,
        days: [{
                name: String,
            }]
    },
    numDaysPerYear: {
        type: Number
    }
});
const Calendar = (0, mongoose_1.model)('Calendar', CalendarSchema);
exports.default = Calendar;
//# sourceMappingURL=Calendar.js.map