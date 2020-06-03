export default class Server {
  /**
   * An unique identification of the server.
   */
  public readonly ident: string;

  /**
   * Host name or IP address of the server
   */
  public readonly host: string;

  /**
   * Physical location of the server.
   */
  public readonly location: string;

  /**
   * A descriptive name of the server.
   */
  public readonly name: string;

  /**
   * A flag indicating if connections to this server are allowed or not.
   */
  public readonly clientConnectionsAllowed: boolean;

  /**
   * Maximum number of connections to this server.
   */
  public readonly maximumConnections: number;

  public constructor(
    ident: string,
    host: string,
    location: string,
    name: string,
    clientConnectionsAllowed: boolean,
    maximumConnections: number,
  ) {
    this.ident = ident;
    this.host = host;
    this.location = location;
    this.name = name;
    this.clientConnectionsAllowed = clientConnectionsAllowed;
    this.maximumConnections = maximumConnections;
  }
}
