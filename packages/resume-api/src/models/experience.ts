import { ExperienceItem } from '@abakernet/types';

const SONOS: ExperienceItem = {
  company: 'SONOS',
  location: 'Goleta, CA',
  logo: 'images/logos/sonos.png',
  title: 'Senior Software Engineer',
  remote: true,
  startDate: '04/2017',
  endDate: '02/2025',
  sections: [
    {
      category: 'Backend Development',
      bullets: [
        'Developed and launched a high-availability cloud-based service in TypeScript (Node.js), standardizing music service content APIs into a single scalable RESTful API, handling millions of daily requests.',
        'Designed and implemented a universal ratings system, integrating it into templated API responses, ensuring consistency across music platforms.',
        'Maintained an OpenAPI specification for API governance, reducing bugs and improving cross-team velocity via auto-generated SDKs.',
        'Built and deployed containerized applications using Docker and Kubernetes, supporting scalability and efficient resource management.',
        'Collaborated with client and hardware teams, resolving bugs swiftly, implementing new features, and driving continuous performance and reliability improvements.',
        'Developed, maintained, and optimized Java Spring-based backend cloud services in AWS, supporting control of millions of connected devices.',
        'Contributed to the migration of the API Gateway from Layer7 to Apigee, transitioning API key generation to a new Apigee-backed API, enabling a seamless transition and improved functionality.'
      ]
    },
    {
      category: 'Full Stack Development',
      bullets: [
        'Developed and maintained a scalable Ruby on Rails-based developer portal, leveraging an internal CSS and JavaScript framework to enhance API integration management, resulting in hundreds of new integrations.',
        'Implemented authentication and authorization protocols, integrating OAuth 2.0, Single Sign-On (SSO), and API access controls to enhance security, streamline user access, and improve the overall developer experience.',
        'Promoted to Tech Lead, overseeing a contractor and collaborating with Product and Engineering teams to design, develop, and expand portal features.'
      ]
    },
    {
      category: 'Engineering Growth & Service Reliability',
      bullets: [
        'Promoted from IC3 to IC4 in October 2023, recognized for technical leadership and professional growth.',
        'Conducted technical interviews and mentored junior developers, fostering skill development and team growth.',
        'Participated in on-call rotations, ensuring high availability and reliability of backend services running in AWS and Kubernetes, rapidly resolving incidents, and minimizing downtime.',
        'Maintained and optimized CI/CD pipelines using Jenkins and GitHub Actions, automating builds, tests, and deployments, improving development efficiency and release consistency.',
        'Implemented and enhanced monitoring and observability using Datadog and CloudWatch, enabling real-time performance tracking, root cause analysis, and proactive issue resolution, resulting in 99% uptime.'
      ]
    }
  ]
}

const REV: ExperienceItem = {
    company: 'REV.COM',
    location: 'San Francisco, CA',
    logo: 'images/logos/revcom.png',
    title: 'Software Engineer',
    remote: true,
    startDate: '07/2015',
    endDate: '02/2017',
    sections: [
      {
        category: 'Full Stack Development',
        bullets: [
          'Enhanced MathElf, a Swift-based iOS tutoring app, by developing new features, improving performance, and transforming it from an iPad-only into a universal iOS app, increasing accessibility and usability.',
          'Developed a tutor earnings report page using React, providing real-time and historical earnings data for improved financial tracking.',
          'Extended and optimized backend APIs in C# (.Net), resolving issues, enhancing functionality, and improving overall performance.'
        ]
      }
    ]
  }
  
  const SAVINGS: ExperienceItem = {
    company: 'SAVINGS.COM',
    location: 'Santa Barbara, CA',
    logo: 'images/logos/savingscom.svg',
    title: 'Software Engineer',
    remote: false,
    startDate: '05/2010',
    endDate: '06/2015',
    sections: [
      {
        category: 'Backend Development',
        bullets: [
          'Developed and optimized backend services for a Java Spring-based couponing platform, implementing personalized user targeting logic by leveraging historical data and user behavior, improving recommendation accuracy.',
          'Built an internal administrative tool to streamline site management, reducing manual work and improving operational efficiency.'
        ]
      },
      {
        category: 'Mobile Development',
        bullets: [
          'Led mobile development for both Android and iOS on Favado, a grocery couponing app, designing and building a scalable, high-performance UI, integrating third-party APIs, and enhancing app functionality.',
          'Modernized Android and iOS by migrating iOS from Objective-C to Swift and transitioning Android builds to Gradle, enhancing scalability and maintainability.'
        ]
      }
    ]
  }

export const experience = [SONOS, REV, SAVINGS]