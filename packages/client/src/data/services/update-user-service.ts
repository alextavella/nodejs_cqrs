import { IService } from '@atav/shared'
import { GetUserUseCase } from '../../domain/usecases/users/get-user-usecase'
import { UpdateUserUseCase } from '../../domain/usecases/users/Update-user-usecase'
import { IUserCommander } from '../repositories/user-commander'

type Params = Omit<UpdateUserUseCase.Params, 'id'>
type Response = UpdateUserUseCase.Response

type IProvider = UpdateUserUseCase & GetUserUseCase

export class UpdateUserService implements IService<Params, Response> {
  constructor(
    private readonly provider: IProvider,
    private readonly commander: IUserCommander,
  ) {}

  async execute(params: Params): Promise<Response> {
    const user = await this.provider.get(params.email)

    if (!user) throw new Error('User not found')

    const updated = Object.assign(user, params)

    await this.provider.update(updated)

    this.commander.update(updated)

    return updated
  }
}
