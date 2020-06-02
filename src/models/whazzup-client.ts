export abstract class WhazzupClient {
  public readonly callsign: string
  public readonly member: WhazzupMember
  public readonly position: WhazzupPosition
  public readonly connection: WhazzupConnection
  public readonly software: WhazzupSoftware

  public constructor(
    callsign: string,
    member: WhazzupMember,
    position: WhazzupPosition,
    connection: WhazzupConnection,
    software: WhazzupSoftware
  ) {
    this.callsign = callsign
    this.member = member
    this.position = position
    this.connection = connection
    this.software = software
  }
}

export class WhazzupMember {
  public readonly vid: number
  public readonly name: string
  public readonly rating: number
  public readonly administrativeRating: number

  public constructor(
    vid: number,
    name: string,
    rating: number,
    administrativeRating: number
  ) {
    this.vid = vid
    this.name = name
    this.rating = rating
    this.administrativeRating = administrativeRating
  }
}

export class WhazzupSoftware {
  public readonly name: string
  public readonly version: string

  public constructor(name: string, version: string) {
    this.name = name
    this.version = version
  }
}

export class WhazzupConnection {
  public readonly connectionTime: Date
  public readonly serverName: string
  public readonly protocolVersion: string

  public constructor(
    connectionTime: Date,
    serverName: string,
    protocolVersion: string
  ) {
    this.connectionTime = connectionTime
    this.serverName = serverName
    this.protocolVersion = protocolVersion
  }
}

export class WhazzupPosition {
  public readonly latitude: number
  public readonly longitude: number
  public readonly altitude: number

  public constructor(latitude: number, longitude: number, altitude: number) {
    this.latitude = latitude
    this.longitude = longitude
    this.altitude = altitude
  }
}
