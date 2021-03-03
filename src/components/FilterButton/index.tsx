import { AddCircle } from 'components/CustomIcons';
import useStyles from './FilterButton.styles';

const FilterButton = ({
  onClick,
}: {
  onClick: () => void,
}) => {
  const classes = useStyles();
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <button type="submit" className={classes.button} onClick={onClick}>
      <AddCircle className={classes.filterButtonIcon} />
    </button>
  );
};

export default FilterButton;
