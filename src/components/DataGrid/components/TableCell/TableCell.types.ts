import { Alignment } from 'types/datagrid.type';

export type Tag =
  | 'h1'
  | 'h2'
  | 'p'
  | 'span'
  | 'div';

export type Variant =
  | 'head'
  | 'body';

export interface TableCellProps {
  /**
   * The type of tag to be used for the component
   * @default p
   */
  tag?: Tag,
  /**
   * The kind of styles to add to the component
   * @default body
   */
  variant?: Variant;
  /**
   * The content of the component
   */
  children?: React.ReactNode,
  /**
   * additional classnames
   */
  className?: string;

  /**
   * how the content of the cell should align
   */
  align?: Alignment;

  /**
   * if this is true, the cell can grow
   * @default 0
   */
  grow?: number;

  /**
   * width of the cell
   * @default 100
   */
  width?: number;
}
