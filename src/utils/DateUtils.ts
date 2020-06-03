export default class DateUtils {
  public static dateFromWhazzupString(dateString: string): Date {
    const year = parseInt(dateString.substr(0, 4));
    const month = parseInt(dateString.substr(4, 2)) - 1;
    const day = parseInt(dateString.substr(6, 2));
    const hour = parseInt(dateString.substr(8, 2));
    const minute = parseInt(dateString.substr(10, 2));
    const second = parseInt(dateString.substr(12, 2));

    return new Date(Date.UTC(year, month, day, hour, minute, second));
  }
}
