import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  input: {
    font: 'inherit',
    color: 'currentColor',
    width: '100%',
    height: 24,
    margin: 0,
    display: 'block',
    padding: 16,
    minWidth: 0,
    background: (theme) => theme.colorWhite,
    border: (theme) => `3px solid ${theme.colorGrayDark}`,
    borderRadius: 5,

    '&:focus': {
      outlineColor: (theme) => theme.colorPrimary,
    },
  },
});

export default useStyles;
