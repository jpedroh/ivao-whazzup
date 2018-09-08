declare module 'ivao-whazzup' {

    export const Whazzup: WhazzupHandler

    export class WhazzupHandler {
        private readonly WHAZZUP_URL: string

        /**
         * Fetch Whazzup data from the IVAO Server.
         */
        public fetchData(): Promise<WhazzupRequestResult>

        /**
         * Download the Whazzup File from IVAO Server.
         */
        private downloadWhazzupFile(): Promise<Buffer>

        /**
         * Parses the Whazzup File downloaded from IVAO Server.
         * @param whazzupFile Whazzup File.
         */
        private parseWhazzupFile(whazzupFile: Buffer): Promise<WhazzupFileContent>

        /**
         * Build models from the parsed Whazzup file content.
         * @param fileContent parsed Whazzup file content.
         */
        private buildModels(fileContent: WhazzupFileContent): Promise<WhazzupRequestResult>
    }

    export class WhazzupATC {
        public vid: number
        public callsign: string
        public name: string
        public connectionTime: number
        public softwareName: string
        public softwareVersion: string
        public clientType: Client
        public frequency: string
        public facilityType: Facilty
        public rating: ATCRating

        constructor(data: string[])
    }

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

        constructor(data: string[])
    }

    export enum Client {
        Pilot = 'PILOT',
        ATC = 'ATC',
        FOLME = 'FOLME',
    }

    export enum Facilty {
        Observer, FlightInformation, Delivery, Ground, Tower, Approach, ACC, Departure,
    }

    export enum PilotRating {
        Observer = 1, FS1, FS2, FS3, PP, SPP, CP, ATP, SFI, CFI,
    }

    export enum ATCRating {
        Observer = 1, AS1, AS2, AS3, ADC, APC, ACC, SEC, SAI, CAI,
    }

    export enum Simulator {
        Unknown = 0,
        FS95 = 1,
        FS98 = 2,
        CFS = 3,
        FS2000 = 4,
        CFS2 = 5,
        FS2002 = 6,
        CFS3 = 7,
        FS2004 = 8,
        FSX = 9,
        XPlaneUnknown = 11,
        XPlane8 = 12,
        XPlane9 = 13,
        XPlane10 = 14,
        PS1 = 15,
        XPlane11 = 16,
        XPlane12 = 17,
        Fly = 20,
        Fly2 = 21,
        FlightGear = 25,
        Prepar3D1 = 30,
    }

    export enum FlightRules {
        IFR = 'IFR',
        VFR = 'VFR',
        Y = 'Y',
        Z = 'Z',
    }

    export enum Flight {
        Scheduled = 'S',
        NonScheduled = 'N',
        Geral = 'G',
        Military = 'M',
        Other = 'X',
    }

    export class WhazzupFileContent {
        public connectedClients: number
        public lastUpdate: Date
        public clientsData: string[]

        constructor(generalInfo: string[], clientsData: string[])
    }

    export interface IWhazzupRequestData {
        lastUpdate: Date
        connectedClients: number
        retrievedClients: number
    }

    export class WhazzupRequestResult {
        public data: IWhazzupRequestData
        public pilots: WhazzupPilot[]
        public atcs: WhazzupATC[]

        constructor(fileContent: WhazzupFileContent, retrievedPilots: WhazzupPilot[], retrievedATCs: WhazzupATC[],
            retrievedClientsNumber: number)
    }


    export class BuildModelsError extends Error {
        constructor(msg: string)
    }

    export class ParseError extends Error {
        constructor(msg: string)
    }

    export class DownloadFileError extends Error {
        constructor(msg: string)
    }

}
