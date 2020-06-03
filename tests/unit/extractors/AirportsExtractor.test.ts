import AirportsExtractor from '../../../src/extractors/AirportsExtractor';

describe('Airports Extractor', () => {
  const processor = new AirportsExtractor();

  describe('Given input from Whazzup File', () => {
    const input = ['!AIRPORTS', 'SBBV:THIS IS JUST AN EXAMPLE', '!SERVERS'];

    test('Returned value should have extracted Airports from Whazzup File', () => {
      const { airports } = processor.extractFromFileLines(input);

      expect(airports.length).toEqual(1);

      const airport = airports[0];
      expect(airport.icao).toEqual('SBBV');
      expect(airport.atis).toEqual('THIS IS JUST AN EXAMPLE');
    });
  });
});
