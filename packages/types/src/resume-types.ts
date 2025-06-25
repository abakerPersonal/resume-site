export type Header = {
    name: string,
    title: string,
    email: string,
    linkedInUrl: string,
    location: string 
}

export type Skill = {
    title: string,
    skills: string[]
}

export type Experience = {
    company: string, 
    title: string, 
    location: string,
    remote: boolean,
    logo: string,
    startDate: string,
    endDate?: string,
    sections: ExperienceSection[]
}

export type ExperienceSection = {
    category: string,
    bullets: string[] 
}

export type Education = {
    school: string, 
    degree: string[],
}

export type Resume = {
    header: Header,
    summary: string,
    skills: Skill[]
    experience: Experience[],
    education: Education[]
}