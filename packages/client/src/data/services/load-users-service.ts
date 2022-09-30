import { IService } from '@atav/shared'
import { ListUsersUseCase } from '../../domain/usecases/users/list-users-usecase'

type Params = ListUsersUseCase.Params
type Response = ListUsersUseCase.Response

export class LoadUsersService implements IService<Params, Response> {
  constructor(private readonly provider: ListUsersUseCase) {}

  async execute(): Promise<Response> {
    return await this.provider.list()
  }
}
