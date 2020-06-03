import Connection from '../vos/Connection';
import Member from '../vos/Member';
import Position from '../vos/Position';
import Software from '../vos/Software';

export default class Client {
  public readonly callsign: string;
  public readonly member: Member;
  public readonly position: Position;
  public readonly connection: Connection;
  public readonly software: Software;

  public constructor(
    callsign: string,
    member: Member,
    position: Position,
    connection: Connection,
    software: Software,
  ) {
    this.callsign = callsign;
    this.member = member;
    this.position = position;
    this.connection = connection;
    this.software = software;
  }
}
