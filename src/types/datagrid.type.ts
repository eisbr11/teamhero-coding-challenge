import { Skill } from './contacts.type';

/**
 * Alignment for Cell content.
 */
export declare type Alignment = 'left' | 'right' | 'center';

export type DataType = 'string' | 'tags' | 'boolean' | 'number' | 'hidden';

export type Row = {
  [key: string]: number | string | Skill[];
};

export interface GridConfig {
  /**
   * if true, the head column of the grid is hidden
   */
  hideHead: boolean;
};

export interface ColConfig {
  /**
   * the key of the field, used to map to the row data
   */
  dataKey: string;
  /**
   * the title of the column, shown in the column header
   */
  label: string;
  /**
   * function that returns a React Component for showing the data
   * @param row
   * @param dataKey
   */
  valueGetter: (row: Row, dataKey: string) => React.ReactNode;
  /**
   * the width of the cell
   */
  width?: number;
  /**
   * if true, the column can be sorted
   * @default false
   */
  sortable?: boolean;
  /**
   * the compare function, for sorting the column
   */
  sortFn?: CompareFn;
  /**
   * the flex grow value for the column
   */
  flexGrow?: number;
  /**
   * if true, the column will be hidden
   */
  hide?: boolean;
  /**
   * horizontal alignment of the cell
   */
  align?: Alignment;
}

/**
 * Compare Function for sorting
 */
export declare type CompareFn = (
  val1: CellContent,
  val2: CellContent,
) => number;

/**
 * The cell value type.
 */
export declare type CellContent = string | number | boolean | null | undefined | object;
