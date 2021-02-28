import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  wrapper: {
    display: 'flex',
    position: 'relative',
    flexGrow: 1,
    flexDirection: 'column',
    padding: 8,
  },
  bodyWrapper: {
    flex: 1,
  },
});

export default useStyles;
