import { ATCRating, Client, Facilty } from './enums';

export class IVAOATC {
  private vid: number;
  private callsign: string;
  private name: string;
  private connectionTime: number;
  private softwareName: string;
  private softwareVersion: string;
  private clientType: Client;
  private frequency: string;
  private facilityType: Facilty;
  private rating: ATCRating;

  constructor(data: Array<string>) {
    this.callsign = data[0];
    this.vid = parseInt(data[1]);
    this.name = data[2];
    this.connectionTime = parseInt(data[37]);
    this.softwareName = data[38];
    this.softwareVersion = data[39];
    this.clientType = <Client>data[3];
    this.frequency = data[4];
    this.facilityType = parseInt(data[18]);
    this.rating = parseInt(data[41]);
  }

    /**
     * Getter $vid
     * @return {number}
     */
	public get $vid(): number {
		return this.vid;
	}

    /**
     * Getter $callsign
     * @return {string}
     */
	public get $callsign(): string {
		return this.callsign;
	}

    /**
     * Getter $name
     * @return {string}
     */
	public get $name(): string {
		return this.name;
	}

    /**
     * Getter $connectionTime
     * @return {number}
     */
	public get $connectionTime(): number {
		return this.connectionTime;
	}

    /**
     * Getter $softwareName
     * @return {string}
     */
	public get $softwareName(): string {
		return this.softwareName;
	}

    /**
     * Getter $softwareVersion
     * @return {string}
     */
	public get $softwareVersion(): string {
		return this.softwareVersion;
	}

    /**
     * Getter $clientType
     * @return {Client}
     */
	public get $clientType(): Client {
		return this.clientType;
	}

    /**
     * Getter $frequency
     * @return {string}
     */
	public get $frequency(): string {
		return this.frequency;
	}

    /**
     * Getter $facilityType
     * @return {Facilty}
     */
	public get $facilityType(): Facilty {
		return this.facilityType;
	}

    /**
     * Getter $rating
     * @return {ATCRating}
     */
	public get $rating(): ATCRating {
		return this.rating;
	}

}