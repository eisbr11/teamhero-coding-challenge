import React, { useEffect } from 'react';

import getContacts from 'api';
import { ContactsStateType } from 'types/contacts.type';
import { ContactsContext } from './contacts.context';

/**
 * The Contacts Data Context Provider Wrapper
 *
 * @param {*} children
 * @returns {JSX}
 * @constructor
 */
const ContactsDataContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const defaultContactsState: ContactsStateType = {
    contacts: [],
    isFetching: false,
    hasError: false,
  };
  const [contactsState, setContactsState] = React.useState(defaultContactsState);

  const fetchData = async () => {
    setContactsState((prevState) => ({ ...prevState, isFetching: true }));
    try {
      const fetchedContacts = await getContacts();

      setContactsState({ contacts: fetchedContacts, isFetching: false, hasError: false });
    } catch (e) {
      setContactsState({ contacts: [], hasError: true, isFetching: false });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ContactsContext.Provider value={{ contactsState, setContactsState }}>
      {children}
    </ContactsContext.Provider>
  );
};

export default ContactsDataContextProvider;
