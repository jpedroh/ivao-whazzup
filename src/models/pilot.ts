import { Client, Flight, FlightRules, PilotRating, Simulator } from './enums';

export class IVAOPilot {
    private vid: number;
    private callsign: string;
    private name: string;
    private connectionTime: number;
    private softwareName: string;
    private softwareVersion: string;
    private clientType: Client;
    private latitiude: number;
    private longtitude: number;
    private altitude: number;
    private groundSpeed: number;
    private heading: number;
    private onGround: boolean;
    private squawk: number;
    private rating: PilotRating;
    private fullAircraft: string;
    private aircraft: string;
    private cruisingSpeed: string;
    private departure: string;
    private cruisingLevel: string;
    private destination: string;
    private flightRules: FlightRules;
    private departureTime: string;
    private enrouteTime: number;
    private endurace: number;
    private alternate: string;
    private remarks: string;
    private route: string;
    private alternate2: string;
    private flightType: Flight;
    private pob: number;
    private simulator: Simulator;

    constructor(data: Array<string>) {
        this.callsign = data[0];
        this.vid = parseInt(data[1]);
        this.name = data[2];
        this.connectionTime = parseInt(data[37]);
        this.softwareName = data[38];
        this.softwareVersion = data[39];
        this.clientType = <Client>data[3];
        this.latitiude = parseFloat(data[5]);
        this.longtitude = parseFloat(data[6]);
        this.altitude = parseInt(data[7]);
        this.groundSpeed = parseInt(data[8]);
        this.heading = parseInt(data[45]);
        this.onGround = data[46] === '1';
        this.squawk = parseInt(data[17]);
        this.rating = parseInt(data[41]);
        this.fullAircraft = data[9];
        this.aircraft = data[9].split('/')[1];
        this.cruisingSpeed = data[10];
        this.departure = data[11];
        this.cruisingLevel = data[12];
        this.destination = data[13];
        this.flightRules = <FlightRules>data[21];
        this.departureTime = data[22];
        this.enrouteTime = parseInt(data[24]) * 60 + parseInt(data[25]);
        this.endurace = parseInt(data[26]) * 60 + parseInt(data[27]);
        this.alternate = data[28];
        this.remarks = data[29];
        this.route = data[30];
        this.alternate2 = data[42];
        this.flightType = <Flight>data[43];
        this.pob = parseInt(data[44]);
        this.simulator = <Simulator>parseInt(data[47]);
    }

    /**
     * Getter $vid
     * @return {number}
     */
	public get $vid(): number {
		return this.vid;
	}

    /**
     * Getter $callsign
     * @return {string}
     */
	public get $callsign(): string {
		return this.callsign;
	}

    /**
     * Getter $name
     * @return {string}
     */
	public get $name(): string {
		return this.name;
	}

    /**
     * Getter $connectionTime
     * @return {number}
     */
	public get $connectionTime(): number {
		return this.connectionTime;
	}

    /**
     * Getter $softwareName
     * @return {string}
     */
	public get $softwareName(): string {
		return this.softwareName;
	}

    /**
     * Getter $softwareVersion
     * @return {string}
     */
	public get $softwareVersion(): string {
		return this.softwareVersion;
	}

    /**
     * Getter $clientType
     * @return {ClientType}
     */
	public get $clientType(): Client {
		return this.clientType;
	}

    /**
     * Getter $latitiude
     * @return {number}
     */
	public get $latitiude(): number {
		return this.latitiude;
	}

    /**
     * Getter $longtitude
     * @return {number}
     */
	public get $longtitude(): number {
		return this.longtitude;
	}

    /**
     * Getter $altitude
     * @return {number}
     */
	public get $altitude(): number {
		return this.altitude;
	}

    /**
     * Getter $groundSpeed
     * @return {number}
     */
	public get $groundSpeed(): number {
		return this.groundSpeed;
	}

    /**
     * Getter $heading
     * @return {number}
     */
	public get $heading(): number {
		return this.heading;
	}

    /**
     * Getter $onGround
     * @return {boolean}
     */
	public get $onGround(): boolean {
		return this.onGround;
	}

    /**
     * Getter $squawk
     * @return {number}
     */
	public get $squawk(): number {
		return this.squawk;
	}

    /**
     * Getter $rating
     * @return {PilotRating}
     */
	public get $rating(): PilotRating {
		return this.rating;
	}

    /**
     * Getter $fullAircraft
     * @return {string}
     */
	public get $fullAircraft(): string {
		return this.fullAircraft;
	}

    /**
     * Getter $aircraft
     * @return {string}
     */
	public get $aircraft(): string {
		return this.aircraft;
	}

    /**
     * Getter $cruisingSpeed
     * @return {string}
     */
	public get $cruisingSpeed(): string {
		return this.cruisingSpeed;
	}

    /**
     * Getter $departure
     * @return {string}
     */
	public get $departure(): string {
		return this.departure;
	}

    /**
     * Getter $cruisingLevel
     * @return {string}
     */
	public get $cruisingLevel(): string {
		return this.cruisingLevel;
	}

    /**
     * Getter $destination
     * @return {string}
     */
	public get $destination(): string {
		return this.destination;
	}

    /**
     * Getter $flightRules
     * @return {FlightRules}
     */
	public get $flightRules(): FlightRules {
		return this.flightRules;
	}

    /**
     * Getter $departureTime
     * @return {string}
     */
	public get $departureTime(): string {
		return this.departureTime;
	}

    /**
     * Getter $enrouteTime
     * @return {number}
     */
	public get $enrouteTime(): number {
		return this.enrouteTime;
	}

    /**
     * Getter $endurace
     * @return {number}
     */
	public get $endurace(): number {
		return this.endurace;
	}

    /**
     * Getter $alternate
     * @return {string}
     */
	public get $alternate(): string {
		return this.alternate;
	}

    /**
     * Getter $remarks
     * @return {string}
     */
	public get $remarks(): string {
		return this.remarks;
	}

    /**
     * Getter $route
     * @return {string}
     */
	public get $route(): string {
		return this.route;
	}

    /**
     * Getter $alternate2
     * @return {string}
     */
	public get $alternate2(): string {
		return this.alternate2;
	}

    /**
     * Getter $flightType
     * @return {Flight}
     */
	public get $flightType(): Flight {
		return this.flightType;
	}

    /**
     * Getter $pob
     * @return {number}
     */
	public get $pob(): number {
		return this.pob;
	}

    /**
     * Getter $simulator
     * @return {Simulator}
     */
	public get $simulator(): Simulator {
		return this.simulator;
	}

}