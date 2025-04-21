from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required
from models import db, CF_Result, EmissionFactor

carbon_bp = Blueprint('carbon', __name__)

@carbon_bp.route('/carbon_audits', methods=['GET'])
@jwt_required()
def get_all_audits():
    audits = CF_Result.query.all()
    result = []
    for audit in audits:
        result.append({
            'cf_id': audit.cf_id,
            'product_id': audit.product_id,
            'total_emission': str(audit.total_emission),
            'quantity': str(audit.quantity),
            'record_time': audit.record_time.isoformat()
        })
    return jsonify(result), 200

@carbon_bp.route('/carbon_audits/<int:audit_id>', methods=['GET'])
@jwt_required()
def get_audit(audit_id):
    audit = CF_Result.query.get_or_404(audit_id)
    return jsonify({
        'cf_id': audit.cf_id,
        'product_id': audit.product_id,
        'total_emission': str(audit.total_emission),
        'quantity': str(audit.quantity),
        'record_time': audit.record_time.isoformat()
    }), 200

@carbon_bp.route('/carbon_audits', methods=['POST'])
@jwt_required()
def create_audit():
    data = request.get_json()
    new_audit = CF_Result(
        product_id=data['product_id'],
        total_emission=data['total_emission'],
        quantity=data['quantity']
    )
    db.session.add(new_audit)
    db.session.commit()
    return jsonify({'msg': 'Audit created', 'cf_id': new_audit.cf_id}), 201

@carbon_bp.route('/carbon_audits/<int:audit_id>', methods=['PUT'])
@jwt_required()
def update_audit(audit_id):
    audit = CF_Result.query.get_or_404(audit_id)
    data = request.get_json()
    audit.total_emission = data.get('total_emission', audit.total_emission)
    audit.quantity = data.get('quantity', audit.quantity)
    db.session.commit()
    return jsonify({'msg': 'Audit updated'}), 200


@carbon_bp.route('/carbon_audits/<int:audit_id>', methods=['DELETE'])
@jwt_required()
def delete_audit(audit_id):
    audit = CF_Result.query.get_or_404(audit_id)
    db.session.delete(audit)
    db.session.commit()
    return jsonify({'msg': 'Audit deleted'}), 200

@carbon_bp.route('/emissionFactor', methods=['GET'])
@jwt_required()
def get_emission_factors():
    factors = EmissionFactor.query.all()
    result = []
    for factor in factors:
        result.append({
            'factor_id': factor.factor_id,
            'factor_name': factor.factor_name,
            'category': factor.category,
            'unit': factor.unit,
            'value': str(factor.value),
            'region': factor.region,
            'source': factor.source
        })
    return jsonify(result), 200
