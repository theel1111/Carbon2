FROM python:3.13-slim


# Install build dependencies for mysqlclient
RUN apt-get update && apt-get install -y \
    pkg-config \
    libmariadb-dev-compat \
    libmariadb-dev \
    build-essential \
    && rm -rf /var/lib/apt/lists/*  # Clean up after installation

# Set the working directory inside the created image
WORKDIR /app

# Set Environment Variables
# Tells Flask what the main application file is (app)
# Sets the environment mode to development, enabling features like hot-reloading for easier development. 
ENV FLASK_APP=app.py \
    FLASK_ENV=development

# Copy project files
COPY ./requirements.txt .

# Install dependencies
RUN pip install -r requirements.txt

# Add Flask-Migrate to the requirements file (if not already added)
RUN pip install Flask-Migrate

COPY . .

# Expose the port Flask runs on
EXPOSE 5001

# Run app.py when the container launches
CMD ["flask", "run", "--host=0.0.0.0", "--port=5000"]
