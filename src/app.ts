import { json } from 'body-parser'
import express from 'express'
import morgan from 'morgan'
import { transitLinesRouter } from './api/transit-lines'

export const app = express()

app.use(morgan('dev'))

app.use(json())

app.use('/transit-lines', transitLinesRouter)
