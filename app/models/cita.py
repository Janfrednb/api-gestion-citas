from app.db import db

class Cita(db.Model):
    __tablename__ = "citas"

    id = db.Column(db.Integer, primary_key=True)
    cliente = db.Column(db.String(100), nullable=False)
    fecha = db.Column(db.String(20), nullable=False)
    hora = db.Column(db.String(10), nullable=False)
    observaciones = db.Column(db.Text)

    def __repr__(self):
        return f"<Cita {self.cliente} {self.fecha} {self.hora}>"

    def to_dict(self):
        return {
            "id": self.id,
            "cliente": self.cliente,
            "fecha": self.fecha,
            "hora": self.hora,
            "observaciones": self.observaciones
        }


