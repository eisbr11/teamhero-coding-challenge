import { ActiveFilter, ActiveSort, Row } from 'types/datagrid.type';
import { Skill } from 'types/contacts.type';
import {
  filterByString,
  filterByTags,
  uniqueFilters,
  compareStrings,
  updateSortDirectionFromOldValue,
  sortRows,
} from '../dataGrid.helper';

describe('dataGrid - Helper Functions', () => {
  describe('uniqueFilters Function', () => {
    it('should make filters in array unique by data key', () => {
      const activeFilters: ActiveFilter[] = [
        {
          dataKey: 'key1',
          filterFn: filterByTags,
          filterValue: 'filterValue1',
        },
        {
          dataKey: 'key1',
          filterFn: filterByString,
          filterValue: 'filterValue2',
        },
      ];
      expect(activeFilters.length).toBe(2);

      const result1 = uniqueFilters(activeFilters, 'filterValue');

      expect(result1.length).toBe(2);

      const result2 = uniqueFilters(activeFilters, 'dataKey');

      expect(result2.length).toBe(1);
    });
  });

  describe('filterByStrings', () => {
    it('should return false if filterValue is not in cellValue', () => {
      expect(
        filterByString('Hallo', 'ding'),
      ).toBe(false);
    });
    it('should return true if filterValue is in cellValue', () => {
      expect(
        filterByString('Hallo', 'ding'),
      ).toBe(false);
    });
    it('should return true if filterValue is in cellValue, even if only lower and upper cases differ', () => {
      expect(
        filterByString('Hallo', 'hallo'),
      ).toBe(true);
    });
    it('should return true if filterValue is an empty string', () => {
      expect(
        filterByString('Hallo', ''),
      ).toBe(true);
    });
  });

  describe('filterByTags', () => {
    const skills1: Skill[] = [
      {
        id: 'id1',
        type: 'skill1',
      },
      {
        id: 'id2',
        type: 'skill2',
      },
    ];
    it('should return true if filter value is an empty string', () => {
      expect(
        filterByTags(skills1, ''),
      ).toBe(true);
    });

    it('should return true if filter value is in skills array', () => {
      expect(
        filterByTags(skills1, 'skill2'),
      ).toBe(true);
    });

    it('should return false if filter value is not in skills array', () => {
      expect(
        filterByTags(skills1, 'teststring'),
      ).toBe(false);
    });
  });

  describe('compareStrings', () => {
    it('should compare the strings as expected', () => {
      expect(
        compareStrings('abc', 'abd'),
      ).toBe(-1);

      expect(
        compareStrings('xyz', 'abc'),
      ).toBe(1);

      expect(
        compareStrings('xyz', 'xyz'),
      ).toBe(0);

      expect(
        compareStrings(null, null),
      ).toBe(0);

      expect(
        compareStrings('abc', null),
      ).toBe(0);
    });
  });

  describe('updateSortDirectionFromOldValue', () => {
    it('should rotate trough the sort directions', () => {
      expect(updateSortDirectionFromOldValue('NONE')).toBe('ASC');
      expect(updateSortDirectionFromOldValue('DESC')).toBe('NONE');
      expect(updateSortDirectionFromOldValue('ASC')).toBe('DESC');
    });
  });

  describe('sortRows', () => {
    const flattenRowsToIdString = (sortedRows: Row[]): string => sortedRows.map(
      (sortRow) => sortRow.id.toString(),
    ).toString();

    it('should sort rows according to the active Sort params', () => {
      const rows: Row[] = [
        {
          id: 1,
          someKey: 'abc',
        },
        {
          id: 3,
          someKey: 'def',
        },
        {
          id: 2,
          someKey: 'bcd',
        },
      ];

      const ascSort: ActiveSort = {
        dataKey: 'someKey',
        direction: 'ASC',
        sortFn: compareStrings,
      };

      const sortedRowsAsc = sortRows(rows.slice(), ascSort);
      expect(flattenRowsToIdString(sortedRowsAsc)).toBe('1,2,3');

      const descSort: ActiveSort = {
        dataKey: 'someKey',
        direction: 'DESC',
        sortFn: compareStrings,
      };

      const sortedRowsDesc = sortRows(rows.slice(), descSort);
      expect(flattenRowsToIdString(sortedRowsDesc)).toBe('3,2,1');

      const noneSort: ActiveSort = {
        dataKey: 'someKey',
        direction: 'NONE',
        sortFn: compareStrings,
      };

      const sortedRowsNone = sortRows(rows.slice(), noneSort);
      expect(flattenRowsToIdString(sortedRowsNone)).toBe('1,3,2');
    });
  });
});
