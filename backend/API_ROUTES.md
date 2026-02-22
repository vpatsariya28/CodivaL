# API Routes

Base URL: `/api`

## Auth
- `POST /auth/login` - Login and obtain JWT

## Services
- `GET /services`
- `GET /services/:slug`
- `POST /services` (ADMIN/EDITOR)
- `PUT /services/:id` (ADMIN/EDITOR)
- `DELETE /services/:id` (ADMIN)

## Projects
- `GET /projects?category=...`
- `GET /projects/:slug`
- `POST /projects` (ADMIN/EDITOR, multipart image)
- `PUT /projects/:id` (ADMIN/EDITOR, multipart image)
- `DELETE /projects/:id` (ADMIN)

## Blog Posts
- `GET /blogs?published=true`
- `GET /blogs/:slug`
- `POST /blogs` (ADMIN/EDITOR, multipart coverImage)
- `PUT /blogs/:id` (ADMIN/EDITOR)
- `DELETE /blogs/:id` (ADMIN)

## Jobs
- `GET /jobs?open=true`
- `POST /jobs` (ADMIN/EDITOR)
- `PUT /jobs/:id` (ADMIN/EDITOR)
- `DELETE /jobs/:id` (ADMIN)

## Contacts
- `POST /contacts`
- `GET /contacts` (ADMIN/EDITOR)

## Health
- `GET /health`
