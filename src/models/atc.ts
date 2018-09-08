import { ATCRating, Client, Facilty } from '../utils/enums'

export class WhazzupATC {
  public vid: number
  public callsign: string
  public name: string
  public connectionTime: number
  public softwareName: string
  public softwareVersion: string
  public clientType: Client
  public frequency: string
  public facilityType: Facilty
  public rating: ATCRating

  constructor(data: string[]) {
    this.callsign = data[0]
    this.vid = parseInt(data[1], 10)
    this.name = data[2]
    this.connectionTime = parseInt(data[37], 10)
    this.softwareName = data[38]
    this.softwareVersion = data[39]
    this.clientType = data[3] as Client
    this.frequency = data[4]
    this.facilityType = parseInt(data[18], 10)
    this.rating = parseInt(data[41], 10)
  }

}
