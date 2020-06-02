import TotalConnections from './TotalConnectionsInformation';

export default class GeneralInformation {
  /**
   * The version of Whazzup File.
   * You can use this to perform checks, however it will only be increment for major changes.
   */
  public readonly version: number;

  /**
   * Remaining minutes until Whazzup File is updated by the server.
   */
  public readonly minutesUntilReload: number;

  /**
   * The last date and time in which the Whazzup File has been updated.
   */
  public readonly lastUpdatedAt: Date;

  /**
   * Defines the total of connections listed by the Whazzup File.
   */
  public readonly totalConnections: TotalConnections;

  public constructor(
    version: number,
    minutesUntilReload: number,
    lastUpdatedAt: Date,
    totalConnections: TotalConnections,
  ) {
    this.version = version;
    this.minutesUntilReload = minutesUntilReload;
    this.lastUpdatedAt = lastUpdatedAt;
    this.totalConnections = totalConnections;
  }
}
