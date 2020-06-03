export default interface HttpClient {
  get<ResponseSchema>(url: string): Promise<ResponseSchema>;
}
