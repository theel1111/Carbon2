import os
from flask import Flask
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager
from models import db  # import db from models
from auth import auth_bp

app = Flask(__name__)

# Configuration
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://myuser:mypassword@mysql:3306/mydatabase'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['JWT_SECRET_KEY'] = 'your-secret-key'

# Init extensions
db.init_app(app)
migrate = Migrate(app, db)
jwt = JWTManager(app)

# Register blueprints
app.register_blueprint(auth_bp)

@app.route('/')
def index():
    return "Hello, Database is ready!"

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
