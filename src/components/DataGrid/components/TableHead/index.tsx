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
          <span className={classes.headCol} key={`header-col-${column.dataKey}`} style={{ flexGrow: column.flexGrow }}>
            <TableCell align={column.align} variant="head">
              {column.label}
            </TableCell>
          </span>
        ))
      ))}
    </div>
  );
};

export default TableHead;
