import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  row: {
    display: 'flex',
    flexDirection: 'row',
    padding: [8, 0],
    backgroundColor: (theme) => (theme.colorGrayLight),
    position: 'sticky',
    top: 0,
    margin: 2,
  },
});

export default useStyles;
