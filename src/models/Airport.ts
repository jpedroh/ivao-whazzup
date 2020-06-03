export default class Airport {
  /**
   * ICAO code of the airport.
   */
  public readonly icao: string;

  /**
   * ATIS of the airport.
   */
  public readonly atis: string;

  public constructor(icao: string, atis: string) {
    this.icao = icao;
    this.atis = atis;
  }
}
