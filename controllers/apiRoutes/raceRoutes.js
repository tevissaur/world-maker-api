const router = require('express').Router()

// matches /api/race
router.get('/', async (req, res) => {
    res.json({ message: 'all races route hit!'})
})
router.get('/:_id', async (req, res) => {
    res.json({ message: 'one race route hit!'})
})
router.post('/', async (req, res) => {
    res.json({ message: 'races route hit!'})
})
router.put('/:_id', async (req, res) => {
    res.json({ message: 'races route hit!'})
})
router.delete('/:_id', async (req, res) => {
    res.json({ message: 'races route hit!'})
})


export default router