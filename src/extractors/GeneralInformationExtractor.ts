import GeneralInformation from '../models/GeneralInformation';
import TotalConnections from '../models/TotalConnectionsInformation';
import DateUtils from '../utils/DateUtils';
import WhazzupFile from '../WhazzupFile';
import FileSectionExtractor from './FileSectionExtractor';
import BaseExtractor from './BaseExtractor';

export default class GeneralInformationExtractor extends BaseExtractor implements FileSectionExtractor {
  public extractFromFileLines(lines: string[]): Partial<WhazzupFile> {
    const sessionRawContents = this.getSessionContents(lines, '!GENERAL', '!CLIENTS');
    const sessionContents = this.removeKeys(sessionRawContents);

    const version = this.getValueByIndex(sessionContents, 0, parseInt);
    const minutesUntilReload = this.getValueByIndex(sessionContents, 1, parseInt);
    const lastUpdatedAt = this.getValueByIndex(sessionContents, 2, DateUtils.dateFromWhazzupString);
    const connections = this.extractTotalConnections(sessionContents);

    const generalInformation = new GeneralInformation(version, minutesUntilReload, lastUpdatedAt, connections);
    return { generalInformation };
  }

  private removeKeys(raw: string[]) {
    const keyValueSeparator = ' = ';
    return raw.map((line) => line.substr(line.indexOf(keyValueSeparator) + keyValueSeparator.length));
  }

  private extractTotalConnections(sessionContents: string[]) {
    const totalClients = this.getValueByIndex(sessionContents, 3, parseInt);
    const totalServers = this.getValueByIndex(sessionContents, 4, parseInt);
    const totalAirports = this.getValueByIndex(sessionContents, 5, parseInt);

    return new TotalConnections(totalClients, totalServers, totalAirports);
  }
}
