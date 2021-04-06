import { NextFunction, Request, Response } from 'express'
import { lineService } from 'src/services/lineService'

export async function validateLineId(req: Request & { lineId: string }, res: Response, next: NextFunction) {
  const { lineId } = req.params

  if (!lineId || !lineService.hasLine(lineId)) {
    res.status(400).send({ error: 'Invalid line id' })
  } else {
    req.lineId = lineId
    next()
  }
}
