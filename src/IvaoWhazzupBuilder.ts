import FileContentsProvider from './providers/FileContentsProvider';
import IvaoWhazzup from './IvaoWhazzup';
import FileSectionExtractor from './extractors/FileSectionExtractor';

export default class IvaoWhazzupBuilder {
  private fileContentsProvider: FileContentsProvider;
  private sectionsExtractors: FileSectionExtractor[];

  public constructor(fileContentsProvider: FileContentsProvider, sectionsExtractors: FileSectionExtractor[]) {
    this.fileContentsProvider = fileContentsProvider;
    this.sectionsExtractors = sectionsExtractors;
  }

  public overridingFileContentsProvider(provider: FileContentsProvider): IvaoWhazzupBuilder {
    this.fileContentsProvider = provider;
    return this;
  }

  public build(): IvaoWhazzup {
    return new IvaoWhazzup(this.fileContentsProvider, this.sectionsExtractors);
  }
}
