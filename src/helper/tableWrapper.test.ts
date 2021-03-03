import createColConfig from './ColConfig';
import calculateMinWidth from './tableWrapper.helper';

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
          dataKey: 'avatar',
          label: '',
          width: 70,
        }),
        createColConfig({
          dataKey: 'avatar',
          label: '',
          width: 123,
        }),
        createColConfig({
          dataKey: 'avatar',
          label: '',
          width: 27,
        }),
      ];
      expect(calculateMinWidth(columns2)).toBe(220);

      expect(calculateMinWidth([])).toBe(0);
    });
  });
});
