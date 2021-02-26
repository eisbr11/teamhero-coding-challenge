import { useTheme } from 'react-jss';

import useStyles from './Footer.styles';

/**
 * Footer component
 *
 * @param {(*)} children
 * @returns {JSX}
 * @constructor
 */
const Footer = ({
  children,
}: {
  children: React.ReactNode,
}) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <footer className={classes.footer}>
      {children}
    </footer>
  );
};

export default Footer;
