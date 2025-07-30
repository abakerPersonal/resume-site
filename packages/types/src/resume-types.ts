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

export type ExperienceItem = {
    company: string, 
    title: string, 
    location: string,
    remote: boolean,
    logo: string,
    startDate: string,
    endDate?: string,
    sections: ExperienceItemBulletSection[]
}

export type ExperienceItemBulletSection = {
    category: string,
    bullets: string[] 
}

export type EducationItem = {
    school: string, 
    degree: string[],
}

export type Resume = {
    header: Header,
    summary: string,
    skills: Skill[]
    experience: ExperienceItem[],
    education: EducationItem[],
}

export type FileType = 'PDF' | 'DOCX'

export type DownloadLink = {
    type: FileType,
    url: string,
}