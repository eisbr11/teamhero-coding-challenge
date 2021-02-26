import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  footer: {
    display: 'flex',
    color: (theme) => theme.colorWhite,
    background: (theme) => theme.colorPrimary,
    padding: [24, 32],
    justifyContent: 'center',
    textAlign: 'center',
  },
});

export default useStyles;
