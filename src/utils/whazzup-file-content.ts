import { formatLastUpdateDate } from './format-last-update-date'

export class WhazzupFileContent {
    public connectedClients: number
    public lastUpdate: Date
    public clientsData: string[]

    constructor(generalInfo: string[], clientsData: string[]) {
        this.connectedClients = parseInt(generalInfo[3].substr(generalInfo[3].indexOf('=') + 1), 10)
        this.clientsData = clientsData
        this.lastUpdate = formatLastUpdateDate(generalInfo[2].substr(generalInfo[2].indexOf('=') + 2))
    }
}
