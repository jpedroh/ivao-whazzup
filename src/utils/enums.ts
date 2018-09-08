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
