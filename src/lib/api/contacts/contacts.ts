import axios from 'axios';

const CONTACTS_QUERY_KEY = 'contacts';

export interface Contact {
  id: string;
  name: string;
  avatar: string;
}

export const CONTACT_API_URL =
  'https://6172cfe5110a740017222e2b.mockapi.io/elements';

export const getContacts = async () => {
  try {
    const {data: contacts} = await axios.get(CONTACT_API_URL);
    return contacts as Contact[];
  } catch (error) {
    throw new Error('Failed to get contacts');
  }
};

export const CONTACT_QUERY_PARAMS = {
  queryKey: [CONTACTS_QUERY_KEY],
  queryFn: getContacts,
};
