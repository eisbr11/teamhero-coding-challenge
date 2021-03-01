import React, { useState } from 'react';

import { ColConfig } from 'types/datagrid.type';
import { useDataGridState } from 'context/dataGrid.context';
import useStyles from './FilterText.styles';

const FilterText = ({
  column,
}: {
  column: ColConfig,
}) => {
  const { setFilter } = useDataGridState();
  const classes = useStyles();

  const [textInput, setTextInput] = useState('');

  const handleInputChange = (event: { target: any; }) => {
    const { target } = event;
    const { value } = target;

    setTextInput(value);
  };

  const onSubmit = () => {
    setFilter(
      column.dataKey,
      textInput,
      column.filterFn,
    );
  };

  return (
    <div className={classes.wrapper}>
      <span>{`${column.label}:`}</span>
      <input type="text" placeholder="filter" value={textInput} onChange={handleInputChange} />
      <button onClick={onSubmit} type="submit">Filtern</button>
    </div>
  );
};

export default FilterText;
