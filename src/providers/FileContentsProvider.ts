export default interface FileContentsProvider {
  getFileLines(): Promise<string[]>;
}
