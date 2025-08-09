## Practo Healthcare - Monorepo (Client + Server)

A full‑stack project with a Next.js client and a Spring Boot backend.

### Overview

- **Client**: Next.js app in `Client/practo-healthcare`
- **Server**: Spring Boot app in `Server/practo`
- **API base URL**: `http://localhost:8080/api`
- **Swagger UI**: `http://localhost:8080/api/swagger-ui/index.html`

## Prerequisites

- **Node.js**: v20+ (Next 15) and **npm** v10+
- **JDK**: 21+ (POM targets Java 24). Prefer JDK 24 if available.
- **PostgreSQL**: v13+
- Git Bash/PowerShell/Terminal

PostgreSQL setup (once):

- Create a database named `practo_healthcare`
- Ensure a user and password exist (defaults are overridable via env vars)

Example SQL:

```
CREATE DATABASE practo_healthcare;
-- Optional: create dedicated user
-- CREATE USER practo_user WITH PASSWORD 'strong_password';
-- GRANT ALL PRIVILEGES ON DATABASE practo_healthcare TO practo_user;
```

## 1) Start the Server (Spring Boot)

Location: `Server/practo`

Environment variables (override defaults in `application.yml`):

- `DB_USERNAME` (default: `postgres`)
- `DB_PASSWORD` (default present in `application.yml`)
- `JWT_SECRET` (default present in `application.yml`)
- `CORS_ORIGINS` (default: `http://localhost:3000,http://localhost:3001`)

Windows PowerShell example:

```
cd Server\practo
$env:DB_USERNAME="postgres"
$env:DB_PASSWORD="your_password"
$env:JWT_SECRET="your_very_long_secret"
# Run the app
mvnw.cmd clean spring-boot:run
```

macOS/Linux:

```
cd Server/practo
export DB_USERNAME=postgres
export DB_PASSWORD=your_password
export JWT_SECRET=your_very_long_secret
./mvnw clean spring-boot:run
```

Server runs at:

- API base: `http://localhost:8080/api`
- Docs: `http://localhost:8080/api/swagger-ui/index.html`

Notes:

- DB connection is configured at `jdbc:postgresql://localhost:5432/practo_healthcare`
- JPA is set to `ddl-auto: update` so tables are created/updated automatically

## 2) Start the Client (Next.js)

Location: `Client/practo-healthcare`

```
cd Client\practo-healthcare
npm install
npm run dev
```

Open: `http://localhost:3000`

The client currently calls the backend via a hardcoded URL:

- `http://localhost:8080/api/doctors/search` (see `src/components/layout/HeroSection.js`)
  Ensure the backend is running at that address (or update the code to use an env variable in a future improvement).

## Production builds

- Server (creates a runnable JAR):

```
cd Server\practo
mvnw.cmd -DskipTests package
java -jar target/healthcare-0.0.1-SNAPSHOT.jar
```

- Client (Next.js production):

```
cd Client\practo-healthcare
npm run build
npm run start
```

## Common issues & fixes

- Port in use: change server port in `Server/practo/src/main/resources/application.yml` under `server.port`, or stop the conflicting process.
- Java version: ensure `JAVA_HOME` is set to JDK 21+ (project sets `java.version` to 24). Use `mvn -v` to confirm.
- Database connection: verify PostgreSQL is running, credentials are correct, and DB `practo_healthcare` exists.
- CORS errors: default origins include `http://localhost:3000` and `3001`. Adjust `CORS_ORIGINS` env var or security config as needed.

## Project layout

```
Proj/
  Client/
    practo-healthcare/  # Next.js app (dev on :3000)
  Server/
    practo/             # Spring Boot app (serves API on :8080/api)
```
