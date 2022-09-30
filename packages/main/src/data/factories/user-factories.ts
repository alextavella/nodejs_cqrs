import { makeMessaging } from '@atav/shared'
import { UserCommander } from '../repositories/user-commander'
import { UserRepository } from '../repositories/user-repository'
import { makeDatabase } from './infra-factories'

export const makeUserCommander = () => new UserCommander(makeMessaging())

export const makeUserRepository = () =>
  new UserRepository(makeDatabase(), makeUserCommander())
