export enum EventScope {
  USER = 'USER',
}

export enum EventType {
  CREATED = 'CREATED',
  UPDATED = 'UPDATED',
}

export type Event<T = any> = T & {
  eventId: string
  eventScope: EventScope
  eventType: EventType
}
