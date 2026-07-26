import api from "./api";

export const getNoticias = async () => {
  const response = await api.get("/informativo/");
  return response.data;
};

export const getNoticia = async (id) => {
  const response = await api.get(`/informativo/${id}/`);
  return response.data;
};