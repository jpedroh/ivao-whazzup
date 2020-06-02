import WhazzupFile from '../WhazzupFile';
import GeneralInformation from '../models/GeneralInformation';
import DateUtils from '../utils/DateUtils';
import TotalConnections from '../models/TotalConnectionsInformation';
import FileSessionExtractor from './FileSessionExtractor';

export default class GeneralInformationExtractor implements FileSessionExtractor {
  public extractFromFileLines(lines: string[]): Partial<WhazzupFile> {
    const sessionContents = this.getSessionContents(lines);

    const version = this.getValueByIndex(sessionContents, 0, parseInt);
    const minutesUntilReload = this.getValueByIndex(sessionContents, 1, parseInt);
    const lastUpdatedAt = this.getValueByIndex(sessionContents, 2, DateUtils.dateFromWhazzupString);
    const connections = this.extractTotalConnections(sessionContents);

    const generalInformation = new GeneralInformation(version, minutesUntilReload, lastUpdatedAt, connections);
    return { generalInformation };
  }

  private extractTotalConnections(sessionContents: string[]) {
    const totalClients = this.getValueByIndex(sessionContents, 3, parseInt);
    const totalServers = this.getValueByIndex(sessionContents, 4, parseInt);
    const totalAirports = this.getValueByIndex(sessionContents, 5, parseInt);

    return new TotalConnections(totalClients, totalServers, totalAirports);
  }

  private getValueByIndex<T>(sessionContents: string[], index: number, formatter: (value: string) => T): T {
    const sessionValueSeparator = ' = ';
    const value = sessionContents[index].split(sessionValueSeparator)[1];
    return formatter(value);
  }

  private getSessionContents(lines: string[]) {
    const sessionBeginMarker = '!GENERAL';
    const sessionEndingMarker = '!CLIENTS';

    const sessionBeginIndex = lines.indexOf(sessionBeginMarker) + 1;
    const sessionEndingIndex = lines.indexOf(sessionEndingMarker);

    return lines.slice(sessionBeginIndex, sessionEndingIndex);
  }
}
