export declare class Whazzup {
  private getAPIData(): Promise<IVAORequestResult>;
  public fetchData(): Promise<IVAOResult>;
}

export declare class IVAOATC {
  public vid: number | null;
  public callsign: string | null;
  public name: string | null;
  public connectionTime: number | null;
  public softwareName: string | null;
  public softwareVersion: string | null;
  public clientType: Client | null;
  public frequency: string | null;
  public facilityType: Facilty | null;
  public rating: ATCRating | null;
}

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
  public arrival: string | null;
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
}

export declare class IVAORequestError extends Error {
  public message: string;
  public errorInfo: any;
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