import { useEffect, useState } from "react";
import CitaForm from "./components/CitaForm.jsx";
import CitaTable from "./components/CitaTable.jsx";
import { createCita, deleteCita, getCitas, updateCita } from "./api/citas.js";
import "./App.css";

export default function App() {
  const [citas, setCitas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formOpen, setFormOpen] = useState(false);
  const [editingCita, setEditingCita] = useState(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    loadCitas();
  }, []);

  async function loadCitas() {
    setLoading(true);
    setError(null);
    try {
      const data = await getCitas();
      setCitas(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  function openCreateForm() {
    setEditingCita(null);
    setFormOpen(true);
  }

  function openEditForm(cita) {
    setEditingCita(cita);
    setFormOpen(true);
  }

  function closeForm() {
    if (saving) return;
    setFormOpen(false);
    setEditingCita(null);
  }

  async function handleSubmit(form) {
    setSaving(true);
    setError(null);
    try {
      if (editingCita) {
        const updated = await updateCita(editingCita.id, form);
        setCitas((prev) => prev.map((c) => (c.id === updated.id ? updated : c)));
      } else {
        const created = await createCita(form);
        setCitas((prev) => [...prev, created]);
      }
      setFormOpen(false);
      setEditingCita(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(cita) {
    const confirmed = window.confirm(
      `¿Eliminar la cita de ${cita.cliente} (${cita.fecha} ${cita.hora})?`
    );
    if (!confirmed) return;

    setError(null);
    try {
      await deleteCita(cita.id);
      setCitas((prev) => prev.filter((c) => c.id !== cita.id));
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="page">
      <header className="page-header">
        <div>
          <h1>Gestión de Citas</h1>
          <p>Administra las citas de tu negocio en un solo lugar.</p>
        </div>
        <button className="btn btn-primary" onClick={openCreateForm}>
          Nueva cita
        </button>
      </header>

      {error && (
        <div className="alert-error">
          <span>{error}</span>
          <button onClick={loadCitas}>Reintentar</button>
        </div>
      )}

      <main className="card">
        {loading ? (
          <div className="loading-state">Cargando citas...</div>
        ) : (
          <CitaTable citas={citas} onEdit={openEditForm} onDelete={handleDelete} />
        )}
      </main>

      <CitaForm
        open={formOpen}
        initialData={editingCita}
        saving={saving}
        onSubmit={handleSubmit}
        onClose={closeForm}
      />
    </div>
  );
}
