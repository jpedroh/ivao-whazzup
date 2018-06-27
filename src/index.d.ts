export declare class Whazzup {
  private getAPIData(): Promise<IVAORequestResult>;
  public fetchData(): Promise<IVAOResult>;
}

export declare class IVAOATC {
  private vid: number;
  private callsign: string;
  private name: string;
  private connectionTime: number;
  private softwareName: string;
  private softwareVersion: string;
  private clientType: Client;
  private frequency: string;
  private facilityType: Facilty;
  private rating: ATCRating;
}

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
}

export declare class IVAORequestError extends Error {
  message: string;
  errorInfo: any;
}

export declare interface IVAOResult {
  data: IVAOResultData;
  pilots: Array<IVAOPilot>;
  atcs: Array<IVAOATC>;
}

export declare interface IVAORequestResult {
  updateTime: number;
  clientsConnected: number;
  buffer: Array<string>;
}

export declare interface IVAOResultData {
  updateTime: number;
  clientsConnected: number;
  clientsRetrieved: number;
}


export declare enum Client {
  Pilot = 'PILOT',
  ATC = 'ATC',
  FOLME = 'FOLME'
}

export declare enum Facilty {
  Observer, FlightInformation, Delivery, Ground, Tower, Approach, ACC, Departure
}

export declare enum PilotRating {
  Observer = 1, FS1, FS2, FS3, PP, SPP, CP, ATP, SFI, CFI
}

export declare enum ATCRating {
  Observer = 1, AS1, AS2, AS3, ADC, APC, ACC, SEC, SAI, CAI
}

export declare enum Simulator {
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
  Prepar3D1 = 30
}

export declare enum FlightRules {
  IFR = 'IFR',
  VFR = 'VFR',
  Y = 'Y',
  Z = 'Z'
}

export declare enum Flight {
  Scheduled = 'S',
  NonScheduled = 'N',
  Geral = 'G',
  Military = 'M',
  Other = 'X'
}