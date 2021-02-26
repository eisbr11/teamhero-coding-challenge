import Typography from 'components/Typography';
import useStyles from './Loading.styles';

/**
 * Loading component
 *
 * @returns {JSX}
 * @constructor
 */
const Loading = () => {
  const classes = useStyles();
  return (
    <div className={classes.loadingWrapper}>
      <Typography>FETCHING DATA</Typography>
    </div>
  );
};

export default Loading;
