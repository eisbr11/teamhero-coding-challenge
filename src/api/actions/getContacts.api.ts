import { ContactsApi } from 'types/contacts.type';
import contactsServer from '../server/contacts.api';

/**
 * fetch contacts data from server
 */
const getContacts = ():Promise<ContactsApi> => contactsServer.get(
  '/contacts',
);

export default getContacts;
