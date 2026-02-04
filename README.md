# Appointment Management API
[English version]

Backend API developed with **Flask (Python)** to manage appointments for a small business or service-based company.  
This project was created as part of my portfolio to practice backend development and REST APIs.

---

## 🚀 Features

✔ Create appointments  
✔ List registered appointments  
✔ Store data using SQLite  
✔ Organized architecture with Flask and SQLAlchemy  

---

## 🛠️ Technologies

- Python 3.x  
- Flask  
- Flask-SQLAlchemy  
- SQLite  
- Git & GitHub  

---

## 📁 Project Structure

api-gestion-citas/
├── app/
│ ├── init.py
│ ├── db.py
│ ├── routes.py
│ └── models/
│ └── cita.py
├── instance/
│ └── citas.db
├── run.py
├── requirements.txt
└── README.md


---

## ⚙️ Installation & Run

1. Clone the repository
```bash
git clone https://github.com/Janfrednb/api-gestion-citas.git
cd api-gestion-citas
Create virtual environment

python -m venv venv
Activate virtual environment

Windows

venv\Scripts\activate
macOS / Linux

source venv/bin/activate
Install dependencies

pip install -r requirements.txt
Run the API

python run.py
API will be available at:

http://127.0.0.1:5000
📲 Available Endpoints
GET /citas
List all appointments

POST /citas
Create a new appointment

Example request body:

{
  "cliente": "Juan Perez",
  "fecha": "2026-02-10",
  "hora": "09:00",
  "observaciones": "General consultation"
}
🧠 What I practiced
✔ Backend API development with Flask
✔ Database modeling with SQLAlchemy
✔ Project structure and organization
✔ HTTP requests and responses

🚧 Future improvements
Update and delete endpoints

Request validations

User authentication

PostgreSQL support

👤 Author
Janfred Naranjo
Junior Backend Developer
---

[Contenido en español]

API de Gestión de Citas

API backend desarrollada en Flask (Python) para gestionar citas de un consultorio o negocio de servicios.
Proyecto creado como parte de mi portafolio para practicar desarrollo backend y APIs REST.

🚀 Funcionalidades

✔ Crear citas
✔ Listar citas registradas
✔ Almacenamiento en SQLite
✔ Arquitectura organizada con Flask y SQLAlchemy

🧠 Aprendizajes

✔ Desarrollo de APIs con Flask
✔ Modelado de base de datos
✔ Organización de proyectos backend
✔ Manejo de peticiones HTTP

🚧 Próximas mejoras

Endpoints para actualizar y eliminar citas

Validaciones

Autenticación de usuarios

Soporte para PostgreSQL
