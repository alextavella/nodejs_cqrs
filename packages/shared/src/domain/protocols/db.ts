import { Event, EventScope, EventType } from '../models'

export interface IDatabase<T = any, R = T> {
  list(): Promise<R[]>
  find(data?: any): Promise<R | undefined>
  create(data: Partial<T>): Promise<R>
  createOrUpdate(data: Partial<T>): Promise<R | undefined>
  update(data: Partial<T>): Promise<R | undefined>
}

export interface IDatabaseEvents<T = any, R = Event<T>> {
  create(scope: EventScope, type: EventType, data: T): Promise<R>
}
