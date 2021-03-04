import React from 'react';
import { ThemeProvider } from 'react-jss';

import { mount } from 'enzyme';
import teamHeroTheme from 'themes/teamHero.theme';
import AvatarImage from '../index';

describe('dataGrid - Component', () => {
  it('should render correctly if there is no content', () => {
    const avatarImageComponent = mount(
      <ThemeProvider theme={teamHeroTheme}>
        <AvatarImage src="exampleUrl" alt="ALT-TEXT" />
      </ThemeProvider>,
    );

    expect(avatarImageComponent).toMatchSnapshot();
  });
});
