import { RabbitMessaging } from '../../infra/messaging'

const rabbit = new RabbitMessaging(
  process.env.RABBITMQ_URI || 'amqp://localhost',
)

export const makeMessaging = () => rabbit
