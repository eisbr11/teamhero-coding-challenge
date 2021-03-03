const AddCircle = ({
  className = '',
}: {
  className?: string,
}) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
  </svg>
);

export default AddCircle;

AddCircle.defaultProps = {
  className: '',
};
