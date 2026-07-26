from flask import Flask, jsonify
from flask_cors import CORS
from .db import db


def create_app():
    app = Flask(__name__)

    # Configuración SQLite
    app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///citas.db"
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

    db.init_app(app)
    CORS(app)

    # Importar modelo y rutas
    from .models.cita import Cita
    from .routes import citas_bp

    app.register_blueprint(citas_bp)

    with app.app_context():
        db.create_all()

    @app.route("/")
    def index():
        return jsonify({
            "status": "ok",
            "message": "API de gestión de citas funcionando"
        })

    return app
