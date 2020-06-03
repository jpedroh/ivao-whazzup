import GeneralInformationExtractor from "../../../src/extractors/GeneralInformationExtractor";

describe("General Information Extractor", () => {
  const processor = new GeneralInformationExtractor();

  describe("Given input from Whazzup File", () => {
    const input = [
      "!GENERAL",
      "VERSION = 6",
      "RELOAD = 1",
      "UPDATE = 20200602195932",
      "CONNECTED CLIENTS = 1052",
      "CONNECTED SERVERS = 8",
      "CONNECTED AIRPORTS = 1",
      "!CLIENTS",
    ];

    test("Returned value should have extracted GeneralInformation from Whazzup File", () => {
      const { generalInformation } = processor.extractFromFileLines(input);
      const lastUpdatedAt = new Date(Date.UTC(2020, 5, 2, 19, 59, 32));

      expect(generalInformation.version).toEqual(6);
      expect(generalInformation.minutesUntilReload).toEqual(1);
      expect(generalInformation.lastUpdatedAt).toEqual(lastUpdatedAt);
      expect(generalInformation.totalConnections.clients).toEqual(1052);
      expect(generalInformation.totalConnections.servers).toEqual(8);
      expect(generalInformation.totalConnections.airports).toEqual(1);
    });
  });
});
