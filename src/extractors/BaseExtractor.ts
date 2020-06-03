export default abstract class BaseExtractor {
  protected getSessionContents(lines: string[], beginMarker: string, endingMarker?: string): string[] {
    const sessionBeginIndex = lines.indexOf(beginMarker) + 1;
    if (endingMarker) {
      const sessionEndingIndex = lines.indexOf(endingMarker);
      return lines.slice(sessionBeginIndex, sessionEndingIndex);
    }
    return lines.slice(sessionBeginIndex);
  }

  protected getValueByIndex<T>(sessionContents: string[], index: number, formatter: (value: string) => T): T {
    const value = sessionContents[index];
    return formatter(value);
  }
}
