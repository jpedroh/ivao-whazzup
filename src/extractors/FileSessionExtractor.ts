import WhazzupFile from '../WhazzupFile';

export default interface FileSessionExtractor {
  extractFromFileLines(lines: string[]): Partial<WhazzupFile>;
}
