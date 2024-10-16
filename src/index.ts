import { app } from './app'
import { EXPRESS_PORT } from './config'
import { sequelize } from './config/database'

const SERVICE_NAME = 'awesome-transit-lines-service'

async function main() {
  try {
    await sequelize.sync({ force: true })

    console.log('Database synced!')

    console.log(`Starting ${SERVICE_NAME}`)

    app.listen(EXPRESS_PORT, () => {
      console.log(`${SERVICE_NAME} listening on port ${EXPRESS_PORT}`)
    })
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

main()
