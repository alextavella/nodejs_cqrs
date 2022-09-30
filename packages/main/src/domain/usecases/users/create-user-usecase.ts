import { User } from '@atav/shared'

export interface CreateUserUseCase {
  create(params: CreateUserUseCase.Params): Promise<CreateUserUseCase.Response>
}
export interface CreateUserCommand {
  create(params: CreateUserUseCase.Response): void
}

export namespace CreateUserUseCase {
  export type Params = {
    name: string
    email: string
  }
  export type Response = User
}
