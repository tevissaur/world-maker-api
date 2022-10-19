const router = require('express').Router()

// matches /api/city
router.get('/', async (req, res) => {
    res.json({ message: 'all citys route hit!'})
})
router.get('/:_id', async (req, res) => {
    res.json({ message: 'one city route hit!'})
})
router.post('/', async (req, res) => {
    res.json({ message: 'citys route hit!'})
})
router.put('/:_id', async (req, res) => {
    res.json({ message: 'citys route hit!'})
})
router.delete('/:_id', async (req, res) => {
    res.json({ message: 'citys route hit!'})
})


export default router