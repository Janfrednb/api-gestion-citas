function formatFecha(fecha) {
  const parsed = new Date(`${fecha}T00:00:00`);
  if (Number.isNaN(parsed.getTime())) return fecha;

  return parsed.toLocaleDateString("es-CO", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export default function CitaTable({ citas, onEdit, onDelete }) {
  if (citas.length === 0) {
    return (
      <div className="empty-state">
        <p>No hay citas registradas todavía.</p>
        <span>Crea la primera con el botón "Nueva cita".</span>
      </div>
    );
  }

  return (
    <div className="table-wrapper">
      <table className="citas-table">
        <thead>
          <tr>
            <th>Cliente</th>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Observaciones</th>
            <th aria-label="Acciones" />
          </tr>
        </thead>
        <tbody>
          {citas.map((cita) => (
            <tr key={cita.id}>
              <td className="cell-cliente">{cita.cliente}</td>
              <td>{formatFecha(cita.fecha)}</td>
              <td>{cita.hora}</td>
              <td className="cell-observaciones">{cita.observaciones || "Sin observaciones"}</td>
              <td className="cell-actions">
                <button className="btn-icon" onClick={() => onEdit(cita)} title="Editar cita">
                  Editar
                </button>
                <button
                  className="btn-icon btn-icon-danger"
                  onClick={() => onDelete(cita)}
                  title="Eliminar cita"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
