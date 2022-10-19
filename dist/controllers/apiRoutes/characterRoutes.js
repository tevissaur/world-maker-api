"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Character, Country, Organization } = require('../../models');
const router = require('express').Router();
// matches /api/character
router.get('/', async (req, res) => {
    try {
        const allCharacters = await Character.find({});
        res.json(allCharacters);
    }
    catch (err) {
        res.json(err).status(err);
    }
});
router.get('/:name', async (req, res) => {
    try {
        const { name } = req.params;
        const character = await Character.findOne({ name }).populate('country');
        res.json(character);
    }
    catch (error) {
        res.json(error).status(500);
    }
});
router.post('/', async (req, res) => {
    const { body } = req;
    try {
        const newCharacter = await Character.create(body);
        res.json(newCharacter);
    }
    catch (err) {
        res.status(500).json(err);
    }
});
router.put('/:_id', async (req, res) => {
    try {
        const { _id } = req.params;
        const { countryId } = req.body;
        const country = await Country.findById(countryId);
        console.log(country);
        const updatedCharacter = await Character.updateOne({ _id }, { country }, { upsert: true });
        res.json(updatedCharacter);
    }
    catch (error) {
    }
});
router.get('/:_id', async (req, res) => {
    res.json({ message: 'characters route hit!' });
});
exports.default = router;
