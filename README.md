# CodivaLab Full-Stack Website

Production-ready full-stack company website for **CodivaLab** with modern UI, dynamic CMS-like admin management, JWT authentication, PostgreSQL, and Dockerized deployment.

## Architecture

- **Frontend:** React + Vite + Tailwind CSS + Framer Motion
- **Backend:** Node.js + Express + Prisma ORM (layered structure)
- **Database:** PostgreSQL
- **Auth:** JWT with role-based route protection (ADMIN, EDITOR)
- **Infra:** Docker + docker-compose

## Project Structure

```
/backend
  /prisma
  /src
    /config /controllers /middleware /routes /validators /utils
/frontend
  /src
    /api /components /context /layouts /pages
```

## Database Entities

- Users (admin roles)
- Services
- Projects
- BlogPosts
- JobOpenings
- ContactMessages

Schema and relationships are defined in `backend/prisma/schema.prisma`.

## Local Setup

### 1) Prerequisites
- Node.js 20+
- PostgreSQL
- npm

### 2) Backend
```bash
cd backend
cp .env.example .env
npm install
npx prisma migrate dev --name init
npm run prisma:seed
npm run dev
```

### 3) Frontend
```bash
cd frontend
cp .env.example .env
npm install
npm run dev
```

Frontend runs on `http://localhost:5173`, backend on `http://localhost:5000`.

## Docker Setup

```bash
docker compose up --build
```

## Admin Credentials (seed)
- Email: `admin@codivalab.com`
- Password: `Admin@123`

## API Documentation

Detailed API endpoints are listed in `backend/API_ROUTES.md`.

## Features Included

- Required pages: Home, About, Services, Portfolio, Blog, Careers, Contact, Admin
- Dynamic DB-driven sections (services/projects/blog/jobs/messages)
- Admin dashboard CRUD creation workflows
- JWT login + role-based authorization
- Request validation and secure middleware
- Image upload support via Multer
- Loading-ready scalable folder structure
- SEO-ready metadata and semantic sections
- Responsive premium UI with gradient cards and clean typography
