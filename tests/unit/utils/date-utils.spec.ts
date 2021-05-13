import DateUtils from '../../../src/utils/DateUtils';

describe('Date Utils', () => {
  describe('Given valid Whazzup Date String was passed', () => {
    const dateString = '20200602195932';

    test('Return value should be a Date instance with its value', () => {
      const dateObject = new Date(Date.UTC(2020, 5, 2, 19, 59, 32));

      const date = DateUtils.dateFromWhazzupString(dateString);
      expect(date).toEqual(dateObject);
    });
  });
});
