import { Experience } from "@abakernet/types";
const SonosExperience: Experience = {
  "company": "SONOS",
  "location": "Goleta, CA",
  "logo": "images/logos/sonos.png",
  "title": "Senior Software Engineer",
  "remote": true,
  "startDate": "04/2017",
  "endDate": "02/2025",
  "sections": [
    {
      "category": "Backend Development",
      "bullets": [
        "Developed and launched a high-availability cloud-based service in TypeScript (Node.js), standardizing music service content APIs into a single scalable RESTful API, handling millions of daily requests.",
        "Designed and implemented a universal ratings system, integrating it into templated API responses, ensuring consistency across music platforms.",
        "Maintained an OpenAPI specification for API governance, reducing bugs and improving cross-team velocity via auto-generated SDKs.",
        "Built and deployed containerized applications using Docker and Kubernetes, supporting scalability and efficient resource management.",
        "Collaborated with client and hardware teams, resolving bugs swiftly, implementing new features, and driving continuous performance and reliability improvements.",
        "Developed, maintained, and optimized Java Spring-based backend cloud services in AWS, supporting control of millions of connected devices.",
        "Contributed to the migration of the API Gateway from Layer7 to Apigee, transitioning API key generation to a new Apigee-backed API, enabling a seamless transition and improved functionality."
      ]
    },
    {
      "category": "Full Stack Development",
      "bullets": [
        "Developed and maintained a scalable Ruby on Rails-based developer portal, leveraging an internal CSS and JavaScript framework to enhance API integration management, resulting in hundreds of new integrations.",
        "Implemented authentication and authorization protocols, integrating OAuth 2.0, Single Sign-On (SSO), and API access controls to enhance security, streamline user access, and improve the overall developer experience.",
        "Promoted to Tech Lead, overseeing a contractor and collaborating with Product and Engineering teams to design, develop, and expand portal features."
      ]
    },
    {
      "category": "Engineering Growth & Service Reliability",
      "bullets": [
        "Promoted from IC3 to IC4 in October 2023, recognized for technical leadership and professional growth.",
        "Conducted technical interviews and mentored junior developers, fostering skill development and team growth.",
        "Participated in on-call rotations, ensuring high availability and reliability of backend services running in AWS and Kubernetes, rapidly resolving incidents, and minimizing downtime.",
        "Maintained and optimized CI/CD pipelines using Jenkins and GitHub Actions, automating builds, tests, and deployments, improving development efficiency and release consistency.",
        "Implemented and enhanced monitoring and observability using Datadog and CloudWatch, enabling real-time performance tracking, root cause analysis, and proactive issue resolution, resulting in 99% uptime."
      ]
    }
  ]
}

export const allExperience = [SonosExperience]