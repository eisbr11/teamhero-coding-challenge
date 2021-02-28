import React from 'react';
import { useTheme } from 'react-jss';

import { ColConfig } from 'types/datagrid.type';
import useStyles from './TableHead.styles';
import TableCell from '../TableCell';

const TableHead = ({
  columns,
}: {
  columns: ColConfig[]
}) => {
  const theme = useTheme();
  const classes = useStyles(theme);

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
          >
            {column.label}
          </TableCell>
        ))
      ))}
    </div>
  );
};

export default TableHead;
