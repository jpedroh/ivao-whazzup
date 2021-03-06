import ApiFileContentsProvider from '../../../src/providers/ApiFileContentsProvider';
import FileContentsRetrievalException from '../../../src/exception/FileContentsRetrievalException';

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

  describe('Given server responds with an error', () => {
    httpClientMock.get.mockRejectedValueOnce(() => Promise.reject());

    test('It should encapsulate error into a FileContentsRetrievalException', async () => {
      await expect(provider.getFileLines()).rejects.toThrowError(FileContentsRetrievalException);
    });
  });
});
