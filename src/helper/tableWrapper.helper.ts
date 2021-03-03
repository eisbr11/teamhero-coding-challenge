import { ColConfig } from 'types/datagrid.type';

const calculateMinWidth = (columns: ColConfig[]): number => {
  let minWidth = 0;

  columns.forEach((column) => {
    if (!column.hide) {
      minWidth += column.width;
    }
  });

  return minWidth;
};

export default calculateMinWidth;
