import {
  createContactResult,
  fetchContactResult,
  fetchContactsResult,
  removeContactResult,
  updateContactResult,
} from 'apis/contact';
import { useFetching } from 'contexts/FetchingProvider';
import { useMessage } from 'contexts/MessageProvider';
import { useEffect, useState } from 'react';

const INIT_STATE = {
  first_name: null,
  last_name: null,
  job: null,
  description: null,
};

export const useCreateContact = () => {
  const [contact, setFormData] = useState(INIT_STATE);
  const { addFetching, cancelFetching } = useFetching();
  const { sendMessage } = useMessage();

  const createContact = async (payload) => {
    try {
      addFetching(createContact);

      const { data } = await createContactResult(payload);

      cancelFetching(createContact);
      sendMessage('info', data.message);
      return data.data;
    } catch (error) {
      sendMessage('error', error.response.data.message ?? error.message);
      cancelFetching(createContact);
      return;
    }
  };

  const onContactDataChange = (key) => (e) => {
    setFormData((form) => {
      return {
        ...form,
        [key]: e.target.value,
      };
    });
  };

  return { contact, createContact, onContactDataChange };
};

export const useUpdateContact = (id) => {
  const [contact, setFormData] = useState(INIT_STATE);
  const { addFetching, cancelFetching } = useFetching();
  const { sendMessage } = useMessage();

  const updateContact = async (payload) => {
    try {
      addFetching(updateContact);

      const { data } = await updateContactResult({ id, ...payload });

      cancelFetching(updateContact);
      sendMessage('info', data.message);
      return data.data;
    } catch (error) {
      sendMessage('error', error.response.data.message ?? error.message);
      cancelFetching(updateContact);
    }
  };

  const fetchContact = async (id) => {
    try {
      addFetching(fetchContact);

      const { data } = await fetchContactResult(id);

      cancelFetching(fetchContact);

      setFormData(() => {
        return data.data;
      });
    } catch (error) {
      sendMessage('error', error.response.data.message ?? error.message);
      cancelFetching(fetchContact);
    }
  };

  const onContactDataChange = (key) => (e) => {
    setFormData((form) => {
      return {
        ...form,
        [key]: e.target.value,
      };
    });
  };

  useEffect(() => {
    if (id) {
      fetchContact(id);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return { contact, updateContact, onContactDataChange };
};

const insertContact = (list, item) => {
  if (!item) return list;

  return list.concat(item);
};

const updateContact = (index, list, item) => {
  list[index] = {
    ...item,
  };

  return list;
};

export const useGetContactList = (contact) => {
  const [list, setList] = useState([]);
  const { addFetching, cancelFetching } = useFetching();
  const { sendMessage } = useMessage();

  async function fetchList() {
    try {
      addFetching(fetchList);

      const { data } = await fetchContactsResult();

      const index = data.data.findIndex(
        ({ id }) => contact && id === contact.id
      );

      const list =
        index === -1
          ? insertContact(data.data, contact)
          : updateContact(index, data.data, contact);

      setList(() => {
        return list;
      });

      cancelFetching(fetchList);
    } catch (error) {
      sendMessage('error', error.response.data.message ?? error.message);
      cancelFetching(fetchList);
    }
  }

  const refreshList = () => {
    fetchList();
  };

  const removeContact = async (id) => {
    try {
      addFetching(removeContact);

      const { data } = await removeContactResult(id);

      cancelFetching(removeContact);

      const index = list.findIndex((item) => id === item.id);

      if (index === -1) return;

      sendMessage('info', data.message);
      setList(() => {
        return list.filter((item) => item.id !== id);
      });
    } catch (error) {
      sendMessage('error', error.response.data.message ?? error.message);
      cancelFetching(removeContact);
    }
  };

  useEffect(() => {
    fetchList();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { list, refreshList, removeContact };
};
