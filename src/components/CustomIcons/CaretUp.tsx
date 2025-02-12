const CaretUp = ({
  className,
}: {
  className?: string,
}) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" />
  </svg>
);

export default CaretUp;

CaretUp.defaultProps = {
  className: '',
};
