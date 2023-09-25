import { crmFormatRelative, formatDate, formatDateWithHours } from './date';

describe('Date', () => {
  describe('crmFormatRelative', () => {
    it('should return "Today" when the date is today', () => {
      const date = new Date('2020-01-01T00:00:00');
      const baseDate = new Date('2020-01-01T00:00:00');
      const result = crmFormatRelative(date, baseDate);
      expect(result).toBe('Hoje');
    });

    it('should return "Yesterday" when the date is yesterday', () => {
      const date = new Date('2020-01-01T00:00:00');
      const baseDate = new Date('2020-01-02T00:00:00');
      const result = crmFormatRelative(date, baseDate);
      expect(result).toBe('01/01/2020');
    });

    it('should return "Tomorrow" when the date is tomorrow', () => {
      const date = new Date('2020-01-02T00:00:00');
      const baseDate = new Date('2020-01-01T00:00:00');
      const result = crmFormatRelative(date, baseDate);
      expect(result).toBe('Amanhã');
    });

    it('should return the day of the week when the date is within the next 7 days', () => {
      const date = new Date('2020-01-03T00:00:00');
      const baseDate = new Date('2020-01-01T00:00:00');
      const result = crmFormatRelative(date, baseDate);
      expect(result).toBe('Sexta');
    });
  });

  describe('formatDate', () => {
    it('should return the date formatted with the default format', () => {
      const date = new Date('2020-01-01T00:00:00');
      const result = formatDate(date);
      expect(result).toBe('01/01/2020');
    });
  });

  describe('formatDateWithHours', () => {
    it('should return the date formatted with the default format', () => {
      const date = new Date('2020-01-01T00:00:00');
      const result = formatDateWithHours(date);
      expect(result).toBe('01/01/2020 ás 00:00');
    });
  });
});
