import { ATCRating, Client, Facilty } from './enums';

export class IVAOATC {
  public vid: number | null;
  public callsign: string | null;
  public name: string | null;
  public connectionTime: number | null;
  public softwareName: string | null;
  public softwareVersion: string | null;
  public clientType: Client | null;
  public frequency: string | null;
  public facilityType: Facilty | null;
  public rating: ATCRating | null;

  constructor(data: Array<string>) {
    this.callsign = data[0] || null;
    this.vid = parseInt(data[1]) || null;
    this.name = data[2] || null;
    this.connectionTime = parseInt(data[37]) || null;
    this.softwareName = data[38] || null;
    this.softwareVersion = data[39] || null;
    this.clientType = <Client>data[3] || null;
    this.frequency = data[4] || null;
    this.facilityType = parseInt(data[18]) || null;
    this.rating = parseInt(data[41]) || null;
  }

}