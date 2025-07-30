A modern responsive resume website built using React and TypesScript, service by a Node.js API

## Features
- Dark/Ligh mode toggle
- Responsive design
- Fast, static resuem hosting
- PDF/DOCX download options
- API-Driven content updates

## Tech Stack
- Frontend: React, TypScript
- Backend: Node.js, Express, TypeScript
- Containerization: Docker
- Testing: Jest, React Testing Library 

## Project Structure
```
resume-site/
├── packages/
│   ├── resume-client/    # React frontend
│   ├── resume-api/       # Express backend
│   └── types/           # Shared TypeScript types
└── docker-compose.yml
```

## Getting Started

### Local Development

1. Install dependencies:
```bash
npm install
```

2. Build:
```bash
npm run build
```

3. Start the development servers:
```bash
# Start Everything
npm run start 

#Run specific compnent
# Start API (port 9000)
npm run dev --workspace=packages/resume-api

# Start client (port 3000)
npm run dev --workspace=packages/resume-client
```

### Running Tests

```bash
# Run all tests
npm test

# Run specific package tests
npm test --workspace=packages/resume-client
npm test --workspace=packages/resume-api
```

### Docker Deployment

Build and run the containerized application:

```bash
docker compose up --build
```

The site will be available at:
- Frontend: http://localhost:3000
- API: http://localhost:9000

## API Endpoints

- `GET /api/v1/resume` - Get full resume data
- `GET /api/v1/resume/downloads` - Get download links for PDF/DOCX versions
