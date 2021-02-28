import React from 'react';
import { useTheme } from 'react-jss';

import { ColConfig, Row } from 'types/datagrid.type';
import TableCell from '../TableCell';
import useStyles from './BodyRow.styles';

const BodyRow = ({
  row,
  columns,
}: {
  row: Row,
  columns: ColConfig[],
}) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <div className={classes.row}>
      {columns.map((column) => (
        (!column.hide && (
          <TableCell
            key={`cell${column.dataKey}_${row.id}`}
            align={column.align}
            grow={column.flexGrow}
            width={column.width}
          >
            {column.valueGetter(row, column.dataKey)}
          </TableCell>
        ))
      ))}
    </div>
  );
};

export default BodyRow;
