import React from 'react';
import clsx from 'clsx';

import { useTheme } from 'react-jss';
import { TypographyProps } from './Typography.types';
import useStyles from './Typography.styles';

/**
 * Typography component
 *
 * @param {Tag} tag
 * @param {Variant} variant
 * @param {string} className
 * @param {*} props
 * @returns {JSX}
 * @constructor
 */
const Typography = ({
  tag = 'p',
  variant = 'body',
  className,
  ...props
}: TypographyProps) => {
  const CustomTag = tag as keyof JSX.IntrinsicElements;
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <CustomTag className={clsx(className, classes[variant])} {...props} />
  );
};

export default Typography;
