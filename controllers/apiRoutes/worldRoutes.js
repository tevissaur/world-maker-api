const router = require('express').Router()


// matches /api/world
router.get('/', async (req, res) => {
    res.json({ message: 'all worlds route hit!'})
})
router.get('/::name', async (req, res) => {
    res.json({ message: 'one world route hit!'})
})
router.post('/', async (req, res) => {
    res.json({ message: 'worlds route hit!'})
})
router.put('/:_id', async (req, res) => {
    res.json({ message: 'worlds route hit!'})
})
router.delete('/:_id', async (req, res) => {
    res.json({ message: 'worlds route hit!'})
})

module.exports = router