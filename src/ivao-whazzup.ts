import FileContentsProvider from './file-contents-provider/file-contents-provider'

export default class IvaoWhazzup {
  private fileContentsProvider: FileContentsProvider

  public constructor(fileContentsProvider: FileContentsProvider) {
    this.fileContentsProvider = fileContentsProvider
  }

  public fetchData(): string[] {
    throw new Error('Not implemented')
  }
}
