import server from './main/server'
import subscriber from './main/subscriber'

const port = process.env.PORT || 3333

server.listen(port, () => console.log(`Running on http://localhost:${port}`))

process.on('SIGTERM', () => {
  subscriber.dispose()
})
