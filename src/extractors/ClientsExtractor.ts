import ConnectionType from '../enum/ConnectionType';
import FacilityType from '../enum/FacilityType';
import FlightRule from '../enum/FlightRule';
import FlightType from '../enum/FlightType';
import Simulator from '../enum/Simulator';
import WakeTurbulence from '../enum/WakeTurbulence';
import InvalidClientTypeException from '../exception/InvalidClientTypeException';
import Atc from '../models/Atc';
import Client from '../models/Client';
import FollowMe from '../models/FollowMe';
import Pilot from '../models/Pilot';
import DateUtils from '../utils/DateUtils';
import Aircraft from '../vos/Aircraft';
import Atis from '../vos/Atis';
import Connection from '../vos/Connection';
import FlightPlan from '../vos/FlightPlan';
import Member from '../vos/Member';
import Position from '../vos/Position';
import Software from '../vos/Software';
import WhazzupFile from '../WhazzupFile';
import BaseExtractor from './BaseExtractor';
import FileSectionExtractor from './FileSectionExtractor';

export default class ClientsExtractor extends BaseExtractor implements FileSectionExtractor {
  public extractFromFileLines(lines: string[]): Partial<WhazzupFile> {
    const clientLines = this.getSessionContents(lines, '!CLIENTS', '!AIRPORTS');

    const clients = clientLines.map((clientLine) => {
      const clientData = clientLine.split(':');
      const baseClient = this.extractBaseClient(clientData);
      if (baseClient.connection.type === ConnectionType.ATC) {
        return this.extractAtc(baseClient, clientData);
      } else if (baseClient.connection.type === ConnectionType.FOLLOW_ME) {
        return new FollowMe(baseClient);
      } else if (baseClient.connection.type === ConnectionType.PILOT) {
        return this.extractPilot(baseClient, clientData);
      }
      throw new InvalidClientTypeException();
    });

    return { clients };
  }

  private extractPilot(baseClient: Client, clientData: string[]): Pilot {
    const groundSpeed = this.getValueByIndex(clientData, 8, parseInt);
    const heading = this.getValueByIndex(clientData, 45, parseInt);
    const onGround = this.getValueByIndex(clientData, 46, (v) => v === '1');
    const squawk = this.getValueByIndex(clientData, 17, parseInt);
    const simulator = this.getValueByIndex<Simulator>(clientData, 47, parseInt);
    const planeMtl = this.getValueByIndex(clientData, 48);

    const hasFilledFlightPlan = clientData[9] !== '';
    const flightPlan = hasFilledFlightPlan ? this.extractFlightPlan(clientData) : null;

    return new Pilot(baseClient, groundSpeed, heading, onGround, squawk, simulator, planeMtl, flightPlan);
  }

  private extractFlightPlan(clientData: string[]) {
    const hourStringToMinutes = (v: string) => parseInt(v) * 60;

    const aircraft = this.extractAircraft(clientData);
    const cruisingSpeed = this.getValueByIndex(clientData, 10);
    const departure = this.getValueByIndex(clientData, 11);
    const cruisingLevel = this.getValueByIndex(clientData, 12);
    const arrival = this.getValueByIndex(clientData, 13);
    const flightRules = this.getValueByIndex(clientData, 21) as FlightRule;
    const departureTime = this.getValueByIndex(clientData, 22);
    const enrouteMinutes =
      this.getValueByIndex(clientData, 24, hourStringToMinutes) + this.getValueByIndex(clientData, 25, parseInt);
    const enduranceMinutes =
      this.getValueByIndex(clientData, 26, hourStringToMinutes) + this.getValueByIndex(clientData, 27, parseInt);
    const alternate = this.getValueByIndex(clientData, 28);
    const remarks = this.getValueByIndex(clientData, 29);
    const route = this.getValueByIndex(clientData, 30);
    const secondAlternate = this.getValueByIndex(clientData, 42);
    const flightType = this.getValueByIndex(clientData, 43) as FlightType;
    const personsOnBoard = this.getValueByIndex(clientData, 44, parseInt);

    return new FlightPlan(
      aircraft,
      cruisingSpeed,
      departure,
      cruisingLevel,
      arrival,
      flightRules,
      departureTime,
      enrouteMinutes,
      enduranceMinutes,
      alternate,
      remarks,
      route,
      secondAlternate,
      flightType,
      personsOnBoard,
    );
  }

  private extractAircraft(clientData: string[]): Aircraft {
    const fullAircraft = this.getValueByIndex(clientData, 9, (v) => v.split('/'));
    return new Aircraft(
      this.getValueByIndex(fullAircraft, 0, parseInt),
      this.getValueByIndex(fullAircraft, 1),
      this.getValueByIndex(fullAircraft, 2).charAt(0) as WakeTurbulence,
      this.getValueByIndex(fullAircraft, 2).substring(2),
      this.getValueByIndex(fullAircraft, 3),
    );
  }

  private extractAtc(baseClient: Client, clientData: string[]) {
    const frequency = this.getValueByIndex(clientData, 4);
    const facilityType = this.getValueByIndex(clientData, 18, parseInt) as FacilityType;
    const visualRange = this.getValueByIndex(clientData, 19, parseInt);
    const atis = new Atis(
      this.getValueByIndex(clientData, 35),
      this.getValueByIndex(clientData, 36, DateUtils.dateFromWhazzupString),
    );

    return new Atc(baseClient, frequency, facilityType, visualRange, atis);
  }

  private extractBaseClient(clientData: string[]) {
    const callsign = this.getValueByIndex(clientData, 0);
    const member = this.extractMember(clientData);
    const position = this.extractPosition(clientData);
    const connection = this.extractConnection(clientData);
    const software = this.extractSoftware(clientData);
    return new Client(callsign, member, position, connection, software);
  }

  private extractSoftware(clientData: string[]) {
    return new Software(this.getValueByIndex(clientData, 38), this.getValueByIndex(clientData, 39));
  }

  private extractConnection(clientData: string[]) {
    return new Connection(
      this.getValueByIndex(clientData, 3) as ConnectionType,
      this.getValueByIndex(clientData, 37, DateUtils.dateFromWhazzupString),
      this.getValueByIndex(clientData, 14),
      this.getValueByIndex(clientData, 15),
    );
  }

  private extractPosition(clientData: string[]) {
    return new Position(
      this.getValueByIndex(clientData, 5, parseFloat),
      this.getValueByIndex(clientData, 6, parseFloat),
      this.getValueByIndex(clientData, 7, parseInt),
    );
  }

  private extractMember(clientData: string[]) {
    return new Member(
      this.getValueByIndex(clientData, 1, parseInt),
      this.getValueByIndex(clientData, 2),
      this.getValueByIndex(clientData, 41, parseInt),
      this.getValueByIndex(clientData, 40, parseInt) as FacilityType,
    );
  }
}
