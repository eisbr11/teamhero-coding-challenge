import React from 'react';
import clsx from 'clsx';
import { useTheme } from 'react-jss';

import { ColConfig } from 'types/datagrid.type';
import { useDataGridState } from 'context/dataGrid.context';
import useStyles from './TableHead.styles';
import TableCell from '../TableCell';
import SortIndicator from './components/SortIndicator';

const TableHead = ({
  columns,
}: {
  columns: ColConfig[]
}) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const { setSort, getActiveSort } = useDataGridState();

  const handleClick = (column: ColConfig) => {
    if (column.sortable) {
      setSort(column.dataKey, column.sortFn);
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
            className={clsx(
              classes.headCell,
              {
                [classes.sortable]: column.sortable,
              },
            )}
            onClick={() => handleClick(column)}
          >
            <span className={classes.headCellText}>
              {column.label}
            </span>
            <SortIndicator column={column} activeSort={getActiveSort()} />
          </TableCell>
        ))
      ))}
    </div>
  );
};

export default TableHead;
