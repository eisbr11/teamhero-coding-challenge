import React from 'react';
import { ThemeProvider } from 'react-jss';

import ContactsScreen from 'screens/Contacts.screen';
import useStyles from 'styles/global.styles';
import teamHeroTheme from 'themes/teamHero.theme';

function App() {
  useStyles();
  return (
    <ThemeProvider theme={teamHeroTheme}>
      <ContactsScreen />
    </ThemeProvider>
  );
}

export default App;
