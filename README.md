# AttendEase — Attendance Time Tracking System

## User Roles and Responsibilities

### 1. Admin
The Admin has full control over the AttendEase attendance management system.

- Manage employees, managers, and user accounts.
- Create, update, and deactivate employee accounts.
- assign the Manager
- Manage teams and employee assignments.
- Monitor attendance records across the organization.
- View and manage attendance reports.
- Export monthly attendance reports to CSV.
- Review and manage attendance correction requests.
- Monitor system activity logs.
- Manage shifts and shift assignments where supported.

### 2. Manager
The Manager oversees attendance and employee activities within their assigned team.

- View attendance records of assigned team members.
- Monitor employee clock-in and clock-out times.
- Review employee attendance history.
- Monitor working hours and break durations.
- Review and approve or reject attendance correction requests within their authorized scope.
- View and export team attendance reports.
- Monitor incomplete attendance sessions.
- Access only the employees and records permitted by their assigned team and permissions.

### 3. Employee
The Employee uses AttendEase to record and manage their own attendance.

- Sign in to their account.
- Clock in when starting work.
- Clock out when finishing work.
- Start and end breaks.
- View personal attendance history.
- View gross attendance duration, break duration, and net working time.
- Submit attendance correction requests.
- Track the status of correction requests.
- Update personal information where supported.

### Role-Based Access Control

The system must enforce permissions on the backend. Employees can access only their own attendance records, managers can access records within their assigned teams, and administrators can access organization-wide management features.

A full-stack web application for managing employee attendance, working hours, breaks, attendance correction requests, and attendance reports. AttendEase is designed to support administrators, managers, and employees with role-based access to attendance information and management features.

## Table of Contents

