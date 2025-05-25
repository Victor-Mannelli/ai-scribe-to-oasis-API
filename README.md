name: AI Scribe – Backend (NestJS)
description: >
  This is the backend for the AI Scribe for Home Health OASIS Assessments project.
  It handles audio transcription, summarization, and OASIS field extraction via AI, and serves API endpoints for patients and oasis notes.

setup_instructions:
  - step: Install dependencies
    command: npm install

  - step: Set up environment variables - use .env.public for convenience
    file: .env
      DATABASE_URL: "postgresql://USER:PASSWORD@localhost:5432/YOUR_DB_NAME"


  - step: Generate Prisma client and run migrations
    commands:
      - npx prisma generate
      - npx prisma migrate dev --name init

  - step: Seed the database
    note: Runs automatically on server start if patient table is empty.
    optional_manual_command: npx prisma db seed

  - step: Start the development server
    command: npm run start:dev

  - step: Access API documentation
    url: http://localhost:5000/api

assumptions_or_shortcuts:
  - Transcription assumes English audio

api_documentation:
  swagger_ui: http://localhost:5000/api

tech_stack:
  - NestJS
  - Prisma
  - PostgreSQL
  - Swagger
  - Docker
  - Open.AI
  - Assembly.AI 
