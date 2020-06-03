import ServersExtractor from '../../../src/extractors/ServersExtractor';

describe('Servers Extractor', () => {
  const processor = new ServersExtractor();

  describe('Given input from Whazzup File', () => {
    const input = [
      'EU16:5.135.66.181:Europe:IVAO EU16 - IVAO Network:1:1000',
      'EU15:5.135.66.180:Europe:IVAO EU15 - IVAO Network:0:1000',
    ];

    test('Returned value should have extracted Servers from Whazzup File', () => {
      const { servers } = processor.extractFromFileLines(input);

      expect(servers.length).toEqual(2);

      const server1 = servers[0];
      expect(server1.ident).toEqual('EU16');
      expect(server1.host).toEqual('5.135.66.181');
      expect(server1.location).toEqual('Europe');
      expect(server1.name).toEqual('IVAO EU16 - IVAO Network');
      expect(server1.clientConnectionsAllowed).toEqual(true);
      expect(server1.maximumConnections).toEqual(1000);

      const server2 = servers[1];
      expect(server2.ident).toEqual('EU15');
      expect(server2.host).toEqual('5.135.66.180');
      expect(server2.location).toEqual('Europe');
      expect(server2.name).toEqual('IVAO EU15 - IVAO Network');
      expect(server2.clientConnectionsAllowed).toEqual(false);
      expect(server2.maximumConnections).toEqual(1000);
    });
  });
});
