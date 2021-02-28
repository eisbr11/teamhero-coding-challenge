import React from 'react';
import clsx from 'clsx';
import { useTheme } from 'react-jss';

import { TableCellProps } from './TableCell.types';
import useStyles from './TableCell.styles';

const TableCell = ({
  tag = 'span',
  variant = 'body',
  className,
  children,
  align,
  ...props
}: TableCellProps) => {
  const CustomTag = tag as keyof JSX.IntrinsicElements;

  const theme = useTheme();
  const classes = useStyles(theme);

  /* eslint-disable react/jsx-props-no-spreading */
  return (
    <CustomTag
      className={
        clsx(
          className,
          classes.cellBase,
          classes[variant],
          (align === 'right') && classes.rightAlign,
          (align === 'center') && classes.centerAlign,
          (align === 'left') && classes.leftAlign,
        )
      }
      {...props}
    >
      {children}
    </CustomTag>
  );
  /* eslint-enable react/jsx-props-no-spreading */
};

export default TableCell;
