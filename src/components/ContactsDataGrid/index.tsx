import Typography from 'components/Typography';
import { ContactsApi } from 'types/contacts.type';

const ContactsDataGrid = ({
  contacts,
}: {
  contacts: ContactsApi
}) => (
  <>
    {contacts.map((contact) => (
      <Typography>
        {`${contact.lastName}, ${contact.firstName}`}
      </Typography>
    ))}
  </>
);

export default ContactsDataGrid;
