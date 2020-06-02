import FileSessionExtractor from './extractors/FileSessionExtractor';
import FileContentsProvider from './providers/FileContentsProvider';
import WhazzupFile from './WhazzupFile';

export default class IvaoWhazzup {
  private fileContentsProvider: FileContentsProvider;
  private fileSessionsExtractors: FileSessionExtractor[];

  public constructor(fileContentsProvider: FileContentsProvider, fileSessionsExtractors: FileSessionExtractor[]) {
    this.fileContentsProvider = fileContentsProvider;
    this.fileSessionsExtractors = fileSessionsExtractors;
  }

  public async fetchData(): Promise<WhazzupFile> {
    const fileLines = await this.fileContentsProvider.getFileLines();

    return this.fileSessionsExtractors
      .map((processor) => processor.extractFromFileLines(fileLines))
      .reduce(this.mergeSessionsIntoWhazzupFileObject) as WhazzupFile;
  }

  private mergeSessionsIntoWhazzupFileObject(
    prev: Partial<WhazzupFile>,
    cur: Partial<WhazzupFile>,
  ): Partial<WhazzupFile> {
    return { ...prev, ...cur };
  }
}
