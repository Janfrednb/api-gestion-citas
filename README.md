# Appointment Management API
[English version]

Full-stack project developed with **Flask (Python)** on the backend and **React** on the frontend to manage appointments for a small business or service-based company.
This project was created as part of my portfolio to practice backend development, REST APIs, and frontend integration.

![Dashboard screenshot](docs/dashboard-screenshot.png)

---

## 🚀 Features

✔ Create appointments
✔ List registered appointments
✔ Update existing appointments
✔ Delete appointments
✔ Store data using SQLite
✔ Organized architecture with Flask and SQLAlchemy
✔ React dashboard to manage appointments visually
✔ CORS enabled so the frontend and backend can run independently

---

## 🛠️ Technologies

**Backend**
- Python 3.x
- Flask
- Flask-SQLAlchemy
- Flask-Cors
- SQLite

**Frontend**
- React
- Vite

**Tooling**
- Git & GitHub

---

## 📁 Project Structure

```
api-gestion-citas/
├── app/
│   ├── __init__.py
│   ├── db.py
│   ├── routes.py
│   └── models/
│       └── cita.py
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   │   └── citas.js
│   │   ├── components/
│   │   │   ├── CitaForm.jsx
│   │   │   └── CitaTable.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
├── run.py
├── requirements.txt
└── README.md
```

---

## ⚙️ Installation & Run

### 1. Clone the repository

```bash
git clone https://github.com/Janfrednb/api-gestion-citas.git
cd api-gestion-citas
```

### 2. Backend (Flask API)

```bash
# Create virtual environment
python -m venv venv

# Activate it
# Windows
venv\Scripts\activate
# macOS / Linux
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run the API
python run.py
```

The API will be available at `http://127.0.0.1:5000`. The database table is created automatically on the first run.

### 3. Frontend (React dashboard)

In a separate terminal:

```bash
cd frontend
npm install
cp .env.example .env   # on Windows: copy .env.example .env
npm run dev
```

The dashboard will be available at `http://localhost:5173`. `.env` controls `VITE_API_URL`, which should point to wherever the Flask API is running (defaults to `http://127.0.0.1:5000`).

---

## 📲 Available Endpoints

| Method | Endpoint       | Description                |
|--------|----------------|-----------------------------|
| GET    | `/citas`       | List all appointments       |
| POST   | `/citas`       | Create a new appointment    |
| PUT    | `/citas/<id>`  | Update an existing appointment |
| DELETE | `/citas/<id>`  | Delete an appointment       |

Example request body (POST / PUT):

```json
{
  "cliente": "Juan Perez",
  "fecha": "2026-02-10",
  "hora": "09:00",
  "observaciones": "General consultation"
}
```

---

## 🧠 What I practiced

✔ Backend API development with Flask
✔ Database modeling with SQLAlchemy
✔ Project structure and organization
✔ HTTP requests and responses
✔ Building a React frontend that consumes a REST API
✔ Handling CORS between separate frontend and backend servers

---

## 🚧 Future improvements

- Request validations
- User authentication
- PostgreSQL support
- Deploy backend and frontend

---

## 👤 Author

Janfred Naranjo
Junior Backend Developer

---

[Contenido en español]

# API de Gestión de Citas

Proyecto full-stack desarrollado con **Flask (Python)** en el backend y **React** en el frontend para gestionar citas de un consultorio o negocio de servicios.
Proyecto creado como parte de mi portafolio para practicar desarrollo backend, APIs REST e integración con frontend.

---

## 🚀 Funcionalidades

✔ Crear citas
✔ Listar citas registradas
✔ Actualizar citas existentes
✔ Eliminar citas
✔ Almacenamiento en SQLite
✔ Arquitectura organizada con Flask y SQLAlchemy
✔ Dashboard en React para gestionar citas visualmente
✔ CORS habilitado para que frontend y backend corran de forma independiente

---

## 🛠️ Tecnologías

**Backend**
- Python 3.x
- Flask
- Flask-SQLAlchemy
- Flask-Cors
- SQLite

**Frontend**
- React
- Vite

---

## ⚙️ Instalación y ejecución

### 1. Clonar el repositorio

```bash
git clone https://github.com/Janfrednb/api-gestion-citas.git
cd api-gestion-citas
```

### 2. Backend (API Flask)

```bash
# Crear entorno virtual
python -m venv venv

# Activarlo
# Windows
venv\Scripts\activate
# macOS / Linux
source venv/bin/activate

# Instalar dependencias
pip install -r requirements.txt

# Ejecutar la API
python run.py
```

La API estará disponible en `http://127.0.0.1:5000`. La tabla de la base de datos se crea automáticamente en la primera ejecución.

### 3. Frontend (Dashboard en React)

En otra terminal:

```bash
cd frontend
npm install
copy .env.example .env   # en macOS/Linux: cp .env.example .env
npm run dev
```

El dashboard estará disponible en `http://localhost:5173`. El archivo `.env` define `VITE_API_URL`, que debe apuntar a donde esté corriendo la API Flask (por defecto `http://127.0.0.1:5000`).

---

## 🧠 Aprendizajes

✔ Desarrollo de APIs con Flask
✔ Modelado de base de datos
✔ Organización de proyectos backend
✔ Manejo de peticiones HTTP
✔ Construcción de un frontend en React que consume una API REST
✔ Manejo de CORS entre servidores de frontend y backend separados

---

## 🚧 Próximas mejoras

- Validaciones de datos
- Autenticación de usuarios
- Soporte para PostgreSQL
- Despliegue del backend y frontend
