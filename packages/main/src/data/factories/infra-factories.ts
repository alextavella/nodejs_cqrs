import { DBEvents } from '../../infra/db'

const db = new DBEvents()

export const makeDatabase = () => db
