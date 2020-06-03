export default class Position {
  public readonly latitude: number;
  public readonly longitude: number;
  public readonly altitude: number;

  public constructor(latitude: number, longitude: number, altitude: number) {
    this.latitude = latitude;
    this.longitude = longitude;
    this.altitude = altitude;
  }
}
