# Carbon2

## Description

## Table of Contents

- [Carbon2](#carbon2)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation and Setup](#installation-and-setup)
    - [Prerequisites](#prerequisites)
    - [Clone the Repository](#clone-the-repository)
    - [Build and Run the Project with Docker](#build-and-run-the-project-with-docker)
  - [Running with Docker](#running-with-docker)
    - [Logs](#logs)
  - [Stopping the Docker Containers](#stopping-the-docker-containers)

## Installation and Setup

### Prerequisites

Make sure you have the following installed:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Clone the Repository

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/ver0n1ca1213/Carbon2.git
cd Carbon2
```

### Build and Run the Project with Docker

Run the following command to build the Docker containers and start the application:

```bash
docker-compose up --build
```

This will build the containers for both the frontend and backend services as specified in the `docker-compose.yml` file.

## Running with Docker

Once the containers are built, the application should be accessible at:

- **Frontend**: `http://localhost:3000`
- **Backend**: `http://localhost:5000` (optional if the frontend calls the backend API)

### Logs

To see the logs from your running containers:

```bash
docker-compose logs -f
```

## Stopping the Docker Containers

To stop and remove the running containers, use the following command:

```bash
docker-compose down
```

This will stop and remove the containers without removing the images.
