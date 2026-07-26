import api from "./api";

export const getActividades = async () => {
  const response = await api.get("/actividades/");
  return response.data;
};

export const getActividad = async (id) => {
  const response = await api.get(`/actividades/${id}/`);
  return response.data;
};