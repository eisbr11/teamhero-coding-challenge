import React from 'react';
import { shallow } from 'enzyme';

import { ThemeProvider } from 'react-jss';
import teamHeroTheme from 'themes/teamHero.theme';
import Footer from './index';

describe('Footer Component', () => {
  it('should render correctly', () => {
    const testText = 'Some Test Text';
    const wrapper = shallow(
      <ThemeProvider theme={teamHeroTheme}>
        <Footer>{testText}</Footer>
      </ThemeProvider>,
    );

    expect(wrapper.length).toBe(1);
  });
});
