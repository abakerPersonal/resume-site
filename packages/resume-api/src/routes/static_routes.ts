import express from 'express'
import path from 'path'

const staticRouter = express.Router()

staticRouter.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

export default staticRouter