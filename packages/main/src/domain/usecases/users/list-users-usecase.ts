import { User } from '@atav/shared'

export interface ListUsersUseCase {
  list(): Promise<ListUsersUseCase.Response>
}

export namespace ListUsersUseCase {
  export type Params = void
  export type Response = User[]
}
