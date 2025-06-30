import { EducationItem } from "@abakernet/types"

const ucsb: EducationItem = {
    school: 'University of California, Santa Barbara',
    degree: [
        'Bachelor of Science in Computer Science (High Honors)'
    ]
}

const ahc: EducationItem = {
    school: 'Allan Hancock College',
    degree: [
        'Associate of Arts in Mathematics (Computer Science & Physics Emphasis)',
        'Liberal Arts'
    ]
}

export const education = [ucsb, ahc]