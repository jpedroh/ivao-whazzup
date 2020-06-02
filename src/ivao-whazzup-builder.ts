import FileContentsProvider from './file-contents-provider/file-contents-provider'
import IvaoWhazzup from './ivao-whazzup'

export default class IvaoWhazzupBuilder {
  private fileContentsProvider: FileContentsProvider
  public constructor(fileContentsProvider: FileContentsProvider) {
    this.fileContentsProvider = fileContentsProvider
  }

  public overridingFileContentsProvider(
    provider: FileContentsProvider
  ): IvaoWhazzupBuilder {
    this.fileContentsProvider = provider
    return this
  }

  public build(): IvaoWhazzup {
    return new IvaoWhazzup(this.fileContentsProvider)
  }
}
