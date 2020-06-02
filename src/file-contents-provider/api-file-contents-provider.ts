import FileContentsRetrievalException from '../exception/FileContentsRetrievalException'
import HttpClient from '../utils/HttpClient'
import FileContentsProvider from './file-contents-provider'

export default class ApiFileContentsProvider implements FileContentsProvider {
  private static readonly API_URL =
    'https://api.ivao.aero/getdata/whazzup/whazzup.txt'
  private http: HttpClient

  public constructor(http: HttpClient) {
    this.http = http
  }

  public async getFileLines(): Promise<string[]> {
    try {
      const data = await this.http.get<string>(ApiFileContentsProvider.API_URL)
      return data.split('\n')
    } catch (error) {
      throw new FileContentsRetrievalException()
    }
  }
}
