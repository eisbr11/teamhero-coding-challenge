import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  wrapper: {
    display: 'inline-block',
    width: '100%',
    padding: [8, 0],
    marginBottom: 8,
  },
  tag: {
    display: 'inline-flex',
    alignItems: 'center',
    border: (theme) => `2px solid ${theme.colorHighlight}`,
    marginRight: 4,
    padding: 4,
    background: (theme) => theme.colorHighlight,
    borderRadius: 5,
    color: (theme) => theme.colorBlack,
  },
  activeTag: {
    background: (theme) => theme.colorHighlight,
    fontWeight: 700,
    borderColor: (theme) => theme.colorPrimary,
  },
  removeIcon: {
    display: 'inline',
    height: 20,
    width: 20,
    marginLeft: 4,
  },
});

export default useStyles;
