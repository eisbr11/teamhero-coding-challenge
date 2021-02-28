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
    borderBottom: (theme) => (`1px solid ${theme.colorGrayLight}`),
    alignItems: 'center',
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
