import { haredo } from 'haredo'
import { IMessaging } from '../domain/protocols/messaging'

export class RabbitMessaging implements IMessaging {
  private readonly rabbit

  constructor(readonly connectionUrl: string) {
    this.rabbit = haredo({
      connection: connectionUrl,
    })
    // this.rabbit.connect()
  }

  publish(name: string, data: any) {
    return this.rabbit.queue(name).publish(data)
  }

  subscribe(name: string) {
    return this.rabbit.queue(name).prefetch(1).json()
  }

  dispose(): void {
    this.rabbit?.close()
  }
}
