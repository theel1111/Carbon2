# Use Python base image, a read-only template, install this. 
FROM python:3.13-slim

# Set the working directory inside the created image
WORKDIR /app

ENV FLASK_APP=app.py \
    FLASK_ENV=development

# Copy project files
COPY ./requirements.txt .

# Install dependencies
RUN pip install -r requirements.txt

COPY . .

# Expose the port Flask runs on
EXPOSE 5000

# Run the application
CMD ["python", "app.py"]
