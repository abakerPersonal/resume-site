import { Education } from "@abakernet/types"

const ucsb: Education = {
    school: 'University of California, Santa Barbara',
    degree: [
        'Bachelor of Science in Computer Science (High Honors)'
    ]
}

const ahc: Education = {
    school: 'Allan Hancock College',
    degree: [
        'Associate of Arts in Mathematics (Computer Science & Physics Emphasis)',
        'Liberal Arts'
    ]
}

export const allEducation = [ucsb, ahc]