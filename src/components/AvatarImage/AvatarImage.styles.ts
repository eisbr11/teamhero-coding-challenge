import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  imageWrap: {
    width: 50,
    height: 50,
    borderRadius: 50,
    display: 'flex',
    overflow: 'hidden',
    border: (theme) => `2px solid ${theme.colorGrayDark}`,
  },
  image: {
    width: '100%',
    objectFit: 'cover',
  },
});

export default useStyles;
