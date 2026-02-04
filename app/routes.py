from flask import Blueprint, request, jsonify
from app.db import db
from app.models.cita import Cita

citas_bp = Blueprint("citas", __name__)


# -------------------------
# GET - listar citas
# -------------------------
@citas_bp.route("/citas", methods=["GET"])
def listar_citas():
    citas = Cita.query.all()
    return jsonify([cita.to_dict() for cita in citas]), 200


# -------------------------
# POST - crear cita
# -------------------------
@citas_bp.route("/citas", methods=["POST"])
def crear_cita():
    data = request.get_json()

    if not data:
        return jsonify({"error": "No se enviaron datos"}), 400

    cliente = data.get("cliente")
    fecha = data.get("fecha")
    hora = data.get("hora")
    observaciones = data.get("observaciones", "")

    if not cliente or not fecha or not hora:
        return jsonify({"error": "Faltan campos obligatorios"}), 400

    nueva_cita = Cita(
        cliente=cliente,
        fecha=fecha,
        hora=hora,
        observaciones=observaciones
    )

    db.session.add(nueva_cita)
    db.session.commit()

    return jsonify(nueva_cita.to_dict()), 201


# -------------------------
# PUT - actualizar cita
# -------------------------
@citas_bp.route("/citas/<int:id>", methods=["PUT"])
def actualizar_cita(id):
    cita = Cita.query.get(id)

    if not cita:
        return jsonify({"error": "Cita no encontrada"}), 404

    data = request.get_json()

    if not data:
        return jsonify({"error": "No se enviaron datos"}), 400

    # Actualizamos solo lo que venga en el JSON
    cita.cliente = data.get("cliente", cita.cliente)
    cita.fecha = data.get("fecha", cita.fecha)
    cita.hora = data.get("hora", cita.hora)
    cita.observaciones = data.get("observaciones", cita.observaciones)

    db.session.commit()

    return jsonify(cita.to_dict()), 200
