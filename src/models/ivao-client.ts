import { Client } from '../utils/enums'

export class IvaoClient {
    public callsign: string
    public vid: number
    public name: string
    public clientType: Client
    public latitiude: number
    public longtitude: number
    public altitude: number
    public connectionTime: number
    public softwareName: string
    public softwareVersion: string

    constructor(clientData: string[]) {
        this.callsign = clientData[0]
        this.vid = parseInt(clientData[1], 10)
        this.name = clientData[2]
        this.connectionTime = parseInt(clientData[37], 10)
        this.softwareName = clientData[38]
        this.softwareVersion = clientData[39]
        this.clientType = clientData[3] as Client
        this.latitiude = parseFloat(clientData[5])
        this.longtitude = parseFloat(clientData[6])
        this.altitude = parseInt(clientData[7], 10)
    }

}
