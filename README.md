# CQRS + Node.js + Express

## RabbitMQ

```bash
docker run -d --hostname my-rabbit --name some-rabbit \
  -p 8080:15672 -p 5672:5672 -p 25676:25676 \
  rabbitmq:3-management
```

## Running APIs

```bash
yarn dev
```
