import { ATCRating, Facilty } from '../utils/enums'
import { IvaoClient } from './ivao-client'

export class IvaoATC extends IvaoClient {
  public frequency: string
  public facilityType: Facilty
  public rating: ATCRating

  constructor(clientData: string[]) {
    super(clientData)
    this.frequency = clientData[4]
    this.facilityType = parseInt(clientData[18], 10)
    this.rating = parseInt(clientData[41], 10)
  }

}
