import { DataTypes, Model, Sequelize } from 'sequelize'
import { TransitLineEntity } from './transit-line.model'
import { sequelize } from 'src/config/database'
import { TransitStop } from 'src/types/line'

export class TransitStopEntity extends Model<TransitStop> implements TransitStop {
  public id!: string
  public lineId: string
  public name!: string
  public lat!: number
  public lng!: number
  public prevId!: string
  public nextId!: string
  public peopleOn!: number
  public peopleOff!: number
  public reachablePopulationWalk!: number
  public reachablePopulationBike!: number
}

TransitStopEntity.init(
  {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    lineId: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: TransitLineEntity,
        key: 'id',
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lat: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    lng: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    prevId: {
      type: DataTypes.STRING,
    },
    nextId: {
      type: DataTypes.STRING,
    },
    peopleOn: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    peopleOff: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    reachablePopulationWalk: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    reachablePopulationBike: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'TransitStop',
  }
)
