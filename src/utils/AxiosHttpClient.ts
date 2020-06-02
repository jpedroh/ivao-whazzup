import HttpClient from './HttpClient';
import Axios, { AxiosInstance } from 'axios';

export default class AxiosHttpClient implements HttpClient {
  private readonly axios: AxiosInstance;

  public constructor() {
    this.axios = Axios.create();
  }

  public async get<ResponseSchema>(url: string): Promise<ResponseSchema> {
    const { data } = await this.axios.get<ResponseSchema>(url);
    return data;
  }
}
