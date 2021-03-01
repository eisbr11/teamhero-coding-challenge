import React from 'react';
import { useTheme } from 'react-jss';

import { ColConfig } from 'types/datagrid.type';
import { useDataGridState } from 'context/dataGrid.context';
import useStyles from './TableHead.styles';
import TableCell from '../TableCell';

const TableHead = ({
  columns,
}: {
  columns: ColConfig[]
}) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const { sortRows } = useDataGridState();

  const handleClick = (column: ColConfig) => {
    if (column.sortable) {
      console.log(`sort column: ${column.dataKey} with ${column.sortFn}`);

      sortRows(column.dataKey, column.sortFn);
    } else {
      console.log('dont sort');
    }
  };

  return (
    <div className={classes.row}>
      {columns.map((column) => (
        (!column.hide && (
          <TableCell
            key={`header-col-${column.dataKey}`}
            align={column.align}
            variant="head"
            grow={column.flexGrow}
            width={column.width}
            onClick={() => handleClick(column)}
          >
            {column.label}
          </TableCell>
        ))
      ))}
    </div>
  );
};

export default TableHead;
