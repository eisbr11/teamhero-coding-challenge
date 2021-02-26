import { useTheme } from 'react-jss';

import Footer from 'components/Footer';
import Header from 'components/Header';
import useStyles from './Layout.styles';
import { LayoutComponentProps } from './Layout.types';

/**
 * Layout component
 *
 * @param {(*)} children
 * @constructor
 */
const Layout = ({ children }: LayoutComponentProps) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <div className={classes.pageWrap}>
      <Header />
      <main className={classes.main}>
        {children}
      </main>
      <Footer>
        Coding Challenge by Felix Schliemann
      </Footer>
    </div>
  );
};

export default Layout;
