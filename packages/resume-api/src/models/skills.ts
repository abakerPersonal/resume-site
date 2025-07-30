import { Skill } from "@abakernet/types";

const langaugeAndFramework: Skill = {
    title: 'Languages & Frameworks',
    skills: [
      "TypeScript",
      "Node.js",
      "JavaScript",
      "Java",
      "Spring",
      "Ruby on Rails",
      "SQL",
      "Python",
      "Django",
      "React",
      "HTML",
      "CSS"
    ]
}
const cloudAndInfrastructure: Skill = {
  title: 'Cloud & Infrastructure',
  skills: [
    "AWS (S3, EC2, CloudWatch, DynamoDB)",
    "Kubernetes",
    "Docker",
    "Terraform",
    "Ansible",
    "Apigee"
  ]
};

const architectureAndDevelopment: Skill = {
  title: 'Architecture & Development',
  skills: [
    "Microservices",
    "REST APIs",
    "Event-Driven Systems",
    "Secure API Design",
    "Cloud Computing"
  ]
};

const databases: Skill = {
  title: 'Databases',
  skills: [
    "MySQL",
    "MongoDB",
    "Redis",
    "PostgresSQL"
  ]
};

const monitoringAndReliability: Skill = {
  title: 'Monitoring & Reliability',
  skills: [
    "Datadog",
    "Grafana",
    "Root Cause Analysis",
    "Application Performance Monitoring (APM)"
  ]
};


export const skills: Skill[] = [
    langaugeAndFramework,
    cloudAndInfrastructure, 
    architectureAndDevelopment,
    databases,
    monitoringAndReliability
]