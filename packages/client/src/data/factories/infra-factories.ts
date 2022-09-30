import { DBNormalized } from '../../infra/db'

const db = new DBNormalized()

export const makeDatabase = () => db
