import { IvaoATC } from '../models/ivao-atc'
import { IvaoPilot } from '../models/ivao-pilot'
import { WhazzupFileContent } from './whazzup-file-content'
import { IWhazzupRequestData } from './whazzup-request-data'

export class WhazzupRequestResult {
    public data: IWhazzupRequestData
    public pilots: IvaoPilot[]
    public atcs: IvaoATC[]

    constructor(fileContent: WhazzupFileContent, retrievedPilots: IvaoPilot[], retrievedATCs: IvaoATC[],
                retrievedClientsNumber: number) {
        this.data = {
            connectedClients: fileContent.connectedClients,
            lastUpdate: fileContent.lastUpdate,
            retrievedClients: retrievedClientsNumber,
        } as IWhazzupRequestData
        this.pilots = retrievedPilots
        this.atcs = retrievedATCs
    }
}
