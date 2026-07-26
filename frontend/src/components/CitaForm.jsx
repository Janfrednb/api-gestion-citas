import { useEffect, useState } from "react";

const EMPTY_FORM = { cliente: "", fecha: "", hora: "", observaciones: "" };

export default function CitaForm({ open, initialData, saving, onSubmit, onClose }) {
  const [form, setForm] = useState(EMPTY_FORM);

  useEffect(() => {
    if (open) {
      setForm(initialData ? { ...EMPTY_FORM, ...initialData } : EMPTY_FORM);
    }
  }, [open, initialData]);

  if (!open) return null;

  const isEditing = Boolean(initialData);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(form);
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>{isEditing ? "Editar cita" : "Nueva cita"}</h2>

        <form onSubmit={handleSubmit}>
          <label>
            Cliente
            <input
              type="text"
              name="cliente"
              value={form.cliente}
              onChange={handleChange}
              placeholder="Nombre del cliente"
              required
            />
          </label>

          <div className="form-row">
            <label>
              Fecha
              <input
                type="date"
                name="fecha"
                value={form.fecha}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Hora
              <input
                type="time"
                name="hora"
                value={form.hora}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <label>
            Observaciones
            <textarea
              name="observaciones"
              value={form.observaciones}
              onChange={handleChange}
              placeholder="Notas adicionales (opcional)"
              rows={3}
            />
          </label>

          <div className="modal-actions">
            <button type="button" className="btn btn-ghost" onClick={onClose} disabled={saving}>
              Cancelar
            </button>
            <button type="submit" className="btn btn-primary" disabled={saving}>
              {saving ? "Guardando..." : isEditing ? "Guardar cambios" : "Crear cita"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
