import React from 'react';
import { ThemeProvider } from 'react-jss';

import { mount } from 'enzyme';
import teamHeroTheme from 'themes/teamHero.theme';
import { ActiveSort, ColConfig } from 'types/datagrid.type';
import createColConfig from 'helper/ColConfig';
import { compareStrings } from 'helper/dataGrid.helper';
import SortIndicator from '../index';

describe('Sort Indicator', () => {
  const column: ColConfig = createColConfig({
    dataKey: 'someOtherKey',
    label: 'LABEL',
    sortable: true,
  });

  it('should render correctly with sort Ascending', () => {
    const activeSortAsc:ActiveSort = {
      direction: 'ASC',
      sortFn: compareStrings,
      dataKey: 'someOtherKey',
    };

    const sortIndicator = mount(
      <ThemeProvider theme={teamHeroTheme}>
        <SortIndicator column={column} activeSort={activeSortAsc} />
      </ThemeProvider>,
    );

    expect(sortIndicator).toMatchSnapshot();
  });

  it('should render correctly with sort Ascending', () => {
    const activeSortDesc:ActiveSort = {
      direction: 'DESC',
      sortFn: compareStrings,
      dataKey: 'someOtherKey',
    };

    const sortIndicator = mount(
      <ThemeProvider theme={teamHeroTheme}>
        <SortIndicator column={column} activeSort={activeSortDesc} />
      </ThemeProvider>,
    );

    expect(sortIndicator).toMatchSnapshot();
  });

  it('should render correctly with None sort', () => {
    const activeSortNone:ActiveSort = {
      direction: 'NONE',
      sortFn: compareStrings,
      dataKey: 'someOtherKey',
    };

    const sortIndicator = mount(
      <ThemeProvider theme={teamHeroTheme}>
        <SortIndicator column={column} activeSort={activeSortNone} />
      </ThemeProvider>,
    );

    expect(sortIndicator).toMatchSnapshot();
  });

  it('should render correctly with no active sort associated', () => {
    const activeSortNonAssociated:ActiveSort = {
      direction: 'ASC',
      sortFn: compareStrings,
      dataKey: 'different',
    };

    const sortIndicator = mount(
      <ThemeProvider theme={teamHeroTheme}>
        <SortIndicator column={column} activeSort={activeSortNonAssociated} />
      </ThemeProvider>,
    );

    expect(sortIndicator).toMatchSnapshot();
  });
});
