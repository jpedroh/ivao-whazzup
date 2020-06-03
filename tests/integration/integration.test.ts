import IvaoWhazzup from '../../src/index';
import IvaoWhazzupBuilder from '../../src/IvaoWhazzupBuilder';

describe('Integration Testing', () => {
  let builder: IvaoWhazzupBuilder;

  beforeEach(() => {
    builder = IvaoWhazzup.reset();
  });

  test('Testing with custom provider', async () => {
    const customProvider = {
      getFileLines: async () => await import('./fixtures/whazzup-file-lines.json'),
    };
    const expectedSerializedOutput = JSON.stringify(await import('./fixtures/expected-whazzup-output.json'));

    const ivaoWhazzup = builder.overridingFileContentsProvider(customProvider).build();
    const ivaoData = await ivaoWhazzup.fetchData();
    const serializedOutput = JSON.stringify(ivaoData);

    expect(serializedOutput).toEqual(expectedSerializedOutput);
  });

  test('Testing with default API provider', async () => {
    const ivaoWhazzup = builder.build();
    const ivaoData = await ivaoWhazzup.fetchData();

    expect(ivaoData.servers.length).toEqual(ivaoData.generalInformation.totalConnections.servers);
    expect(ivaoData.airports.length).toEqual(ivaoData.generalInformation.totalConnections.airports);
  });
});
