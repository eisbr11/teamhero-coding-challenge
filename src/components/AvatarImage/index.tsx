import { useTheme } from 'react-jss';

import useStyles from './AvatarImage.styles';

const AvatarImage = ({
  src,
  alt,
}: {
  src: string,
  alt: string,
}) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <div className={classes.imageWrap}>
      <img src={src} alt={alt} className={classes.image} />
    </div>
  );
};

export default AvatarImage;
