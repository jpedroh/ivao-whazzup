import { Flight, FlightRules, PilotRating, Simulator } from '../utils/enums'
import { IvaoClient } from './ivao-client'

export class IvaoPilot extends IvaoClient {
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

    constructor(clientData: string[]) {
        super(clientData)
        this.groundSpeed = parseInt(clientData[8], 10)
        this.heading = parseInt(clientData[45], 10)
        this.onGround = clientData[46] === '1'
        this.squawk = parseInt(clientData[17], 10)
        this.rating = parseInt(clientData[41], 10)
        this.fullAircraft = clientData[9]
        this.aircraft = clientData[9].split('/')[1]
        this.cruisingSpeed = clientData[10]
        this.departure = clientData[11]
        this.cruisingLevel = clientData[12]
        this.arrival = clientData[13]
        this.flightRules = clientData[21] as FlightRules
        this.departureTime = clientData[22]
        this.enrouteTime = parseInt(clientData[24], 10) * 60 + parseInt(clientData[25], 10)
        this.endurace = parseInt(clientData[26], 10) * 60 + parseInt(clientData[27], 10)
        this.alternate = clientData[28]
        this.remarks = clientData[29]
        this.route = clientData[30]
        this.alternate2 = clientData[42]
        this.flightType = clientData[43] as Flight
        this.pob = parseInt(clientData[44], 10)
        this.simulator = parseInt(clientData[47], 10) as Simulator
    }

}
