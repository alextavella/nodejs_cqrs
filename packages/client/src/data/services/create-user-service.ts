import { IService } from '@atav/shared'
import { CreateUserUseCase } from '../../domain/usecases/users/create-user-usecase'
import { IUserCommander } from '../repositories/user-commander'

type Params = CreateUserUseCase.Params
type Response = CreateUserUseCase.Response

export class CreateUserService implements IService<Params, Response> {
  constructor(
    private readonly userRepository: CreateUserUseCase,
    private readonly commander: IUserCommander,
  ) {}

  async execute(params: Params): Promise<Response> {
    const user = await this.userRepository.create(params)

    this.commander.create(user)

    return user
  }
}
