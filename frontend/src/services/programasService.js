import api from "./api";

export const getProgramas = async () => {
  const response = await api.get("/programas/");
  return response.data;
};

export const getPrograma = async (id) => {
  const response = await api.get(`/programas/${id}/`);
  return response.data;
};

export const crearPrograma = async (formData) => {
  const response = await api.post("/programas/", formData);

  return response.data;
};

export const editarPrograma = async (id, formData) => {
  const response = await api.put(`/programas/${id}/`, formData);

  return response.data;
};

export const eliminarPrograma = async (id) => {
  const response = await api.delete(`/programas/${id}/`);

  return response.data;
};