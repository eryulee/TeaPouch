import api from './config';

export const getAllTeas = async () => {
  const resp = await api.get('/teas');
  return resp.data;
};

export const getOneTea = async (id) => {
  const resp = await api.get(`/teas/${id}`);
  return resp.data;
};

export const postTea = async (teaData) => {
  const resp = await api.post('/teas', { tea: teaData });
  return resp.data;
};

export const deleteTea = async (id) => {
  const resp = await api.delete(`/teas/${id}`);
  return resp;
};

export const putTea = async (id, teaData) => {
  const resp = await api.put(`/teas/${id}`, { tea: teaData });
  return resp.data;
};

export const addFlavorToTea = async (flavorId, id) => {
  const resp = await api.put(`/flavors/${flavorId}/teas/${id}`);
  return resp.data;
};