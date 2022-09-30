import { EventScope, EventType, IDatabaseEvents } from '@atav/shared'
import { CreateUserUseCase } from '../../domain/usecases/users/create-user-usecase'
import { UpdateUserUseCase } from '../../domain/usecases/users/update-user-usecase'
import { IUserCommander } from './user-commander'

export type IUserRepository = CreateUserUseCase & UpdateUserUseCase

export class UserRepository implements IUserRepository {
  constructor(
    private readonly db: IDatabaseEvents,
    private readonly commander: IUserCommander,
  ) {}

  async create(
    params: CreateUserUseCase.Params,
  ): Promise<CreateUserUseCase.Response> {
    const user = await this.db.create(
      EventScope.USER,
      EventType.CREATED,
      params,
    )

    this.commander.create(user)

    return user
  }

  async update(
    params: UpdateUserUseCase.Params,
  ): Promise<UpdateUserUseCase.Response> {
    const updated = await this.db.create(
      EventScope.USER,
      EventType.UPDATED,
      params,
    )

    this.commander.update(updated)

    return updated
  }
}
