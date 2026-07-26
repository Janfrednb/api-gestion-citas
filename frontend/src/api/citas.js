const BASE_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:5000";

async function handleResponse(res) {
  const data = await res.json().catch(() => null);

  if (!res.ok) {
    const message = data?.error || "Ocurrió un error al comunicarse con la API";
    throw new Error(message);
  }

  return data;
}

export function getCitas() {
  return fetch(`${BASE_URL}/citas`).then(handleResponse);
}

export function createCita(cita) {
  return fetch(`${BASE_URL}/citas`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cita),
  }).then(handleResponse);
}

export function updateCita(id, cita) {
  return fetch(`${BASE_URL}/citas/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cita),
  }).then(handleResponse);
}

export function deleteCita(id) {
  return fetch(`${BASE_URL}/citas/${id}`, {
    method: "DELETE",
  }).then(handleResponse);
}
