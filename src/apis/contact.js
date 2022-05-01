import { getServer } from './index';

const server = getServer();

export const fetchContactsResult = async () => {
  const res = await server.get('/api/contacts');

  return res;
};

export const fetchContactResult = async (id) => {
  const res = await server.get(`/api/contacts/${id}`);

  return res;
};

export const createContactResult = async (payload) => {
  const res = await server.post('/api/contacts', {
    contact: payload,
  });

  return res;
};

export const updateContactResult = async ({ id, ...payload }) => {
  const res = await server.patch(`/api/contacts/${id}`, {
    info: payload,
  });

  return res;
};

export const removeContactResult = async (id) => {
  const res = await server.delete(`/api/contacts/${id}`);

  return res;
};
