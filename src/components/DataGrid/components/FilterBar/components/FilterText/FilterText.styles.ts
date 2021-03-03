import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  wrapper: {
    display: 'inline-block',
    width: '100%',
    maxWidth: 300,
    padding: [8, 0],
    marginBottom: 8,
  },
  inputWrapper: {
    display: 'flex',
  },
});

export default useStyles;