- [Overview](#overview)
- [Objectives](#objectives)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [System Architecture](#system-architecture)
- [User Roles and Permissions](#user-roles-and-permissions)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation and Setup](#installation-and-setup)
- [Environment Configuration](#environment-configuration)
- [Database Setup](#database-setup)
- [Running the Application](#running-the-application)
- [Attendance and Break Calculation](#attendance-and-break-calculation)
- [API Endpoints](#api-endpoints)
- [Security](#security)
- [Troubleshooting](#troubleshooting)
- [Testing](#testing)
- [Future Improvements](#future-improvements)
- [License](#license)

---

## Overview

AttendEase is a web-based attendance time-tracking system developed to simplify employee attendance management and improve the accuracy of working-time records.

The application uses a React frontend, a NestJS REST API, Prisma ORM, and a PostgreSQL database. Users can authenticate, record attendance, manage breaks, review attendance history, and access management or reporting features according to their roles.

The system follows a modular architecture so that authentication, attendance, employee management, corrections, and reporting can be developed and maintained independently.

## Objectives

The primary objectives of AttendEase are to:

- Digitize employee clock-in and clock-out operations.
- Record attendance sessions and break periods.
- Calculate gross attendance duration, break duration, and net working time.
- Support paid and unpaid break policies.
- Allow employees to submit attendance correction requests.
- Provide role-based attendance management for administrators and managers.
- Generate attendance reports and export report data to CSV.
- Maintain structured attendance records in a relational database.
- Improve data consistency, traceability, and access control.

## Features

### Authentication and User Management

- Email and password authentication.
- JWT-based authentication for protected API endpoints.
- Client-side login state management using an access token.
- Role-based access to application pages and operations.
- Registration interface, subject to the configured registration workflow.
- Password-reset workflow planned or implemented depending on the current backend configuration.

### Employee Attendance

- Clock in to begin an attendance session.
- Clock out to complete an attendance session.
- Prevent multiple simultaneous active attendance sessions.
- Record clock-in and clock-out timestamps.
- Calculate gross attendance duration and net working duration.
- Maintain attendance history.
- Track attendance session status, including in-progress, completed, and incomplete records where supported.

### Break Management

- Start and end break records.
- Support for paid and unpaid break types.
- Record break start and end timestamps.
- Calculate break durations.
- Exclude unpaid break duration from net working time.
- Support a fixed 45-minute paid break policy when enabled and configured.
- Automatically close expired paid breaks when the scheduled backend task is configured and running.

An unpaid break that remains open should prevent clock-out. An expired paid break may be closed automatically under the configured 45-minute policy.

### Attendance History

- View previous attendance sessions.
- Review clock-in and clock-out timestamps.
- Inspect recorded breaks and session durations.
- Display attendance information according to the authenticated user's permissions.

### Attendance Correction Requests

- Submit a correction request for an attendance record.
- Provide a reason for the requested correction.
- Track request status, such as pending, approved, or rejected, where the corresponding review workflow is enabled.
- Preserve the original attendance timestamps when corrections are requested.

### Employee and Team Management

The application data model supports employees, users, teams, shifts, and shift assignments.

Employee CRUD operations, team assignment, shift management, and employee activation or deactivation should be considered available only when the corresponding backend endpoints and frontend pages have been implemented.

### Reports and Export

- Generate monthly attendance reports.
- Filter reports by month and, where supported, team or employee.
- Export report data as CSV.
- Include attendance duration and correction status information where available.
- Restrict management reports to authorized roles.

### Activity Logging

The database model includes activity logs for traceability. Viewing and managing activity logs through a dedicated interface depends on the corresponding API and frontend implementation.

---

## Technology Stack

| Layer | Technology |
|---|---|
| Frontend | React |
| Programming language | TypeScript |
| Frontend build tool | Vite |
| Styling | CSS and Tailwind CSS where configured |
| HTTP client | Axios |
| Backend | NestJS |
| Backend language | TypeScript |
| ORM | Prisma |
| Database | PostgreSQL |
| Authentication | JSON Web Tokens (JWT) |
| Password hashing | bcrypt |
| API style | REST |
| Development tools | npm, Git |

Optional libraries, such as React Router, class-validator, Nodemailer, and `@nestjs/schedule`, are required only for the corresponding features and must be installed and configured in the relevant application.

## System Architecture

AttendEase follows a client-server architecture.

```text
+----------------------------------+
|         React Frontend           |
|                                  |
| Login / Registration             |
| Attendance Dashboard             |
| Break Management                 |
| Attendance History               |
| Correction Requests              |
| Reports and Export               |
+----------------+-----------------+
                 |
                 | HTTP / REST API
                 | JWT Authorization
                 v
+----------------------------------+
|          NestJS Backend          |
|                                  |
| Authentication Module            |
| Attendance Module                |
| Employee and Team Modules        |
| Correction Module                |
| Reports Module                   |
| Prisma Service                   |
+----------------+-----------------+
                 |
                 | Prisma ORM
                 v
+----------------------------------+
|          PostgreSQL              |
|                                  |
| Users / Employees / Teams        |
| Shifts / Assignments              |
| Attendance Sessions              |
| Break Records                    |
| Correction Requests              |
| Activity Logs                    |
+----------------------------------+
```

### Request Flow

1. The user interacts with the React frontend.
2. The frontend sends an HTTP request to the NestJS API.
3. Protected endpoints validate the user's authentication token.
4. Backend services apply business rules and access restrictions.
5. Prisma executes the required database operations.
6. The backend returns a response to the frontend.
7. The frontend updates the displayed information.

The backend is responsible for enforcing permissions and validating attendance operations. Hiding a frontend button alone is not sufficient to secure an endpoint.

---

## User Roles and Permissions

AttendEase defines three primary roles.

| Feature | Admin | Manager | Employee |
|---|---|---|---|
| Sign in | Yes | Yes | Yes |
| Manage personal attendance | Yes, subject to implementation | Yes, subject to implementation | Yes |
| View personal attendance history | Yes, subject to implementation | Yes, subject to implementation | Yes |
| Review employee attendance | Yes | Assigned employees only | No |
| Access management reports | Yes | According to permissions | No |
| Manage employees | Admin-only where implemented | No, unless explicitly authorized | No |
| Submit attendance correction requests | According to policy | According to policy | Yes |
| Review correction requests | According to policy | According to assigned scope | No |
| Access activity logs | According to implementation | According to implementation | No |

**Important:** The backend must enforce role permissions on every protected operation. Managers should be restricted to employees assigned to their teams, and employees should not be able to access other employees' private attendance information.

---

## Project Structure


The directory names are illustrative. Use the actual paths and module names in your repository when updating this document.

---

## Prerequisites

Install the following before running AttendEase:

- Node.js and npm.
- PostgreSQL.
- Git.
- A code editor such as Visual Studio Code.

Verify your installation:

```bash
node --version
npm --version
git --version
```

Confirm that PostgreSQL is running and that you have credentials capable of creating or accessing the project database.

---

## Installation and Setup

### 1. Clone the repository

```bash
git clone <YOUR_REPOSITORY_URL>
cd attendance-time-tracking
```

Replace `<YOUR_REPOSITORY_URL>` with your repository's actual URL.

### 2. Install backend dependencies

```bash
cd backend
npm install
```

### 3. Configure backend environment variables

Create a `.env` file inside the backend directory. See the [Environment Configuration](#environment-configuration) section below.

### 4. Configure the database

Create a PostgreSQL database and configure the `DATABASE_URL` variable.

Example database name:

```text
attendance_db
```

### 5. Run Prisma migrations

From the backend directory:

```bash
npx prisma migrate dev
npx prisma generate
```

If the project already contains migration files, use them to create the database schema. Avoid creating a new migration merely to reproduce a schema that already exists.

### 6. Install frontend dependencies

Open a second terminal:

```bash
cd frontend
npm install
```

Configure the frontend environment file if your Axios client reads the API base URL from an environment variable.

---

## Environment Configuration

### Backend `.env`

Example configuration:

```env
# Application
PORT=3000
NODE_ENV=development

# PostgreSQL
DATABASE_URL="postgresql://YOUR_DB_USER:YOUR_DB_PASSWORD@localhost:5432/attendance_db?schema=public"

# JWT authentication
JWT_SECRET=REPLACE_WITH_A_LONG_RANDOM_SECRET

# Frontend URL
FRONTEND_URL=http://localhost:5173

# Optional email configuration for password reset
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-google-app-password
SMTP_FROM=AttendEase <your-email@gmail.com>
```

Replace all example credentials with your actual configuration.

Generate a strong JWT secret instead of using the example placeholder. Never commit `.env` files, database passwords, email credentials, or JWT secrets to version control.

The SMTP variables are needed only if email-based password reset is implemented.

### Frontend `.env`

If the frontend uses Vite environment variables, create:

```env
VITE_API_URL=http://localhost:3000/api
```

For example, `src/api/client.ts` can configure Axios as follows:

```typescript
import axios from "axios";

export const api = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL ??
    "http://localhost:3000/api",
});
```

If your existing Axios client already defines the base URL, retain its current configuration rather than creating a second client.

Vite exposes only variables prefixed with `VITE_` to frontend code. Do not place secrets in frontend environment variables.

---

## Database Setup

AttendEase uses PostgreSQL to persist application data, with Prisma providing database access and migrations.

### Main data models

The database schema includes or is designed to support the following entities:

| Model | Purpose |
|---|---|
| `User` | Authentication credentials and role information |
| `Employee` | Employee profile and organizational information |
| `Team` | Team structure and assignments |
| `Shift` | Shift definitions |
| `ShiftAssignment` | Employee shift assignments |
| `AttendanceSession` | Clock-in, clock-out, and working-time records |
| `BreakRecord` | Break start, end, and break type |
| `CorrectionRequest` | Attendance correction requests and review status |
| `ActivityLog` | Records of relevant application activities |
| `PasswordResetToken` | Optional password-reset tokens, if implemented |

The exact fields and relations are defined by `backend/prisma/schema.prisma`.

### Useful Prisma commands

Run these commands from the backend directory:

```bash
# Generate Prisma Client
npx prisma generate

# Create and apply a development migration
npx prisma migrate dev --name describe_your_change

# Inspect database records visually
npx prisma studio

# Check Prisma CLI version
npx prisma --version
```

Use the existing migration history for normal development. In production, apply committed migrations with:

```bash
npx prisma migrate deploy
```

Do not use development migration commands against a production database without reviewing the consequences.

---

## Running the Application

Start the backend and frontend in separate terminals.

### Terminal 1 — Backend

```bash
cd backend
npm run start:dev
```

If your NestJS application uses a global `/api` prefix, the API will be available under:

```text
http://localhost:3000/api
```

Otherwise, use the prefix configured in `backend/src/main.ts`.

### Terminal 2 — Frontend

```bash
cd frontend
npm run dev
```

Vite commonly starts the frontend at:

```text
http://localhost:5173
```

Open the URL printed in your terminal.

### Production builds

Backend:

```bash
cd backend
npm run build
```

Frontend:

```bash
cd frontend
npm run build
```

Use the start scripts defined in each `package.json` when running production builds.

---

## Attendance and Break Calculation

AttendEase distinguishes attendance duration, total break duration, and net working duration.

### 1. Gross attendance duration

Gross duration is the elapsed time between clock-in and clock-out:

```text
Gross Duration = Clock-out Time - Clock-in Time
```

For an active session, the current time can be used as the temporary endpoint.

### 2. Break duration

Each break record contains a start timestamp, an end timestamp, and a break type.

```text
Break Duration = Break End Time - Break Start Time
```

If a break is still open, the application must handle it according to the configured break policy.

### 3. Net working duration

Unpaid breaks are excluded from working time:

```text
Net Working Time = Gross Duration - Unpaid Break Duration
```

Paid breaks remain included in paid working time.

For reporting, total break duration and unpaid break duration should be stored or calculated separately. A field named `breakMinutes` should be clearly documented as either total break duration or unpaid break duration; it should not silently represent both.

### 4. Fixed 45-minute paid break

When the 45-minute paid break policy is enabled:

- A paid break begins when the employee starts it.
- The intended end time is 45 minutes after the start.
- The system can automatically close an expired paid break using a scheduled backend task.
- If the employee ends the break after the deadline, the recorded end time should be capped at the deadline.
- The unpaid-break calculation must exclude paid break minutes.

For automatic closure, the NestJS scheduler must be installed and initialized, and the attendance service must be registered as a provider. The scheduled task only runs while the backend process is running; production deployments should account for process restarts and multiple backend instances.

### 5. Clock-out validation

The clock-out operation should validate that no break remains open after any eligible expired paid breaks have been closed.

- An expired paid break can be closed automatically.
- An unpaid break that remains open should block clock-out.
- An unexpired paid break should follow the application's configured policy.
- Attendance calculations must be performed on the backend, not trusted solely from frontend values.

---

## API Endpoints

The API uses JSON request and response bodies. Protected endpoints require the authentication mechanism configured by the backend, typically a JWT bearer token.

If the application uses the `/api` global prefix, prepend `/api` to the routes below.

### Authentication

| Method | Endpoint | Purpose |
|---|---|---|
| `POST` | `/auth/login` | Authenticate a user and obtain an access token |
| `POST` | `/auth/forgot-password` | Request a password-reset email, if implemented |
| `POST` | `/auth/reset-password` | Reset a password using a valid token, if implemented |

The password-reset endpoints require the corresponding service methods, DTOs, database migration, and email configuration.

### Attendance

| Method | Endpoint | Purpose |
|---|---|---|
| `POST` | `/attendance/clock-in` | Start an attendance session |
| `POST` | `/attendance/clock-out` | End an attendance session |
| `POST` | `/attendance/break/start` | Start a break |
| `POST` | `/attendance/break/end` | End an active break |
| `GET` | `/attendance/history` | Retrieve the authenticated employee's attendance history |

### Correction Requests

| Method | Endpoint | Purpose |
|---|---|---|
| `POST` | `/corrections` | Submit an attendance correction request |
| `GET` | `/corrections/my-requests` | Retrieve the authenticated employee's correction requests |

Approval and rejection endpoints depend on the implemented review workflow.

### Reports

| Method | Endpoint | Purpose |
|---|---|---|
| `GET` | `/reports/monthly/export` | Export a monthly report in the configured export format |
| `GET` | `/reports/monthly/export-csv` | Export a monthly report as CSV |

Supported filters may include month, team, and employee, depending on the controller implementation.

### Employees and Teams

Employee and team routes depend on the implemented controllers. Document the exact route methods, parameters, and role restrictions from the current backend before treating them as available API operations.

---

## Authentication Example

After a successful login, the frontend receives an access token and stores it under the `accessToken` local-storage key in the current implementation.

A protected request can be made using a bearer token:

```http
Authorization: Bearer YOUR_ACCESS_TOKEN
```

Example Axios request:

```typescript
const token = localStorage.getItem("accessToken");

const response = await api.get("/attendance/history", {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
```

For a larger application, configure an Axios request interceptor to attach the token consistently rather than repeating the header in every request.

If authentication uses local storage, consider the risks associated with cross-site scripting and apply appropriate content-security and input-validation controls. A secure, HTTP-only cookie-based session may be preferable depending on the deployment requirements.

---

## Security

The following security controls should be applied and verified before deployment:

- Hash passwords using bcrypt or an equivalent secure password-hashing algorithm.
- Keep database credentials, JWT secrets, and SMTP credentials outside source control.
- Validate incoming request bodies with DTOs and validation pipes.
- Apply authentication guards to protected API endpoints.
- Enforce authorization and role restrictions on the backend.
- Restrict managers to their assigned employees.
- Prevent employees from accessing another employee's attendance history or correction requests.
- Validate attendance transitions and prevent duplicate active sessions.
- Use short-lived, single-use, expiring password-reset tokens.
- Return generic responses for password-reset requests to reduce email-account enumeration.
- Apply rate limiting to login and password-reset endpoints.
- Use HTTPS in production.
- Configure CORS for trusted frontend origins.
- Avoid logging passwords, access tokens, reset tokens, or other sensitive credentials.
- Maintain database backups and apply migrations through a controlled deployment process.

Security measures should be verified against the actual code and configuration; their inclusion in this README does not by itself mean they are already implemented.

---

## Troubleshooting

### 1. Database authentication error (Prisma P1000)

**Possible cause:** PostgreSQL credentials in `DATABASE_URL` are incorrect.

**Solution:**

- Verify the database username and password.
- Confirm that the PostgreSQL server is running.
- Check the database name and port.
- Verify that the configured database user has the required permissions.

### 2. `DATABASE_URL` is not configured

**Possible cause:** The backend cannot load the environment variable.

**Solution:**

- Check that the backend `.env` file exists in the expected location.
- Confirm that the variable is named `DATABASE_URL`.
- Restart the backend after changing environment variables.

### 3. `secretOrPrivateKey must have a value`

**Possible cause:** The JWT secret is missing.

**Solution:**

- Configure a strong `JWT_SECRET` in the backend environment.
- Ensure the JWT module reads the same variable.
- Restart the backend.

### 4. CORS errors

**Possible cause:** The frontend origin is not permitted by the backend.

**Solution:**

- Configure CORS in the NestJS application for the correct frontend origin.
- Verify the frontend and backend URLs.
- Do not solve the problem by allowing every origin indiscriminately in production.

### 5. Frontend cannot connect to the API

**Possible cause:** An incorrect API base URL, stopped backend, or incorrect global prefix.

**Solution:**

- Confirm that the backend is running.
- Check the browser's Network tab.
- Verify the Axios base URL.
- Confirm whether the backend uses `/api`.

### 6. Prisma Client or generated-client errors

**Possible cause:** The generated client is missing or the schema has changed.

**Solution:**

```bash
npx prisma generate
npm run build
```

Run these commands in the backend directory. Also verify that the Prisma schema, generator configuration, imports, and TypeScript build configuration agree.

### 7. Password-reset email is not received

**Possible cause:** SMTP credentials or server configuration are incorrect.

**Solution:**

- Verify the SMTP host and port.
- Check the SMTP username and app password.
- Inspect backend error logs without exposing credentials.
- Check spam folders.
- Confirm that the reset URL uses the correct frontend address.

### 8. No space left on device (`ENOSPC`)

**Possible cause:** The system has insufficient disk space or file watchers have reached a system limit.

**Solution:**

- Check available disk space.
- Remove unnecessary build artifacts and unused dependencies carefully.
- Check operating-system file-watcher limits if the error concerns watching files rather than storage.

---

## Testing

Run the test commands defined in the relevant package.

### Backend

```bash
cd backend
npm test
```

If configured:

```bash
npm run test:e2e
npm run test:cov
```

### Frontend

```bash
cd frontend
npm run build
```

Add and run the frontend test command if a test framework has been configured.

### Recommended test cases

- Valid and invalid login credentials.
- Missing or invalid JWT tokens.
- Clock-in with no active session.
- Attempted duplicate clock-in.
- Clock-out without an active session.
- Starting a second break while another break is open.
- Ending a break that is not open.
- Automatic closure of an expired paid break.
- Clock-out while an unpaid break remains open.
- Correct gross, total-break, unpaid-break, and net-working-time calculations.
- Employee access to personal records only.
- Manager access restricted to assigned employees.
- Admin-only employee management.
- Invalid, expired, or reused password-reset tokens.
- CSV export filters and report calculations.

---

## Future Improvements

Potential improvements include:

- Automated unit and end-to-end tests.
- A dedicated activity-log dashboard.
- A complete employee and team management interface.
- Shift scheduling and shift-based attendance validation.
- A complete correction approval workflow.
- Enhanced reporting with date-range filters and summaries.
- Notifications for missed clock-outs and pending corrections.
- Stronger session management and token revocation.
- Automated database backups and production monitoring.
- Containerized deployment with Docker.
- Continuous integration and deployment pipelines.
- Additional accessibility and responsive-design improvements.

These items should be prioritized according to the project's actual requirements and implementation status.

---

## License

No license has been specified for this project yet. Add an appropriate license before distributing the software publicly.

---

## Author and Contributions

AttendEase is a full-stack attendance management project built with React, TypeScript, NestJS, Prisma, and PostgreSQL.

Contributions should follow the project's coding conventions and include appropriate tests for new functionality. Before submitting changes, verify the backend build, frontend build, database migrations, and relevant application workflows.

---

**Project status:** Development.

**Note:** Update this README whenever endpoints, environment variables, database models, or supported features change. Verify the repository's actual `package.json`, Prisma schema, controller routes, and frontend routing before publishing this documentation as a definitive implementation guide.
