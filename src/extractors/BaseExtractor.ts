export default abstract class BaseExtractor {
  protected getSessionContents(lines: string[], beginMarker: string, endingMarker?: string): string[] {
    const sessionBeginIndex = lines.indexOf(beginMarker) + 1;
    if (endingMarker) {
      const sessionEndingIndex = lines.indexOf(endingMarker);
      return lines.slice(sessionBeginIndex, sessionEndingIndex);
    }
    return lines.slice(sessionBeginIndex);
  }

  protected getValueByIndex(contents: string[], index: number): string;
  protected getValueByIndex<T>(contents: string[], index: number, formatter: (v: string) => T): T;
  protected getValueByIndex<T>(contents: string[], index: number, formatter?: (v: string) => T): T | string {
    return formatter ? formatter(contents[index]) : contents[index];
  }
}
