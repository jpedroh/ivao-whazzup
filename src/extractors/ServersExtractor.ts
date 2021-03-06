import Server from '../models/Server';
import WhazzupFile from '../WhazzupFile';
import BaseExtractor from './BaseExtractor';
import FileSectionExtractor from './FileSectionExtractor';

export default class ServersExtractor extends BaseExtractor implements FileSectionExtractor {
  public extractFromFileLines(lines: string[]): Partial<WhazzupFile> {
    const serverLines = this.getSessionContents(lines, '!SERVERS');
    const servers = serverLines
      .filter((v) => v !== '')
      .map((serverLine: string) => {
        const serverInfo = serverLine.split(':');
        return new Server(
          this.getValueByIndex(serverInfo, 0),
          this.getValueByIndex(serverInfo, 1),
          this.getValueByIndex(serverInfo, 2),
          this.getValueByIndex(serverInfo, 3),
          this.getValueByIndex<boolean>(serverInfo, 4, (v) => v == '1'),
          this.getValueByIndex(serverInfo, 5, parseInt),
        );
      });

    return { servers };
  }
}
