import express from 'express'
import cors from 'cors'
import apiRouter from './routes/api-routes'

const app = express()

app.use(cors())
app.use('/api/v1/', apiRouter)

const PORT = process.env.PORT || 9000
const server = app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})

export default server

