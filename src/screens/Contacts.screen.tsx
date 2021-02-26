import Layout from 'components/Layout';
import Loading from 'components/Loading';
import { useContactsState } from 'context/contacts.context';
import ContactsDataGrid from 'components/ContactsDataGrid';

const ContactsScreen = () => {
  const { contactsState } = useContactsState();
  if (contactsState.hasError) {
    return (
      <Layout>
        Connection Error
      </Layout>
    );
  }
  return (
    <Layout>
      {contactsState.isFetching ? (
        <Loading />
      ) : (
        <ContactsDataGrid contacts={contactsState.contacts} />
      )}
    </Layout>
  );
};

export default ContactsScreen;
