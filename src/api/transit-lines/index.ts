import { Router } from 'express'
import { getLine } from './get-line'
import { addLine } from './add-line'
import { getLines } from './get-lines'
import { removeLine } from './remove-line'

export const transitLinesRouter = Router()

transitLinesRouter.get('/', getLines).delete('/:lineId', removeLine)

transitLinesRouter.get('/:lineId', getLine)

transitLinesRouter.post('/', addLine)

transitLinesRouter.delete('/:lineId', removeLine)
