import { WhazzupATC } from '../models/atc'
import { WhazzupPilot } from '../models/pilot'
import { WhazzupFileContent } from './whazzup-file-content'
import { IWhazzupRequestData } from './whazzup-request-data'

export class WhazzupRequestResult {
    public data: IWhazzupRequestData
    public pilots: WhazzupPilot[]
    public atcs: WhazzupATC[]

    constructor(fileContent: WhazzupFileContent, retrievedPilots: WhazzupPilot[], retrievedATCs: WhazzupATC[],
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
