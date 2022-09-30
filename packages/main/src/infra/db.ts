import { Event, EventScope, EventType, IDatabaseEvents } from '@atav/shared'
import { v4 as uuid } from 'uuid'

export class DBEvents implements IDatabaseEvents {
  private eventsDB: Event[] = []

  async create(scope: EventScope, type: EventType, data: any): Promise<Event> {
    const event: Event = Object.assign(data, {
      eventId: uuid(),
      eventScope: scope,
      eventType: type,
    })

    this.eventsDB = [...this.eventsDB, event]

    console.group()
    console.table(this.eventsDB)
    console.groupEnd()

    return event
  }
}
