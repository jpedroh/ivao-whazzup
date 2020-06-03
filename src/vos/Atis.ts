export default class Atis {
  public readonly content: string;
  public readonly definedAt: Date;

  public constructor(content: string, definedAt: Date) {
    this.content = content;
    this.definedAt = definedAt;
  }
}
