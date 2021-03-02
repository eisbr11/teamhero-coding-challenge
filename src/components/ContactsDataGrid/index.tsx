import { ContactsApi, Skill } from 'types/contacts.type';
import { ColConfig, GridConfig, Row } from 'types/datagrid.type';
import DataGrid from 'components/DataGrid';
import createColConfig from 'helper/ColConfig';
import createGridConfig from 'helper/GridConfig';
import SkillTags from 'components/SkillTags';
import { compareStrings, filterByString } from 'helper/dataGrid.helper';

const columns: ColConfig[] = [
  createColConfig({
    dataKey: 'avatar',
    label: '',
    width: 100,
    sortable: false,
    valueGetter: (row: Row, key: string) => {
      const imageSrc = row[key] as string;
      return (
        <img alt="Avatar" src={imageSrc} />
      );
    },
  }),
  createColConfig({
    dataKey: 'id',
    label: 'ID',
    hide: false,
    width: 50,
    sortable: true,
    sortFn: compareStrings,
  }),
  createColConfig({ dataKey: 'firstName', label: 'First Name' }),
  createColConfig({
    dataKey: 'lastName',
    label: 'Last Name',
    filterable: true,
    filterFn: filterByString,
  }),
  createColConfig({ dataKey: 'email', label: 'E-Mail', flexGrow: 1.0 }),
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
    flexGrow: 1,
    filterable: true,
    filterType: 'tag',
  }),
  createColConfig({ dataKey: 'location', label: 'Location' }),
];

const contactsGridConfig: GridConfig = createGridConfig({
  hideHead: false,
  showFilters: true,
});

const ContactsDataGrid = ({
  contacts,
}: {
  contacts: ContactsApi,
}) => {
  /*
   * If I would need to adjust the data, to fit my row DataType,
   * I would add a transform helper function or a middleware here
   */
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
