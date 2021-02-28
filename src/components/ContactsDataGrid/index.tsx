import { ContactsApi, Skill } from 'types/contacts.type';
import { ColConfig, GridConfig, Row } from 'types/datagrid.type';
import DataGrid from 'components/DataGrid';
import createColConfig from 'helper/ColConfig';
import createGridConfig from 'helper/GridConfig';
import SkillTags from 'components/SkillTags';

const columns: ColConfig[] = [
  createColConfig({ dataKey: 'id', label: 'ID', hide: true }),
  createColConfig({ dataKey: 'firstName', label: 'First Name' }),
  createColConfig({ dataKey: 'lastName', label: 'Last Name' }),
  createColConfig({ dataKey: 'email', label: 'E-Mail', flexGrow: 1.0 }),
  createColConfig({ dataKey: 'location', label: 'Location', align: 'center' }),
  createColConfig({
    dataKey: 'skills',
    label: 'Skills',
    sortable: false,
    valueGetter: (row: Row, key: string) => {
      const skills = row[key] as Skill[];
      return (
        <SkillTags skills={skills} />
      );
    },
  }),
];

const contactsGridConfig: GridConfig = createGridConfig({
  hideHead: false,
});

const ContactsDataGrid = ({
  contacts,
}: {
  contacts: ContactsApi,
}) => {
  const rows: Row[] = contacts;

  return (
    <DataGrid
      columns={columns}
      rows={rows}
      gridConfig={contactsGridConfig}
    />
  );
};

export default ContactsDataGrid;
