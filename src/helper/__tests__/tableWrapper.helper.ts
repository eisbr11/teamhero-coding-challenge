import createColConfig from '../ColConfig';
import calculateMinWidth from '../tableWrapper.helper';

describe('tableWrapper - Helper Functions', () => {
  describe('min Width calculator', () => {
    it('should calculate the correct width with one ColConfig', () => {
      const columns1 = [
        createColConfig({
          dataKey: 'avatar',
          label: '',
          width: 70,
          sortable: false,
        }),
      ];

      expect(calculateMinWidth(columns1)).toBe(70);

      const columns2 = [
        createColConfig({
          dataKey: 'key1',
          label: '',
          width: 70,
        }),
        createColConfig({
          dataKey: 'key2',
          label: '',
          width: 80,
          hide: true,
        }),
        createColConfig({
          dataKey: 'key3',
          label: '',
          width: 123,
          hide: false,
        }),
        createColConfig({
          dataKey: 'key4',
          label: '',
          width: 27,
        }),
      ];
      expect(calculateMinWidth(columns2)).toBe(220);

      expect(calculateMinWidth([])).toBe(0);
    });
  });
});
