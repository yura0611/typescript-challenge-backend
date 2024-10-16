import { Request, Response } from 'express'
import { lineService } from 'src/services/lineService'

export async function getLines(req: Request<{}>, res: Response) {
  const lines = await lineService.getLines()

  res.status(200).send(lines)
}
