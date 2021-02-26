import React from 'react';
import { ThemeProvider } from 'react-jss';

import ContactsScreen from 'screens/Contacts.screen';
import useStyles from 'styles/global.styles';
import teamHeroTheme from 'themes/teamHero.theme';
import ContactsDataContextProvider from 'context/ContactsDataContextProvider.component';

function App() {
  useStyles();
  return (
    <ContactsDataContextProvider>
      <ThemeProvider theme={teamHeroTheme}>
        <ContactsScreen />
      </ThemeProvider>
    </ContactsDataContextProvider>
  );
}

export default App;
