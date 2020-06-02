import FileContentsProvider from './providers/FileContentsProvider';
import IvaoWhazzup from './IvaoWhazzup';
import FileSessionExtractor from './extractors/FileSessionExtractor';

export default class IvaoWhazzupBuilder {
  private fileContentsProvider: FileContentsProvider;
  private sessionExtractors: FileSessionExtractor[];

  public constructor(fileContentsProvider: FileContentsProvider, sessionExtractors: FileSessionExtractor[]) {
    this.fileContentsProvider = fileContentsProvider;
    this.sessionExtractors = sessionExtractors;
  }

  public overridingFileContentsProvider(provider: FileContentsProvider): IvaoWhazzupBuilder {
    this.fileContentsProvider = provider;
    return this;
  }

  public build(): IvaoWhazzup {
    return new IvaoWhazzup(this.fileContentsProvider, this.sessionExtractors);
  }
}
