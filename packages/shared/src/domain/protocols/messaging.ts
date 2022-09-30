export interface IProducer<T = any> {
  publish(name: string, data: T): any
}

export interface IConsumer<T = any> {
  subscribe(name: string): T
}

export type IMessaging = IProducer &
  IConsumer & {
    dispose(): void
  }
