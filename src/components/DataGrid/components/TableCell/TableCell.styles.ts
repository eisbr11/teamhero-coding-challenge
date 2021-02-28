import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  cellBase: {
    display: 'inline-block',
    width: '100%',
  },
  head: {
    fontWeight: 700,
    padding: 8,
    textTransform: 'uppercase',
  },
  body: {
    color: (theme) => theme.colorGrayDark,
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    padding: 8,
  },
  leftAlign: {
    textAlign: 'left',
  },
  rightAlign: {
    textAlign: 'right',
  },
  centerAlign: {
    textAlign: 'center',
  },
});

export default useStyles;
