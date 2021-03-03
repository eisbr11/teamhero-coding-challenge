export type Tag =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'p'
  | 'span'
  | 'div';

export type Variant =
  | 'h1'
  | 'h2'
  | 'title'
  | 'subtitle'
  | 'body';

export interface TypographyProps {
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
  children: React.ReactNode,

  className?: string;
}
