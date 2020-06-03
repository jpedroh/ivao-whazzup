import FlightRule from '../enum/FlightRule';
import Aircraft from './Aircraft';
import FlightType from '../enum/FlightType';

export default class FlightPlan {
  public readonly aircraft: Aircraft;
  public readonly cruisingSpeed: string;
  public readonly departure: string;
  public readonly cruisingLevel: string;
  public readonly arrival: string;
  public readonly flightRules: FlightRule;
  public readonly departureTime: string;
  public readonly enrouteMinutes: number;
  public readonly enduranceMinutes: number;
  public readonly alternate: string;
  public readonly remarks: string;
  public readonly route: string;
  public readonly secondAlternate: string;
  public readonly flightType: FlightType;
  public readonly personsOnBoard: number;

  public constructor(
    aircraft: Aircraft,
    cruisingSpeed: string,
    departure: string,
    cruisingLevel: string,
    arrival: string,
    flightRules: FlightRule,
    departureTime: string,
    enrouteMinutes: number,
    enduranceMinutes: number,
    alternate: string,
    remarks: string,
    route: string,
    secondAlternate: string,
    flightType: FlightType,
    personsOnBoard: number,
  ) {
    this.aircraft = aircraft;
    this.cruisingSpeed = cruisingSpeed;
    this.departure = departure;
    this.cruisingLevel = cruisingLevel;
    this.arrival = arrival;
    this.flightRules = flightRules;
    this.departureTime = departureTime;
    this.enrouteMinutes = enrouteMinutes;
    this.enduranceMinutes = enduranceMinutes;
    this.alternate = alternate;
    this.remarks = remarks;
    this.route = route;
    this.secondAlternate = secondAlternate;
    this.flightType = flightType;
    this.personsOnBoard = personsOnBoard;
  }
}
