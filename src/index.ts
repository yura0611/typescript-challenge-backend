import { EXPRESS_PORT } from 'config'
import { app } from 'src/app'

const SERVICE_NAME = '<put a cool name here>'

console.log(`Starting ${SERVICE_NAME}`)

app.listen(EXPRESS_PORT, () => {
  console.log(`${SERVICE_NAME} listening on port ${EXPRESS_PORT}`)
})
