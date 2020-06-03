import ConnectionType from '../enum/ConnectionType';
import FacilityType from '../enum/FacilityType';
import Atc from '../models/Atc';
import Client from '../models/Client';
import DateUtils from '../utils/DateUtils';
import Atis from '../vos/Atis';
import Connection from '../vos/Connection';
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
      }
      return null;
    });

    return { clients };
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
