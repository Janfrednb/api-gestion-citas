from flask import Flask, jsonify, request
from .db import db

def create_app():
    app = Flask(__name__)

    # Configuración SQLite
    app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///citas.db"
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

    db.init_app(app)

    # Importar modelo
    from .models.cita import Cita

    @app.route("/")
    def index():
        return jsonify({
            "status": "ok",
            "message": "API de gestión de citas funcionando"
        })

    # =========================
    # GET y POST /citas
    # =========================
    @app.route("/citas", methods=["GET", "POST"])
    def citas():
        if request.method == "GET":
            citas = Cita.query.all()
            return jsonify([cita.to_dict() for cita in citas])

        if request.method == "POST":
            data = request.get_json()

            if not data:
                return jsonify({"error": "No se enviaron datos"}), 400

            cliente = data.get("cliente")
            fecha = data.get("fecha")
            hora = data.get("hora")
            observaciones = data.get("observaciones", "")

            if not cliente or not fecha or not hora:
                return jsonify({
                    "error": "Los campos cliente, fecha y hora son obligatorios"
                }), 400

            nueva_cita = Cita(
                cliente=cliente,
                fecha=fecha,
                hora=hora,
                observaciones=observaciones
            )

            db.session.add(nueva_cita)
            db.session.commit()

            return jsonify(nueva_cita.to_dict()), 201

    # =========================
    # PUT /citas/<id>
    # =========================
    @app.route("/citas/<int:id>", methods=["PUT"])
    def actualizar_cita(id):
        cita = Cita.query.get(id)

        if not cita:
            return jsonify({"error": "Cita no encontrada"}), 404

        data = request.get_json()

        if not data:
            return jsonify({"error": "No se enviaron datos"}), 400

        # Actualización parcial
        cita.cliente = data.get("cliente", cita.cliente)
        cita.fecha = data.get("fecha", cita.fecha)
        cita.hora = data.get("hora", cita.hora)
        cita.observaciones = data.get("observaciones", cita.observaciones)

        db.session.commit()

        return jsonify(cita.to_dict())

    # =========================
    # DELETE /citas/<id>
    # =========================
    @app.route("/citas/<int:id>", methods=["DELETE"])
    def eliminar_cita(id):
        cita = Cita.query.get(id)

        if not cita:
            return jsonify({"error": "Cita no encontrada"}), 404

        db.session.delete(cita)
        db.session.commit()

        return jsonify({
            "message": f"Cita con id {id} eliminada correctamente"
        })

    return app






