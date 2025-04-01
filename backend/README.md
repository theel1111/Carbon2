# Backend Setup Guide

This guide provides step-by-step instructions to set up and run the backend of the project.

## Prerequisites
Make sure you have the following installed on your system:
- Docker & Docker Compose
- Python 3.13+
- MySQL

## Installation

### 1. Clone the Repository
```bash
git clone <repository-url>
cd <repository-folder>/backend
```

### 2. Set Up Environment Variables
Create a `.env` file in the `backend` directory and configure it with the necessary environment variables:
```env
MYSQL_USER=myuser
MYSQL_PASSWORD=mypassword
MYSQL_HOST=mysql
MYSQL_PORT=3307
MYSQL_DB=mydatabase
FLASK_APP=app.py
FLASK_DEBUG=1
```

### 3. Build and Start the Backend
Using Docker Compose:
```bash
docker-compose up --build
```

If running locally without Docker:
```bash
pip install -r requirements.txt
flask run --host=0.0.0.0 --port=5000
```

## Database Setup
Ensure MySQL is running and accessible. Run the following commands to initialize the database:
```bash
docker exec -it carbon2-backend-1 flask db upgrade
```
To verify the database:
```bash
docker exec -it carbon2-backend-1 mysql -u myuser -p
SHOW DATABASES;
USE mydatabase;
SHOW TABLES;
```

## API Endpoints
| Method | Endpoint         | Description            |
|--------|-----------------|------------------------|
| GET    | `/health`       | Check if backend is running |
| POST   | `/data`         | Submit data           |

## Troubleshooting
- If MySQL connection fails, check if the database container is running:
  ```bash
  docker ps
  ```
- If migrations do not apply, run:
  ```bash
  flask db migrate -m "Initial migration"
  flask db upgrade
  ```

## Contributing
1. Fork the repository
2. Create a new branch
3. Commit your changes
4. Submit a pull request
