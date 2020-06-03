import ClientsExtractor from '../../../src/extractors/ClientsExtractor';
import Atc from '../../../src/models/Atc';
import ConnectionType from '../../../src/enum/ConnectionType';
import DateUtils from '../../../src/utils/DateUtils';
import FacilityType from '../../../src/enum/FacilityType';

describe('Clients Extractor', () => {
  const processor = new ClientsExtractor();

  describe('Given input from Whazzup File will return a single ATC', () => {
    const input = [
      '!CLIENTS',
      'CALLSIGN:123456:A NAME:ATC:121.900:-23.6261:-46.6564:0:0::::::SHARD2:B:4:0:3:10::::::::::::::::AN EXAMPLE ATIS:20200602202220:20200602181157:ATCClient:1.0:2:4:::::::',
      '!AIRPORTS',
    ];

    test('Returned value should have the passed ATC', () => {
      const { clients } = processor.extractFromFileLines(input);
      const atc = clients[0] as Atc;

      expect(clients.length).toEqual(1);
      expect(atc).toBeInstanceOf(Atc);
      expect(atc.callsign).toEqual('CALLSIGN');
      expect(atc.member.vid).toEqual(123456);
      expect(atc.member.name).toEqual('A NAME');
      expect(atc.member.rating).toEqual(4);
      expect(atc.member.administrativeRating).toEqual(2);
      expect(atc.position.latitude).toEqual(-23.6261);
      expect(atc.position.longitude).toEqual(-46.6564);
      expect(atc.position.altitude).toEqual(0);
      expect(atc.connection.type).toEqual(ConnectionType.ATC);
      expect(atc.connection.connectionTime).toEqual(DateUtils.dateFromWhazzupString('20200602181157'));
      expect(atc.connection.serverName).toEqual('SHARD2');
      expect(atc.connection.protocolVersion).toEqual('B');
      expect(atc.software.name).toEqual('ATCClient');
      expect(atc.software.version).toEqual('1.0');
      expect(atc.frequency).toEqual('121.900');
      expect(atc.facilityType).toEqual(FacilityType.GROUND);
      expect(atc.visualRange).toEqual(10);
      expect(atc.atis.content).toEqual('AN EXAMPLE ATIS');
      expect(atc.atis.definedAt).toEqual(DateUtils.dateFromWhazzupString('20200602202220'));
    });
  });
});
