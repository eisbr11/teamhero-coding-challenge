const CaretDown = ({
  className = '',
}: {
  className?: string,
}) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
  </svg>
);

export default CaretDown;

CaretDown.defaultProps = {
  className: '',
};
