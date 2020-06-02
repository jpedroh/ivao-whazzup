export default class TotalConnections {
  /**
   * The total number of clients connected to the server at this moment.
   */
  public readonly clients: number;

  /**
   * The total number of servers connected to the server at this moment.
   */
  public readonly servers: number;

  /**
   * The total number of airports  connected to the server at this moment.
   */
  public readonly airports: number;

  public constructor(clients: number, servers: number, airports: number) {
    this.clients = clients;
    this.servers = servers;
    this.airports = airports;
  }
}
