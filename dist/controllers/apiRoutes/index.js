"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const worldRoutes_1 = __importDefault(require("./worldRoutes"));
const characterRoutes_1 = __importDefault(require("./characterRoutes"));
const userRoutes_1 = __importDefault(require("./userRoutes"));
const religionRoutes_1 = __importDefault(require("./religionRoutes"));
const regionRoutes_1 = __importDefault(require("./regionRoutes"));
const quoteRoutes_1 = __importDefault(require("./quoteRoutes"));
const orgRoutes_1 = __importDefault(require("./orgRoutes"));
const countryRoutes_1 = __importDefault(require("./countryRoutes"));
const cityRoutes_1 = __importDefault(require("./cityRoutes"));
const historyRoutes_1 = __importDefault(require("./historyRoutes"));
const router = require('express').Router();
router.use('/world', worldRoutes_1.default);
router.use('/region', regionRoutes_1.default);
router.use('/character', characterRoutes_1.default);
router.use('/user', userRoutes_1.default);
router.use('/religion', religionRoutes_1.default);
router.use('/quote', quoteRoutes_1.default);
router.use('/organization', orgRoutes_1.default);
router.use('/country', countryRoutes_1.default);
router.use('/city', cityRoutes_1.default);
router.use('/history', historyRoutes_1.default);
module.exports = router;
