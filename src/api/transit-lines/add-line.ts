import { Request, Response } from 'express'
import { lineService } from 'src/services/lineService'
import { TransitLine, TransitStop } from 'src/types/line'

export async function addLine(req: Request<{}, {}, TransitLine>, res: Response) {
  const hasLine = await lineService.hasLine(req.body.id)

  if (hasLine) {
    res.status(400).send({ message: 'Line with such id already exists' })
    return
  }

  try {
    const newLine = await lineService.addLine(req.body.id, req.body.stops)

    res.status(200).send(newLine)
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).send({ message: error.message })
    } else {
      res.status(500).send({ message: 'An unexpected error occurred' })
    }
  }
}
