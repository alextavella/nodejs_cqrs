import { makeMessaging } from '@atav/shared'
import { UserCommander } from '../repositories/user-commander'
import { UserRepository } from '../repositories/user-repository'
import { CreateUserService } from '../services/create-user-service'
import { LoadUsersService } from '../services/load-users-service'
import { UpdateUserService } from '../services/update-user-service'
import { makeDatabase } from './infra-factories'

export const makeUserCommander = () => new UserCommander(makeMessaging())

export const makeUserRepository = () => new UserRepository(makeDatabase())

export const makeLoadUsersService = () =>
  new LoadUsersService(makeUserRepository())

export const makeCreateUserService = () =>
  new CreateUserService(makeUserRepository(), makeUserCommander())

export const makeUpdateUserService = () =>
  new UpdateUserService(makeUserRepository(), makeUserCommander())
