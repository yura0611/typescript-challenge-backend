import { json } from 'body-parser'
import * as express from 'express'
import * as morgan from 'morgan'
import { transitLinesRouter } from './api/transit-lines'

export const app = express()

app.use(morgan('dev'))

app.use(json())

app.use('/transit-lines', transitLinesRouter)
