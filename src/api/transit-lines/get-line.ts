import { NextFunction, Request, Response } from 'express'
import { lineService } from 'src/services/lineService'

/**
 * Get a line from the store
 */
export async function getLine(req: Request & { lineId: string }, res: Response, next: NextFunction) {
  const theLine = lineService.getLine(req.lineId)
  res.status(200).send(theLine)
}
