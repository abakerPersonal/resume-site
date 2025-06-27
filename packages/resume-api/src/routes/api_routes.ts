import express from 'express'
import { Resume } from '@abakernet/types'
import { abakerResume } from '../models/resume'


const apiRouter = express.Router()

apiRouter.get('/resume', (req, res) => {
    res.send(abakerResume)
})

export default apiRouter