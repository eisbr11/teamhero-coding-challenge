import { createContext, useContext } from 'react';
import { ContactsStateType } from 'types/contacts.type';

export type ContactsContextType = {
  contactsState: ContactsStateType;
  setContactsState: (contactsState: ContactsStateType) => void;
};

/**
 * the contacts data context
 *
 * @returns {Context}
 */
export const ContactsContext = createContext<ContactsContextType>({
  contactsState: { contacts: [], isFetching: false, hasError: false },
  // eslint-disable-next-line no-console
  setContactsState: () => console.warn('No provider found'),
});

export const useContactsState = () => useContext(ContactsContext);
