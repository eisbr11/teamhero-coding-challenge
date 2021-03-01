import React from 'react';

import { ColConfig } from 'types/datagrid.type';
import useStyles from './FilterTag.styles';

const FilterTag = ({
  column,
}: {
  column: ColConfig,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <div key={`filter-col-${column.dataKey}`}>
        <span>{`${column.label}:`}</span>
        <select>
          <option value="skill1">skill1</option>
        </select>
        <button type="submit">Filtern</button>
      </div>
    </div>
  );
};

export default FilterTag;
