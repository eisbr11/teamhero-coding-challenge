import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'react-jss';
import toJSON from 'enzyme-to-json';

import createGridConfig from 'helper/GridConfig';
import { ColConfig, GridConfig, Row } from 'types/datagrid.type';
import createColConfig from 'helper/ColConfig';
import teamHeroTheme from 'themes/teamHero.theme';
import DataGrid from '../index';

describe('dataGrid - Component', () => {
  const exampleRows: Row[] = [
    {
      someKey: 'abc',
      someOtherKey: 'value1',
    },
    {
      someKey: 'def',
      someOtherKey: 'value2',
    },
  ];

  const exampleCols: ColConfig[] = [
    createColConfig({
      dataKey: 'someKey',
      label: 'A LABEL',
    }),
    createColConfig({
      dataKey: 'someOtherKey',
      label: 'A DIFFERENT LABEL',
      width: 200,
      flexGrow: 1,
      align: 'right',
      sortable: true,
      filterable: true,
    }),
  ];

  const exampleGridConfig: GridConfig = createGridConfig({});

  it('should render correctly if there is no content', () => {
    const dataGrid = mount(
      <ThemeProvider theme={teamHeroTheme}>
        <DataGrid
          rows={[]}
          columns={[]}
          gridConfig={
            createGridConfig({
              hideHead: false,
              showFilters: true,
            })
          }
        />
      </ThemeProvider>,
    );
    expect(dataGrid).toMatchSnapshot();
  });

  it('should render with rows and cols', () => {
    const dataGrid = mount(
      <ThemeProvider theme={teamHeroTheme}>
        <DataGrid
          rows={exampleRows}
          columns={exampleCols}
          gridConfig={exampleGridConfig}
        />
      </ThemeProvider>,
    );

    expect(dataGrid).toMatchSnapshot();
  });

  it('should render with settings no header but filters', () => {
    const gridConfigNoFilterNoHeader = createGridConfig({
      hideHead: true,
      showFilters: true,
    });

    const dataGrid = mount(
      <ThemeProvider theme={teamHeroTheme}>
        <DataGrid
          rows={exampleRows}
          columns={exampleCols}
          gridConfig={gridConfigNoFilterNoHeader}
        />
      </ThemeProvider>,
    );

    expect(dataGrid).toMatchSnapshot();
  });
});
