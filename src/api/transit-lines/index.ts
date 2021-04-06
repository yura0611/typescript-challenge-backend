import { Router } from 'express'
import { getLine } from './get-line'
import { validateLineId } from './validate-lineid'

export const transitLinesRouter = Router()

transitLinesRouter.get('/:lineId', validateLineId, getLine)

// TODO add CRUD methods
