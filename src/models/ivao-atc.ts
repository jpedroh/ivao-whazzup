import { ATCRating, Client, Facilty } from '../utils/enums'
import { IvaoClient } from './ivao-client'

export class IvaoATC extends IvaoClient {
  public clientType: Client
  public frequency: string
  public facilityType: Facilty
  public rating: ATCRating

  constructor(clientData: string[]) {
    super(clientData)
    this.callsign = clientData[0]
    this.vid = parseInt(clientData[1], 10)
    this.name = clientData[2]
    this.connectionTime = parseInt(clientData[37], 10)
    this.softwareName = clientData[38]
    this.softwareVersion = clientData[39]
    this.clientType = clientData[3] as Client
    this.frequency = clientData[4]
    this.facilityType = parseInt(clientData[18], 10)
    this.rating = parseInt(clientData[41], 10)
  }

}
