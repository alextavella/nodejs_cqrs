import express from 'express'

import userRoutes from '../data/controllers/user-controller'

const router = express.Router()

router.use('/users', userRoutes)

export default router
