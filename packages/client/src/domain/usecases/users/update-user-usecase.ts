import { User } from '@atav/shared'

export interface UpdateUserUseCase {
  update(params: UpdateUserUseCase.Params): Promise<UpdateUserUseCase.Response>
}
export interface UpdateUserCommand {
  update(params: UpdateUserUseCase.Response): void
}

export namespace UpdateUserUseCase {
  export type Params = User
  export type Response = User
}
