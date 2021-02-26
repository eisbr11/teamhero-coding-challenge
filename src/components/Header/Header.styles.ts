import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  header: {
    display: 'flex',
    padding: 16,
    justifyContent: 'center',
    background: (theme) => theme.colorWhite,
    boxShadow: '0 0 10px 0 rgb(0 0 0 / 40%)',
    zIndex: 5,
  },
  icon: {
    height: 40,
  },
});

export default useStyles;
