import { IDatabase } from '@atav/shared'
import { CreateUserUseCase } from '../../domain/usecases/users/create-user-usecase'
import { GetUserUseCase } from '../../domain/usecases/users/get-user-usecase'
import { ListUsersUseCase } from '../../domain/usecases/users/list-users-usecase'
import { UpdateUserUseCase } from '../../domain/usecases/users/update-user-usecase'

export type IUserRepository = CreateUserUseCase &
  UpdateUserUseCase &
  GetUserUseCase &
  ListUsersUseCase

export class UserRepository implements IUserRepository {
  constructor(private readonly db: IDatabase) {}

  async list(): Promise<ListUsersUseCase.Response> {
    return await this.db.list()
  }

  async get(email: string): Promise<GetUserUseCase.Response> {
    return await this.db.find(email)
  }

  async create(
    params: CreateUserUseCase.Params,
  ): Promise<CreateUserUseCase.Response> {
    return await this.db.createOrUpdate(params)
  }

  async update(
    params: UpdateUserUseCase.Params,
  ): Promise<UpdateUserUseCase.Response> {
    return await this.db.createOrUpdate(params)
  }
}
