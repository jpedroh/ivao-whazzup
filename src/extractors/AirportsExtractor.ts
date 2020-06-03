import Airport from '../models/Airport';
import WhazzupFile from '../WhazzupFile';
import BaseExtractor from './BaseExtractor';
import FileSectionExtractor from './FileSectionExtractor';

export default class AirportsExtractor extends BaseExtractor implements FileSectionExtractor {
  public extractFromFileLines(lines: string[]): Partial<WhazzupFile> {
    const airportsLines = this.getSessionContents(lines, '!AIRPORTS', '!SERVERS');

    const airports = airportsLines.map((airportLine: string) => {
      const airportInfo = airportLine.split(':');
      return new Airport(this.getValueByIndex(airportInfo, 0), this.getValueByIndex(airportInfo, 1));
    });

    return { airports };
  }
}
