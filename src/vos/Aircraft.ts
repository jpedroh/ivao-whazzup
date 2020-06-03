import WakeTurbulence from '../enum/WakeTurbulence';

export default class Aircraft {
  public readonly number: number;
  public readonly identification: string;
  public readonly wakeTurbulence: WakeTurbulence;
  public readonly equipment: string;
  public readonly transponder: string;

  public constructor(
    number: number,
    identification: string,
    wakeTurbulence: WakeTurbulence,
    equipment: string,
    transponder: string,
  ) {
    this.number = number;
    this.identification = identification;
    this.wakeTurbulence = wakeTurbulence;
    this.equipment = equipment;
    this.transponder = transponder;
  }
}
