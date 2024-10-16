import { Request, Response } from 'express'
import { lineService } from 'src/services/lineService'

export async function removeLine(req: Request<{ lineId: string }>, res: Response) {
  await lineService.removeLine(req.params.lineId)

  res.status(200).send({ message: 'Line removed' })
}
