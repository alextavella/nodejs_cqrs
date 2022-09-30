import { User } from '@atav/shared'

export interface GetUserUseCase {
  get(params: GetUserUseCase.Params): Promise<GetUserUseCase.Response>
}

export namespace GetUserUseCase {
  export type Params = string
  export type Response = User | undefined
}
