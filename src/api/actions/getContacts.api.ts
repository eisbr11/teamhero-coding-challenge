import { ContactsApi } from 'types/contacts.type';
import companyServer from '../server/contacts.api';

/**
 * fetch company data from server
 */
const getCompanies = ():Promise<ContactsApi> => companyServer.get(
  '/companies',
);

export default getCompanies;
