# 🐾 Pokédex React Application

A Pokédex web application built with **React**, **Vite**, **Docker**, and **HAProxy**. The app fetches Pokémon data from the PokéAPI and displays detailed information including official artwork, types, abilities, and base stats.

## Features

- Display Pokémon from PokéAPI
- View Pokémon details on selection
- Official artwork, types, abilities, and stats
- Loading and error handling
- Responsive dark-themed UI
- Multi-stage Docker build
- HAProxy SSL termination
- HTTP → HTTPS redirect

## Project Structure

```text
pokedex-project/
├── app/
│   ├── src/
│   ├── Dockerfile
│   └── .dockerignore
├── haproxy/
│   └── haproxy.cfg
├── certs/
├── docker-compose.yml
└── README.md
```

## Run the Project

### Generate SSL Certificate

```bash
openssl genrsa -out server.key 2048

openssl req -x509 -new -nodes \
-key server.key \
-sha256 \
-days 365 \
-out server.crt

cat server.crt server.key > server.pem
```

Move the generated files into the `certs/` directory.

### Build and Start

```bash
docker compose up --build -d
```

### Verify Containers

```bash
docker ps
```

### Access Application

```text
https://localhost
```

Accept the browser warning since a self-signed certificate is used.

## Architecture

```text
Browser
   │
 HTTPS
   │
   ▼
HAProxy
   │
   ▼
React App (Nginx)
   │
   ▼
PokéAPI
```

## Assignment Requirements

- ✅ React Pokédex UI
- ✅ PokéAPI Integration
- ✅ Loading & Error Handling
- ✅ Custom CSS
- ✅ Multi-Stage Dockerfile
- ✅ .dockerignore
- ✅ Self-Signed TLS Certificate
- ✅ HAProxy Configuration
- ✅ HTTP → HTTPS Redirect
- ✅ Docker Compose

## Author

Ayush Kumar