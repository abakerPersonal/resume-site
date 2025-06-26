import express from 'express'
import { SUMMARY } from '../strings'
import { Resume } from '@abakernet/types'
import { skills } from '../models/skills'


const apiRouter = express.Router()

apiRouter.get('/resume', (req, res) => {
    const resume: Resume = {
        header: {
            name: 'Alan Baker',
            title: 'Senior Software Engineer',
            email: 'alan@abaker.net',
            linkedInUrl: 'linkedin.com/in/alanmbaker',
            location: 'USA'
        },
        summary: 'Senior Software Engineer with a proven track record of designing, building, and maintaining scalable, high-performance software systems. Experienced across the full software development lifecycle, with a focus on backend services, APIs, and cloud-based architectures. Skilled in modern languages including TypeScript, Java, and Ruby, and frameworks such as Node.js, Spring, and Ruby on Rails. Comfortable working full stack across both web and mobile platforms. Adaptable and solutions-oriented, passionate about clean code, performance optimization, and driving innovation in fast-paced, collaborative environments.',
        skills: skills,
        experience: [],
        education: []
    }

    res.send(resume)
})

export default apiRouter