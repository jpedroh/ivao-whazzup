import FileSectionExtractor from './extractors/FileSectionExtractor';
import FileContentsProvider from './providers/FileContentsProvider';
import WhazzupFile from './WhazzupFile';

export default class IvaoWhazzup {
  private fileContentsProvider: FileContentsProvider;
  private fileSectionsExtractors: FileSectionExtractor[];

  public constructor(fileContentsProvider: FileContentsProvider, fileSectionsExtractors: FileSectionExtractor[]) {
    this.fileContentsProvider = fileContentsProvider;
    this.fileSectionsExtractors = fileSectionsExtractors;
  }

  public async fetchData(): Promise<WhazzupFile> {
    const fileLines = await this.fileContentsProvider.getFileLines();

    return this.fileSectionsExtractors
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
