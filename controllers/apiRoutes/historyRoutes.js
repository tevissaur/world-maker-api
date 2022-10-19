const router = require('express').Router()

// matches /api/history
router.get('/', async (req, res) => {
    res.json({ message: 'all historys route hit!'})
})
router.get('/:_id', async (req, res) => {
    res.json({ message: 'one history route hit!'})
})
router.post('/', async (req, res) => {
    res.json({ message: 'historys route hit!'})
})
router.put('/:_id', async (req, res) => {
    res.json({ message: 'historys route hit!'})
})
router.delete('/:_id', async (req, res) => {
    res.json({ message: 'historys route hit!'})
})

module.exports = router