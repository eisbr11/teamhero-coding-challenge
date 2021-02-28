import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 2,
    borderRadius: 5,
    background: (theme) => (theme.colorWhite),
  },
  bodyWrapper: {
    flex: 1,
  },
});

export default useStyles;
