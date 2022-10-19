const router = require('express').Router()

// matches /api/user
router.get('/user', async (req, res) => {
    res.json({ message: 'all users route hit!'})
})
router.get('/user/:_id', async (req, res) => {
    res.json({ message: 'one user route hit!'})
})
router.post('/user', async (req, res) => {
    res.json({ message: 'users route hit!'})
})
router.put('/user/:_id', async (req, res) => {
    res.json({ message: 'users route hit!'})
})
router.delete('/user/:_id', async (req, res) => {
    res.json({ message: 'users route hit!'})
})

module.exports = router