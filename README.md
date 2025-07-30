A modern responsive resum website built using React Types Scripte, service by a Node.js API

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

### Running Tests

```bash
# Run all tests
npm test

# Run specific package tests
npm test --workspace=packages/resume-client
npm test --workspace=packages/resume-api
```

<code>
1) npm install <br>
2) npm run build <br>
</code>
 
# To Build and Run Containters
docker compose up --build