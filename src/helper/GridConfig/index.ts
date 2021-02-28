import { GridConfig } from 'types/datagrid.type';

const createGridConfig = ({
  hideHead = false,
}: {
  hideHead?: boolean,
}): GridConfig => ({
  hideHead,
});

export default createGridConfig;
