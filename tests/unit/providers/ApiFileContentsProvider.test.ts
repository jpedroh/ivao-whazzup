import ApiFileContentsProvider from '../../../src/providers/ApiFileContentsProvider';

describe('ApiFileContentsProvider', () => {
  const httpClientMock = {
    get: jest.fn(),
  };
  let provider: ApiFileContentsProvider;

  beforeEach(() => {
    provider = new ApiFileContentsProvider(httpClientMock);
  });

  describe('Given server responds with file contents', () => {
    const httpResponseValue = ['THIS IS LINE 1', 'THIS IS LINE 2'].join('\n');
    httpClientMock.get.mockImplementationOnce(() => Promise.resolve(httpResponseValue));

    test('Return value should be lines in an array', async () => {
      const lines = await provider.getFileLines();
      expect(lines.length).toEqual(2);
    });
  });
});
