import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  h1: {
    fontSize: 24,
    fontWeight: 700,
  },
  h2: {
    fontSize: 20,
  },
  title: {
    fontSize: 16,
  },
  subtitle: {
    fontSize: 12,
  },
  body: {
    color: (theme) => theme.colorPrimary,
  },
});

export default useStyles;
