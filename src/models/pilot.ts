import { Client, Flight, FlightRules, PilotRating, Simulator } from './enums';

export class IVAOPilot {
    public vid: number | null;
    public callsign: string | null;
    public name: string | null;
    public connectionTime: number | null;
    public softwareName: string | null;
    public softwareVersion: string | null;
    public clientType: Client | null;
    public latitiude: number | null;
    public longtitude: number | null;
    public altitude: number | null;
    public groundSpeed: number | null;
    public heading: number | null;
    public onGround: boolean | null;
    public squawk: number | null;
    public rating: PilotRating | null;
    public fullAircraft: string | null;
    public aircraft: string | null;
    public cruisingSpeed: string | null;
    public departure: string | null;
    public cruisingLevel: string | null;
    public destination: string | null;
    public flightRules: FlightRules | null;
    public departureTime: string | null;
    public enrouteTime: number | null;
    public endurace: number | null;
    public alternate: string | null;
    public remarks: string | null;
    public route: string | null;
    public alternate2: string | null;
    public flightType: Flight | null;
    public pob: number | null;
    public simulator: Simulator | null;

    constructor(data: Array<string>) {
        this.callsign = data[0] || null;
        this.vid = parseInt(data[1]) || null;
        this.name = data[2] || null;
        this.connectionTime = parseInt(data[37]) || null;
        this.softwareName = data[38] || null;
        this.softwareVersion = data[39] || null;
        this.clientType = <Client>data[3] || null;
        this.latitiude = parseFloat(data[5]) || null;
        this.longtitude = parseFloat(data[6]) || null;
        this.altitude = parseInt(data[7]) || null;
        this.groundSpeed = parseInt(data[8]) || null;
        this.heading = parseInt(data[45]) || null;
        this.onGround = data[46] === '1' || null;
        this.squawk = parseInt(data[17]) || null;
        this.rating = parseInt(data[41]) || null;
        this.fullAircraft = data[9] || null;
        this.aircraft = data[9].split('/')[1] || null;
        this.cruisingSpeed = data[10] || null;
        this.departure = data[11] || null;
        this.cruisingLevel = data[12] || null;
        this.destination = data[13] || null;
        this.flightRules = <FlightRules>data[21] || null;
        this.departureTime = data[22] || null;
        this.enrouteTime = parseInt(data[24]) * 60 + parseInt(data[25]) || null;
        this.endurace = parseInt(data[26]) * 60 + parseInt(data[27]) || null;
        this.alternate = data[28] || null;
        this.remarks = data[29] || null;
        this.route = data[30] || null;
        this.alternate2 = data[42] || null;
        this.flightType = <Flight>data[43] || null;
        this.pob = parseInt(data[44]) || null;
        this.simulator = <Simulator>parseInt(data[47]) || null;
    }

}