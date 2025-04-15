from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy() # Creates the db object, initializes the SQLAlchemy instance in app.py

class Company(db.Model):
    __tablename__ = 'Company'
    company_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    company_name = db.Column(db.String(255))
    location = db.Column(db.String(255))

class User(db.Model):
    __tablename__ = 'User'
    user_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    account = db.Column(db.String(255), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)
    user_name = db.Column(db.String(50))
    email = db.Column(db.String(255), unique=True, nullable=False)
    phone = db.Column(db.String(20))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

class Project(db.Model):
    __tablename__ = 'Project'
    project_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    project_name = db.Column(db.String(255))
    description = db.Column(db.Text)
    company_id = db.Column(db.Integer, db.ForeignKey('Company.company_id'))
    start_date = db.Column(db.DateTime)
    end_date = db.Column(db.DateTime)
    
class Role(db.Model):
    __tablename__ = 'Role'
    role_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    role_name = db.Column(db.String(50))
    scope = db.Column(db.String(255))
    description = db.Column(db.Text)

class UserRole(db.Model):
    __tablename__ = 'UserRole'
    user_role_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    user_id = db.Column(db.Integer, db.ForeignKey('User.user_id'))
    role_id = db.Column(db.Integer, db.ForeignKey('Role.role_id'))
    scope_id = db.Column(db.Integer, db.ForeignKey('Project.project_id'))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

class Product(db.Model):
    __tablename__ = 'Product'
    product_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    product_name = db.Column(db.String(255))
    product_type = db.Column(db.String(100))
    company_id = db.Column(db.Integer, db.ForeignKey('Company.company_id'))

class CF_Activity(db.Model):
    __tablename__ = 'CF_Activity'
    activity_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    cfr_id = db.Column(db.Integer, db.ForeignKey('CF_Result.cf_id'))
    stage = db.Column(db.Enum('raw_material', 'manufacturing', 'transportation', 'use', 'diposal'))
    project_id = db.Column(db.Integer, db.ForeignKey('Project.project_id'))
    project_name = db.Column(db.String(255))
    value = db.Column(db.Numeric(15, 4))
    unit = db.Column(db.String(50))
    factor_id = db.Column(db.Integer, db.ForeignKey('EmissionFactor.factor_id'))
    transpor_origin = db.Column(db.String(255))
    transport_method = db.Column(db.String(255))
    distance_per_trip = db.Column(db.Numeric(15, 4))
    distance_unit = db.Column(db.String(50))
    usage_ratio = db.Column(db.Numeric(5, 4))
    allocation_ratio = db.Column(db.Numeric(5, 4))
    fuel_input_per_unit = db.Column(db.Float)
    fuel_input_unit = db.Column(db.String(255))
    land_transport_tkm = db.Column(db.Float)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    note = db.Column(db.Text)
    
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

class CF_Result(db.Model):
    __tablename__ = 'CF_Result'
    cf_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    product_id = db.Column(db.Integer, db.ForeignKey('Product.product_id'))
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
