import React from 'react';
import { useTheme } from 'react-jss';

import { GridConfig } from 'types/datagrid.type';
import { useDataGridState } from 'context/dataGrid.context';
import calculateMinWidth from 'helper/tableWrapper.helper';
import useStyles from './Table.styles';
import TableHead from '../TableHead';
import BodyRow from '../BodyRow';

const Table = ({
  gridConfig,
}: {
  gridConfig: GridConfig,
}) => {
  const { dataGridState, setDataGridState } = useDataGridState();
  const { columns, rows } = dataGridState;

  const theme = useTheme();
  const classes = useStyles(theme);

  const minWidth = calculateMinWidth(columns);

  const emptyTable = () => {
    setDataGridState({
      columns: [],
      rows: [],
    });
  };

  return (
    <div style={{ minWidth }} className={classes.wrapper}>
      <button type="submit" onClick={emptyTable}>Test Button</button>
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
