import express from 'express'
import { abakerResume } from '../models/resume'
import { downloads } from '../models/downloads'


const apiRouter = express.Router()

apiRouter.get('/resume', (req, res) => {
    res.send(abakerResume)
})

apiRouter.get('/resume/downloads', (req, res) => {
    res.send(downloads)
})

apiRouter.get('/status', (req, res) => {
    res.sendStatus(200)
})

export default apiRouter