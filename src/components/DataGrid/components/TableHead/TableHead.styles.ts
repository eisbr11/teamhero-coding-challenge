import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  row: {
    display: 'flex',
    flexDirection: 'row',
    padding: [8, 0],
    backgroundColor: (theme) => (theme.colorGrayLight),
  },
  headCol: {
    flex: 1,
    minWidth: 150,
  },
});

export default useStyles;
