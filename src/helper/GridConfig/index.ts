import { GridConfig } from 'types/datagrid.type';

const createGridConfig = ({
  hideHead = false,
  showFilters = false,
}: {
  hideHead?: boolean,
  showFilters?: boolean,
}): GridConfig => ({
  hideHead,
  showFilters,
});

export default createGridConfig;
