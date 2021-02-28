import React from 'react';
import { useTheme } from 'react-jss';

import { ColConfig, GridConfig, Row } from 'types/datagrid.type';
import TableCell from './components/TableCell';
import useStyles from './DataGrid.styles';
import TableHead from './components/TableHead';

const DataGrid = ({
  rows,
  columns,
  gridConfig,
}: {
  rows: Row[],
  columns: ColConfig[],
  gridConfig: GridConfig,
}) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <div className={classes.wrapper}>
      {(!gridConfig.hideHead && (
        <TableHead columns={columns} />
      ))}
      <div className={classes.bodyWrapper}>
        {rows.map((row) => (
          <div key={`row_${row.id}`} className={classes.row}>
            {columns.map((column) => (
              (!column.hide && (
                <TableCell align={column.align} key={`cell${column.dataKey}_${row.id}`} className={classes.bodyCol}>
                  {column.valueGetter(row, column.dataKey)}
                </TableCell>
              ))
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataGrid;
