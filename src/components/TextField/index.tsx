import React from 'react';
import { useTheme } from 'react-jss';

import useStyles from './TextField.styles';

const TextField = (
  props: React.ClassAttributes<HTMLInputElement> & React.InputHTMLAttributes<HTMLInputElement>,
) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <input className={classes.input} {...props} />
  );
};

export default TextField;
