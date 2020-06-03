import ConnectionType from '../enum/ConnectionType';

export default class Connection {
  public readonly type: ConnectionType;
  public readonly connectionTime: Date;
  public readonly serverName: string;
  public readonly protocolVersion: string;

  public constructor(type: ConnectionType, connectionTime: Date, serverName: string, protocolVersion: string) {
    this.type = type;
    this.connectionTime = connectionTime;
    this.serverName = serverName;
    this.protocolVersion = protocolVersion;
  }
}
