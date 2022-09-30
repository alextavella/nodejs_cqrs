import express from 'express'
import {
  makeCreateUserService,
  makeLoadUsersService,
  makeUpdateUserService,
} from '../factories/user-factories'

const router = express.Router()

router.get('/', async (_req, res) => {
  const service = makeLoadUsersService()
  const users = await service.execute()

  return res.status(200).json({ users })
})

router.post('/', async (req, res) => {
  const params = Object.assign({}, req.body)

  const service = makeCreateUserService()
  const user = await service.execute({
    name: params.name,
    email: params.email,
  })

  return res.status(201).json(user)
})

router.patch('/', async (req, res) => {
  const params = Object.assign({}, req.body)

  const service = makeUpdateUserService()
  const user = await service.execute({
    name: params.name,
    email: params.email,
  })

  return res.status(200).json(user)
})

export default router
