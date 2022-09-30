import { Commands, makeMessaging, User } from '@atav/shared'
import { makeUserRepository } from '../data/factories/user-factories'

const repo = makeUserRepository()
const messaging = makeMessaging()

messaging
  .subscribe(Commands.CREATE_USER)
  .subscribe<User, any>(async ({ data, ack, nack }) => {
    try {
      await repo.create(data)
      ack()
    } catch {
      nack()
    }
  })

messaging
  .subscribe(Commands.UPDATE_USER)
  .subscribe<User, any>(async ({ data, ack, nack }) => {
    try {
      await repo.update(data)
      ack()
    } catch {
      nack()
    }
  })

const subscriber = {
  dispose: () => {
    messaging.dispose()
  },
}

export default subscriber
