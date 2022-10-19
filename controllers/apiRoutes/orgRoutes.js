const router = require('express').Router()

// matches /api/organization
router.get('/', async (req, res) => {
    res.json({ message: 'all organizations route hit!'})
})
router.get('/:_id', async (req, res) => {
    res.json({ message: 'one organization route hit!'})
})
router.post('/', async (req, res) => {
    res.json({ message: 'organizations route hit!'})
})
router.put('/:_id', async (req, res) => {
    res.json({ message: 'organizations route hit!'})
})
router.delete('/:_id', async (req, res) => {
    res.json({ message: 'organizations route hit!'})
})

module.exports = router