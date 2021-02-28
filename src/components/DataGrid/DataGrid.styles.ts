import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  wrapper: {
    display: 'flex',
    position: 'relative',
    flexGrow: 1,
    flexDirection: 'column',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  bodyCol: {
    flex: 1,
    minWidth: 150,
  },
  bodyWrapper: {
    flex: 1,
  },
});

export default useStyles;
