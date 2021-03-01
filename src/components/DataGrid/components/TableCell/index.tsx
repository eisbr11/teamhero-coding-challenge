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
  grow = 0,
  width = 100,
  onClick = () => {},
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
      style={{
        flexBasis: width,
        flexGrow: grow ? 1 : 0,
        flexShrink: 0,
      }}
      onClick={onClick}
      {...props}
    >
      {children}
    </CustomTag>
  );
  /* eslint-enable react/jsx-props-no-spreading */
};

export default TableCell;
