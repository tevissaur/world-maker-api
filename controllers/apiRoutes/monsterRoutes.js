const router = require('express').Router()

// matches /api/monster
router.get('/', async (req, res) => {
    res.json({ message: 'all monsters route hit!'})
})
router.get('/:_id', async (req, res) => {
    res.json({ message: 'one monster route hit!'})
})
router.post('/', async (req, res) => {
    res.json({ message: 'monsters route hit!'})
})
router.put('/:_id', async (req, res) => {
    res.json({ message: 'monsters route hit!'})
})
router.delete('/:_id', async (req, res) => {
    res.json({ message: 'monsters route hit!'})
})

module.exports = router