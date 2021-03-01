import React from 'react';

import { ColConfig } from 'types/datagrid.type';
import useStyles from './FilterBar.styles';
import FilterText from './components/FilterText';
import FilterTag from './components/FilterTag';

const renderFilterByType = (
  column: ColConfig,
) => {
  switch (column.filterType) {
    case 'tag':
      return <FilterTag column={column} />;
    case 'text':
      return <FilterText column={column} />;
    default:
      return null;
  }
};

const FilterBar = ({
  columns,
}: {
  columns: ColConfig[],
}) => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      {columns.map((column) => (
        (column.filterable && (
          <div key={`${column.dataKey}-filter`}>
            { renderFilterByType(column) }
          </div>
        ))
      ))}
    </div>
  );
};

export default FilterBar;
