import axios from 'axios';
import {CONTACT_API_URL, getContacts} from './contacts';

describe('Contacts Api', () => {
  it('should fetch contacts from API successfully', async () => {
    jest.spyOn(axios, 'get').mockResolvedValueOnce({data: []});
    const result = await getContacts();
    expect(result).toEqual([]);
    expect(axios.get).toHaveBeenCalledWith(CONTACT_API_URL);
  });

  it('should return contacts as an array of Contact objects', async () => {
    const contactsData = [
      {id: '1', name: 'John Doe', avatar: 'avatar1.jpg'},
      {id: '2', name: 'Jane Smith', avatar: 'avatar2.jpg'},
    ];
    jest.spyOn(axios, 'get').mockResolvedValueOnce({data: contactsData});
    const result = await getContacts();
    expect(result).toEqual(contactsData);
    expect(axios.get).toHaveBeenCalledWith(CONTACT_API_URL);
  });

  it('should handle empty response from API gracefully', async () => {
    jest.spyOn(axios, 'get').mockResolvedValueOnce({data: []});
    const result = await getContacts();
    expect(result).toEqual([]);
    expect(axios.get).toHaveBeenCalledWith(CONTACT_API_URL);
  });

  it('should handle API throwing an error', async () => {
    jest.spyOn(axios, 'get').mockRejectedValueOnce({data: 'malformed data'});
    await expect(getContacts()).rejects.toThrow('Failed to get contacts');
    expect(axios.get).toHaveBeenCalledWith(CONTACT_API_URL);
  });
});
