const router = require('express').Router()

// matches /api/region
router.get('/', async (req, res) => {
    res.json({ message: 'all religions route hit!'})
})
router.get('/:_id', async (req, res) => {
    res.json({ message: 'one religion route hit!'})
})
router.post('/', async (req, res) => {
    res.json({ message: 'religions route hit!'})
})
router.put('/:_id', async (req, res) => {
    res.json({ message: 'religions route hit!'})
})
router.delete('/:_id', async (req, res) => {
    res.json({ message: 'religions route hit!'})
})

module.exports = router