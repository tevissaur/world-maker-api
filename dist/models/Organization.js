"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const orgSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    motives: {
        bonds: [
            {
                type: String
            }
        ],
        goals: [
            {
                type: String
            }
        ],
        fears: [
            {
                type: String
            }
        ]
    },
    relationships: {
        friends: [
            {
                type: String,
                ref: 'Organization'
            }
        ],
        enemies: [
            {
                type: String,
                ref: 'Organization'
            }
        ]
    },
    activeRegions: [
        {
            type: String,
            ref: 'Region'
        }
    ]
});
const Organization = (0, mongoose_1.model)('Organization', orgSchema);
exports.default = Organization;
//# sourceMappingURL=Organization.js.map