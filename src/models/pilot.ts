import { Client, Flight, FlightRules, PilotRating, Simulator } from '../utils/enums'

export class WhazzupPilot {
    public vid: number
    public callsign: string
    public name: string
    public connectionTime: number
    public softwareName: string
    public softwareVersion: string
    public clientType: Client
    public latitiude: number
    public longtitude: number
    public altitude: number
    public groundSpeed: number
    public heading: number
    public onGround: boolean
    public squawk: number
    public rating: PilotRating
    public fullAircraft: string
    public aircraft: string
    public cruisingSpeed: string
    public departure: string
    public cruisingLevel: string
    public arrival: string
    public flightRules: FlightRules
    public departureTime: string
    public enrouteTime: number
    public endurace: number
    public alternate: string
    public remarks: string
    public route: string
    public alternate2: string
    public flightType: Flight
    public pob: number
    public simulator: Simulator

    constructor(data: string[]) {
        this.callsign = data[0]
        this.vid = parseInt(data[1], 10)
        this.name = data[2]
        this.connectionTime = parseInt(data[37], 10)
        this.softwareName = data[38]
        this.softwareVersion = data[39]
        this.clientType = data[3] as Client
        this.latitiude = parseFloat(data[5])
        this.longtitude = parseFloat(data[6])
        this.altitude = parseInt(data[7], 10)
        this.groundSpeed = parseInt(data[8], 10)
        this.heading = parseInt(data[45], 10)
        this.onGround = data[46] === '1'
        this.squawk = parseInt(data[17], 10)
        this.rating = parseInt(data[41], 10)
        this.fullAircraft = data[9]
        this.aircraft = data[9].split('/')[1]
        this.cruisingSpeed = data[10]
        this.departure = data[11]
        this.cruisingLevel = data[12]
        this.arrival = data[13]
        this.flightRules = data[21] as FlightRules
        this.departureTime = data[22]
        this.enrouteTime = parseInt(data[24], 10) * 60 + parseInt(data[25], 10)
        this.endurace = parseInt(data[26], 10) * 60 + parseInt(data[27], 10)
        this.alternate = data[28]
        this.remarks = data[29]
        this.route = data[30]
        this.alternate2 = data[42]
        this.flightType = data[43] as Flight
        this.pob = parseInt(data[44], 10)
        this.simulator = parseInt(data[47], 10) as Simulator
    }

}
