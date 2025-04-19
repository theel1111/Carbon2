import os
from flask import Flask
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager
from models import db  # import db from models
from auth import auth_bp
from product_api import product_bp

app = Flask(__name__)

# Load configuration from environment variables or a configuration file
app.config['DEBUG'] = True

app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL', 'mysql://myuser:mypassword@mysql:3306/mydatabase')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['JWT_SECRET_KEY'] = os.getenv('JWT_SECRET_KEY', 'your-secret-key')  # Use environment variable or .env file for secret key

# Initialize extensions
db.init_app(app)  # Connects SQLAlchemy (your ORM) to this Flask app.
migrate = Migrate(app, db)  # Connects Flask-Migrate
jwt = JWTManager(app)  # Sets up JWT-based login and access control.

# Register blueprints
app.register_blueprint(auth_bp)
app.register_blueprint(product_bp)

@app.route('/')
def index():
    return "Hello, Database is ready!"

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5001)
