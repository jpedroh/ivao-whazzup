import WhazzupFile from '../WhazzupFile';

export default interface FileSectionExtractor {
  extractFromFileLines(lines: string[]): Partial<WhazzupFile>;
}
