

import worldRoutes from './worldRoutes'
import characterRoutes from './characterRoutes'
import userRoutes from './userRoutes'
import religionRoutes from './religionRoutes'
import regionRoutes from './regionRoutes'
import quoteRoutes from './quoteRoutes'
import orgRoutes from './orgRoutes'
import countryRoutes from './countryRoutes'
import cityRoutes from './cityRoutes'
import historyRoutes from './historyRoutes'

const router = require('express').Router()


router.use('/world', worldRoutes)
router.use('/region', regionRoutes)
router.use('/character', characterRoutes)
router.use('/user', userRoutes)
router.use('/religion', religionRoutes)
router.use('/quote', quoteRoutes)
router.use('/organization', orgRoutes)
router.use('/country', countryRoutes)
router.use('/city', cityRoutes)
router.use('/history', historyRoutes)


module.exports = router