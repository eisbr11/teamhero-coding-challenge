import { ActiveSort, ColConfig, SortDirection } from 'types/datagrid.type';
import { CaretDown, CaretUp } from 'components/CustomIcons';
import useStyles from './SortIndicator.styles';

const renderSvg = (direction: SortDirection) => {
  switch (direction) {
    case 'DESC':
      return <CaretUp />;
    case 'ASC':
      return <CaretDown />;
    case 'NONE':
    default:
      return null;
  }
};

const SortIndicator = ({
  column,
  activeSort,
}: {
  column: ColConfig,
  activeSort: ActiveSort,
}) => {
  const classes = useStyles();

  if (column.dataKey === activeSort.dataKey) {
    return (
      <span className={classes.indicator}>
        {renderSvg(activeSort.direction)}
      </span>
    );
  }
  return null;
};

export default SortIndicator;
