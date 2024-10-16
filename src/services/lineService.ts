import { TransitLineEntity } from 'src/models/transit-line.model'
import { TransitStopEntity } from 'src/models/transit-stop.model'
import { TransitStop } from 'src/types/line'

export class LineService {
  /**
   * Check wehter a line exists
   * @param lineId Id of the line to be checked
   */
  async hasLine(lineId: string): Promise<boolean> {
    const total = await TransitLineEntity.count({ where: { id: lineId } })
    return total > 0
  }

  /**
   *
   * @returns All lines
   */
  async getLines(): Promise<TransitLineEntity[]> {
    return TransitLineEntity.findAll({
      include: [{ model: TransitStopEntity, as: 'stops' }],
    })
  }

  /**
   * Get a line by it's id
   * @param lineId Id of the line
   */
  async getLine(lineId: string): Promise<TransitLineEntity | null> {
    return TransitLineEntity.findByPk(lineId)
  }

  /**
   * Add a new line
   * @param newLineId New id of the line. Cannot be an id that already exists
   * @param stops Array of stops for the new line. Note: A line needs a minimum of two stops.
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async addLine(newLineId: string, stops: TransitStop[]): Promise<TransitLineEntity> {
    const line = await TransitLineEntity.create(
      { id: newLineId, stops },
      {
        include: [{ model: TransitStopEntity, as: 'stops' }],
      }
    )

    return line
  }

  /**
   * Remove a line
   * @param lineId Id of the line to be removed
   */
  async removeLine(lineId: string): Promise<void> {
    await TransitLineEntity.destroy({ where: { id: lineId } })
  }

  /**
   * Add a stop to a line
   * @param lineId Id of the line
   * @param stop the stop you want to add
   * @param reference id of a reference stop
   * @param position defines if the new stop is added before or after the existing stop
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async addStop(lineId: string, stop: TransitStopEntity, reference: string, position: 'before' | 'after' = 'after'): Promise<void> {
    const line = await TransitLineEntity.findByPk(lineId, {
      include: [{ model: TransitStopEntity, as: 'stops' }],
    })

    if (!line) {
      throw new Error('Line not found')
    }

    const referenceIndex = line.stops.findIndex((s) => s.id === reference)

    if (referenceIndex === -1) {
      throw new Error('Reference stop not found')
    }

    if (position === 'before') {
      line.stops.splice(referenceIndex, 0, stop)
    }

    if (position === 'after') {
      line.stops.splice(referenceIndex + 1, 0, stop)
    }

    await line.save()
  }
}

export const lineService = new LineService()
