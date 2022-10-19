const router = require('express').Router()

// matches /api/quote
router.get('/', async (req, res) => {
    res.json({ message: 'all quotes route hit!'})
})
router.get('/:_id', async (req, res) => {
    res.json({ message: 'one quote route hit!'})
})
router.post('/', async (req, res) => {
    res.json({ message: 'quotes route hit!'})
})
router.put('/:_id', async (req, res) => {
    res.json({ message: 'quotes route hit!'})
})
router.delete('/:_id', async (req, res) => {
    res.json({ message: 'quotes route hit!'})
})

module.exports = router