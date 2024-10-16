import { Association, DataTypes, Model } from 'sequelize'
import { TransitStopEntity } from './transit-stop.model'
import { sequelize } from 'src/config/database'
import { TransitLine, TransitStop } from 'src/types/line'

export class TransitLineEntity extends Model {
  public id!: string
  public stops!: TransitStop[]

  public static associations: {
    stops: Association<TransitLineEntity, TransitStopEntity>
  }

  public static async validateStops(stops: TransitStop[]): Promise<void> {
    if (stops.length < 2) {
      throw new Error('A TransitLine must have at least 2 TransitStops.')
    }
  }
}

TransitLineEntity.init(
  {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
  },
  {
    sequelize,
    modelName: 'transitLine',
    hooks: {
      beforeCreate: async (line: TransitLineEntity) => {
        await TransitLineEntity.validateStops(line.dataValues.stops)
      },
    },
  }
)

TransitLineEntity.hasMany(TransitStopEntity, { foreignKey: 'lineId', as: 'stops' })
TransitStopEntity.belongsTo(TransitLineEntity, { foreignKey: 'lineId', as: 'line' })
