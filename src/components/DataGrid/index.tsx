import React from 'react';
import { useTheme } from 'react-jss';

import { ColConfig, GridConfig, Row } from 'types/datagrid.type';
import calculateMinWidth from 'helper/tableWrapper.helper';
import useStyles from './DataGrid.styles';
import TableHead from './components/TableHead';
import BodyRow from './components/BodyRow';

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

  const minWidth = calculateMinWidth(columns);

  return (
    <div style={{ minWidth }} className={classes.wrapper}>
      {(!gridConfig.hideHead && (
        <TableHead columns={columns} />
      ))}
      <div className={classes.bodyWrapper}>
        {rows.map((row) => (
          <BodyRow key={`row_${row.id}`} columns={columns} row={row} />
        ))}
      </div>
    </div>
  );
};

export default DataGrid;
