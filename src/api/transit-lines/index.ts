import { Router } from 'express'
import { getLine } from './get-line'

export const transitLinesRouter = Router()

transitLinesRouter.get('/:lineId', getLine)

// TODO add CRUD methods
