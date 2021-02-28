import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  pageWrap: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    maxHeight: '100vh',
    background: (theme) => theme.colorGrayLight,
  },
  main: {
    display: 'flex',
    flex: '1 1 100%',
    margin: [0, 16],
    flexDirection: 'column',
    overflow: 'scroll',
  },
});

export default useStyles;
