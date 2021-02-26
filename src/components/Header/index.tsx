import { useTheme } from 'react-jss';

import TeamHeroIcon from 'components/TeamHeroIcon';
import useStyles from './Header.styles';

/**
 * Header component
 *
 * @returns {JSX}
 * @constructor
 */
const Header = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <header className={classes.header}>
      <TeamHeroIcon className={classes.icon} />
    </header>
  );
};

export default Header;
