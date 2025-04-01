import os
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from datetime import datetime

app = Flask(__name__)

# Configure the app
# Configure the app with MySQL database URI
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://myuser:mypassword@mysql:3306/mydatabase'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize SQLAlchemy
db = SQLAlchemy(app)

# Initialize Flask-Migrate
migrate = Migrate(app, db)

# Define Models
class Company(db.Model):
    __tablename__ = 'Company'
    company_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    industry = db.Column(db.String(255))
    name = db.Column(db.String(255))
    location = db.Column(db.String(255))

class User(db.Model):
    __tablename__ = 'User'
    user_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    account = db.Column(db.String(255), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)
    role = db.Column(db.String(50))
    company_id = db.Column(db.Integer, db.ForeignKey('Company.company_id'), nullable=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

class Product(db.Model):
    __tablename__ = 'Product'
    product_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    product_name = db.Column(db.String(255))
    product_type = db.Column(db.String(100))
    company_id = db.Column(db.Integer, db.ForeignKey('Company.company_id'))

class CFV(db.Model):
    __tablename__ = 'CFV'
    cfv_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    cfv_name = db.Column(db.String(255))
    cfv_scope = db.Column(db.String(255))
    company_id = db.Column(db.Integer, db.ForeignKey('Company.company_id'))
    product_id = db.Column(db.Integer, db.ForeignKey('Product.product_id'))
    location = db.Column(db.String(255))
    start_time = db.Column(db.DateTime)
    end_time = db.Column(db.DateTime)
    updated_time = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

class EmissionFactor(db.Model):
    __tablename__ = 'EmissionFactor'
    factor_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    factor_name = db.Column(db.String(255))
    category = db.Column(db.String(255))
    unit = db.Column(db.String(50))
    value = db.Column(db.Numeric(10, 2))
    region = db.Column(db.String(255))
    source = db.Column(db.String(255))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

class CF(db.Model):
    __tablename__ = 'CF'
    cf_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    product_id = db.Column(db.Integer, db.ForeignKey('Product.product_id'))
    cfv_id = db.Column(db.Integer, db.ForeignKey('CFV.cfv_id'))
    factor_id = db.Column(db.Integer, db.ForeignKey('EmissionFactor.factor_id'))
    total_emission = db.Column(db.Numeric(15, 4))
    quantity = db.Column(db.Numeric(15, 4))
    record_time = db.Column(db.DateTime, default=datetime.utcnow)

class Report(db.Model):
    __tablename__ = 'Report'
    report_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    report_name = db.Column(db.String(255))
    cfv_id = db.Column(db.Integer, db.ForeignKey('CFV.cfv_id'))
    user_id = db.Column(db.Integer, db.ForeignKey('User.user_id'))
    created_time = db.Column(db.DateTime, default=datetime.utcnow)


@app.route('/')
def index():
    return "Hello, Database is ready!"


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
