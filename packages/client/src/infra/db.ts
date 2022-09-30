import { IDatabase, User } from '@atav/shared'
import { v4 as uuid } from 'uuid'

export class DBNormalized implements IDatabase<User> {
  private denormalizedDB: User[] = []

  async list(): Promise<User[]> {
    return this.denormalizedDB
  }

  async find(data: string): Promise<User | undefined> {
    return this.denormalizedDB.find(item => item.email === data)
  }

  async create(data: User): Promise<User> {
    const user = Object.assign({ id: uuid() }, data)

    this.denormalizedDB = [...this.denormalizedDB, user]

    return user
  }

  async createOrUpdate(data: User): Promise<User | undefined> {
    const findIndex = this.denormalizedDB.findIndex(item => item.id === data.id)

    return findIndex <= 0 ? this.create(data) : this.update(data)
  }

  async update(data: User): Promise<User | undefined> {
    const findIndex = this.denormalizedDB.findIndex(item => item.id === data.id)

    if (findIndex >= 0) {
      const user = Object.assign(this.denormalizedDB[findIndex], data)

      this.denormalizedDB[findIndex] = user

      return user
    }

    return undefined
  }
}
