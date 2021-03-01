import React from 'react';
import { useTheme } from 'react-jss';

import { GridConfig } from 'types/datagrid.type';
import { useDataGridState } from 'context/dataGrid.context';
import calculateMinWidth from 'helper/tableWrapper.helper';
import useStyles from './Table.styles';
import TableHead from '../TableHead';
import BodyRow from '../BodyRow';
import FilterBar from '../FilterBar';

const Table = ({
  gridConfig,
}: {
  gridConfig: GridConfig,
}) => {
  const { dataGridState, getComputedRows } = useDataGridState();
  const { columns } = dataGridState;

  const rows = getComputedRows();

  const theme = useTheme();
  const classes = useStyles(theme);
  const minWidth = calculateMinWidth(columns);

  return (
    <div style={{ minWidth }} className={classes.wrapper}>
      {(gridConfig.showFilters && (
        <FilterBar columns={columns} />
      ))}
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

export default Table;
