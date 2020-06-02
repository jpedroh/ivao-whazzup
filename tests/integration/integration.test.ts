import IvaoWhazzup from '../../src/index';

describe('Integration Testing', () => {
  test('Testing with custom provider', async () => {
    const customProvider = {
      getFileLines: async () => await import('./fixtures/whazzup-file-lines.json'),
    };
    const expectedSerializedOutput = JSON.stringify(await import('./fixtures/expected-whazzup-output.json'));

    const ivaoWhazzup = IvaoWhazzup.overridingFileContentsProvider(customProvider).build();
    const ivaoData = await ivaoWhazzup.fetchData();

    expect(JSON.stringify(ivaoData)).toEqual(expectedSerializedOutput);
  });
});
