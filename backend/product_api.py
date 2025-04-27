import logging
from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from models import db, Product, User, UserRole, Project, Role

product_bp = Blueprint('product', __name__)

@product_bp.route('/products', methods=['GET'])
@jwt_required()
def get_products():
    current_user = get_jwt_identity()   # This will return the 'sub' claim (the user ID)
    print(f"Current user ID: {current_user}") 
    
    products = Product.query.all()
    print([{
    'product_id': p.product_id,
    'product_name': p.product_name,
    'product_type': p.product_type,
    'company_id': p.company_id
    } for p in products])
    return jsonify([{
        'product_id': p.product_id,
        'product_name': p.product_name,
        'product_type': p.product_type,
        'company_id': p.company_id
    } for p in products]), 200


@product_bp.route('/products', methods=['POST'])
@jwt_required()
def create_product():
    data = request.get_json()
    current_user = get_jwt_identity()
    # Permission check (project_admin or project_editor)
    new_product = Product(
        product_name=data['product_name'],
        product_type=data['product_type'],
        company_id=data['company_id']
    )
    db.session.add(new_product)
    db.session.commit()
    return jsonify({'msg': 'Product created successfully'}), 201

@product_bp.route('/products/<int:product_id>', methods=['PUT'])
@jwt_required()
def update_product(product_id):
    product = Product.query.get_or_404(product_id)
    current_user = get_jwt_identity()

    data = request.get_json()
    # Modify the product object with new provided data
    if 'product_name' in data:
        product.product_name = data['product_name']
    if 'product_type' in data:
        product.product_type = data['product_type']
    
    db.session.commit()
    return jsonify({'msg': 'Product updated successfully'}), 200


@product_bp.route('/products/<int:product_id>', methods=['DELETE'])
@jwt_required()
def delete_product(product_id):
    product = Product.query.get_or_404(product_id)
    current_user = get_jwt_identity()

    db.session.delete(product)
    db.session.commit()
    return jsonify({'msg': 'Product deleted successfully'}), 200
