const router = require('express').Router()

// matches /api/region
router.get('/', async (req, res) => {
    res.json({ message: 'all regions route hit!'})
})
router.get('/:_id', async (req, res) => {
    res.json({ message: 'one region route hit!'})
})
router.post('/', async (req, res) => {
    res.json({ message: 'regions route hit!'})
})
router.put('/:_id', async (req, res) => {
    res.json({ message: 'regions route hit!'})
})
router.delete('/:_id', async (req, res) => {
    res.json({ message: 'regions route hit!'})
})

module.exports = router