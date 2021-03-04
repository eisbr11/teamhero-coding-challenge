import React from 'react';
import clsx from 'clsx';
import { useTheme } from 'react-jss';

import { RemoveCircle } from 'components/CustomIcons';
import { ColConfig } from 'types/datagrid.type';
import Typography from 'components/Typography';
import { useDataGridState } from 'context/dataGrid.context';
import useStyles from './FilterTag.styles';

const FilterTag = ({
  column,
}: {
  column: ColConfig,
}) => {
  const { setFilter, getActiveFilters, removeFilter } = useDataGridState();
  const theme = useTheme();
  const classes = useStyles(theme);

  const handleAdd = (event: React.MouseEvent, filterTag: string) => {
    event.preventDefault();
    setFilter(
      column.dataKey,
      filterTag,
      column.filterFn,
    );
  };

  const handleRemove = (event: React.MouseEvent) => {
    event.preventDefault();
    removeFilter(column.dataKey);
  };

  const activeFilters = getActiveFilters();
  const currentTagFilter = activeFilters.find(
    (activeFilter) => activeFilter.dataKey === column.dataKey,
  );

  const activeTag = (
    filterTag: string,
  ) => (
    <a className={clsx(classes.tag, classes.activeTag)} href="#" onClick={(event) => handleRemove(event)} key={`filter-${column.dataKey}-${filterTag}`}>
      {filterTag}
      <RemoveCircle className={classes.removeIcon} />
    </a>
  );

  const inactiveTag = (
    filterTag: string,
  ) => (
    <a className={classes.tag} href="#" onClick={(event) => handleAdd(event, filterTag)} key={`filter-${column.dataKey}-${filterTag}`}>
      {filterTag}
    </a>
  );

  return (
    <div className={classes.wrapper}>
      <div key={`filter-col-${column.dataKey}`}>
        <Typography variant="title" tag="h3">{`Filter by ${column.label}:`}</Typography>
        {column.filterTags.map((filterTag) => {
          if (filterTag === currentTagFilter?.filterValue) {
            return (
              activeTag(filterTag)
            );
          }
          return (
            inactiveTag(filterTag)
          );
        })}
      </div>
    </div>
  );
};

export default FilterTag;
