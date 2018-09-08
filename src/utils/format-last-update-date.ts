/**
 * Convert the date of the Whazzup File to a JavaScript Date instance
 * @param lastUpdateString - String containing the date to be converted.
 */
export function formatLastUpdateDate(lastUpdateString: string): Date {
    const lastUpdateYear = parseInt(lastUpdateString.substr(0, 4), 10)
    const lastUpdateMonth = parseInt(lastUpdateString.substr(2, 2), 10) - 1
    const lastUpdateDay = parseInt(lastUpdateString.substr(4, 2), 10)
    const lastUpdateHour = parseInt(lastUpdateString.substr(6, 2), 10)
    const lastUpdateMinute = parseInt(lastUpdateString.substr(8, 2), 10)
    const lastUpdateSecond = parseInt(lastUpdateString.substr(10, 2), 10)
    return new Date(lastUpdateYear, lastUpdateMonth, lastUpdateDay, lastUpdateHour, lastUpdateMinute, lastUpdateSecond)
}
