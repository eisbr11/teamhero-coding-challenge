import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  pageWrap: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    maxHeight: '100vh',
    background: (theme) => theme.colorWhite,
  },
  main: {
    display: 'flex',
    flex: '1 1 100%',
    padding: [0, 32],
    background: (theme) => theme.colorWhite,
    flexDirection: 'column',
    overflow: 'scroll',
  },
});

export default useStyles;
