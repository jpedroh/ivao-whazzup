export default class Software {
  public readonly name: string;
  public readonly version: string;

  public constructor(name: string, version: string) {
    this.name = name;
    this.version = version;
  }
}
