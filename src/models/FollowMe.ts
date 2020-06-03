import Client from './Client';

export default class FollowMe extends Client {
  public constructor(baseClient: Client) {
    super(baseClient.callsign, baseClient.member, baseClient.position, baseClient.connection, baseClient.software);
  }
}
