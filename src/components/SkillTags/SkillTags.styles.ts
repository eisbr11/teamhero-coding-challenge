import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  skillWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  skill: {
    color: (theme) => theme.colorGrayDark,
    backgroundColor: (theme) => theme.colorHighlight,
    padding: 4,
    borderRadius: 6,
    margin: [0, 8, 8, 0],
    fontSize: 14,
  },
});

export default useStyles;
