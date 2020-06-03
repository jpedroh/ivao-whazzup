import Client from './Client';
import FacilityType from '../enum/FacilityType';
import Atis from '../vos/Atis';

export default class Atc extends Client {
  /**
   * Frequency currently in use by the client.
   */
  public readonly frequency: string;

  /**
   * The facility provided by the ATC.
   */
  public readonly facilityType: FacilityType;

  /**
   * The range of the ATC radar.
   */
  public readonly visualRange: number;

  /**
   * The ATIS message provided by the ATC.
   * @deprecated
   */
  public readonly atis: Atis;

  public constructor(
    client: Client,
    frequency: string,
    facilityType: FacilityType,
    visualRange: number,
    atis: Atis,
  ) {
    super(client.callsign, client.member, client.position, client.connection, client.software);
    this.frequency = frequency;
    this.facilityType = facilityType;
    this.visualRange = visualRange;
    this.atis = atis;
  }
}
