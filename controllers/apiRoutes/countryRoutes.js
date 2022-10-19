const router = require('express').Router()

// matches /api/country
router.get('/', async (req, res) => {
    res.json({ message: 'all countrys route hit!'})
})
router.get('/:_id', async (req, res) => {
    res.json({ message: 'one country route hit!'})
})
router.post('/', async (req, res) => {
    res.json({ message: 'countrys route hit!'})
})
router.put('/:_id', async (req, res) => {
    res.json({ message: 'countrys route hit!'})
})
router.delete('/:_id', async (req, res) => {
    res.json({ message: 'countrys route hit!'})
})

module.exports = router