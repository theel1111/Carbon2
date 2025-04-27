from flask import Blueprint, request, jsonify
from flask_jwt_extended import JWTManager, create_access_token
from werkzeug.security import check_password_hash
from models import db, User

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    account = data.get('account')
    password = data.get('password')

    # Check if the account and password are provided
    user = User.query.filter_by(account=account).first()
    if user and check_password_hash(user.password, password):
        access_token = create_access_token(identity=str(user.user_id))
        return jsonify(access_token=access_token), 200
    
    # If the account or password is incorrect, return an error
    return jsonify({"msg": "Bad credentials"}), 401

