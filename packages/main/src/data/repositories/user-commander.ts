import { Events, IMessaging } from '@atav/shared'
import {
  CreateUserCommand,
  CreateUserUseCase,
} from '../../domain/usecases/users/create-user-usecase'
import {
  UpdateUserCommand,
  UpdateUserUseCase,
} from '../../domain/usecases/users/update-user-usecase'

export type IUserCommander = CreateUserCommand & UpdateUserCommand

export class UserCommander implements IUserCommander {
  constructor(private readonly messaging: IMessaging) {}

  async create(params: CreateUserUseCase.Response) {
    this.messaging.publish(Events.CREATED_USER, params)
  }

  update(params: UpdateUserUseCase.Response) {
    this.messaging.publish(Events.UPDATED_USER, params)
  }
}
