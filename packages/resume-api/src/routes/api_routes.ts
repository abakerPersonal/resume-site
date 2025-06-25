import express from 'express'
import { SUMMARY } from '../strings'
import { Resume } from '@abakernet/types'


const apiRouter = express.Router()

apiRouter.get('/resume', (req, res) => {
    const resume: Resume = {
        header: {
            name: '',
            title: '',
            email: '',
            linkedInUrl: '',
            location: ''
        },
        summary: SUMMARY,
        skills: [],
        experience: [],
        education: []
    }

    res.send(resume)
})

export default apiRouter