import React, { useState } from 'react';

import { ColConfig } from 'types/datagrid.type';
import { useDataGridState } from 'context/dataGrid.context';
import Typography from 'components/Typography';
import TextField from 'components/TextField';
import FilterButton from 'components/FilterButton';
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
      <Typography variant="title" tag="h3">{`Filter by ${column.label}:`}</Typography>
      <div className={classes.inputWrapper}>
        <TextField type="text" placeholder={column.label} value={textInput} onChange={handleInputChange} />
        <FilterButton onClick={onSubmit} />
      </div>
    </div>
  );
};

export default FilterText;
