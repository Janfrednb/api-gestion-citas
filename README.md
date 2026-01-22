# API Gestión de Citas 🗓️

API backend desarrollada en **Flask** para la gestión de citas de un consultorio o negocio de servicios.

Permite crear y listar citas, almacenándolas en una base de datos SQLite.  
Proyecto enfocado en buenas prácticas de backend y arquitectura REST.

---

## 🚀 Tecnologías usadas

- Python 3.11
- Flask
- Flask-SQLAlchemy
- SQLite
- Git & GitHub

---

## 📂 Estructura del proyecto

api-gestion-citas/
│
├── app/
│ ├── init.py
│ ├── db.py
│ ├── routes.py
│ ├── models/
│ │ └── cita.py
│
├── instance/
│ └── citas.db
│
├── run.py
├── requirements.txt
└── README.md

yaml
Copy code

---

## ⚙️ Instalación y ejecución

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/janfrednb/api-gestion-citas.git
cd api-gestion-citas
2️⃣ Crear entorno virtual
bash
Copy code
python -m venv venv
3️⃣ Activar entorno virtual (Windows)
bash
Copy code
venv\Scripts\activate
4️⃣ Instalar dependencias
bash
Copy code
pip install -r requirements.txt
5️⃣ Ejecutar el servidor
bash
Copy code
python run.py
Servidor disponible en:
👉 http://127.0.0.1:5000

🔗 Endpoints disponibles
📌 GET /citas
Lista todas las citas registradas.

powershell
Copy code
Invoke-RestMethod http://127.0.0.1:5000/citas
📌 POST /citas
Crea una nueva cita.

powershell
Copy code
Invoke-RestMethod -Uri http://127.0.0.1:5000/citas `
-Method POST `
-ContentType "application/json" `
-Body '{
  "cliente": "Juan Perez",
  "fecha": "2026-02-10",
  "hora": "09:00",
  "observaciones": "Consulta general"
}'
🧠 Aprendizajes clave
Arquitectura Flask con Application Factory

Uso de SQLAlchemy ORM

Separación de modelos y rutas

Manejo de errores HTTP

Control de versiones con Git y GitHub

🔮 Próximas mejoras
Validaciones avanzadas

Endpoints PUT y DELETE

Autenticación

PostgreSQL

Despliegue en la nube

👤 Autor
Janfred Naranjo
Desarrollador backend en formación