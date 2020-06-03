import GeneralInformation from './models/GeneralInformation';
import Server from './models/Server';
import Airport from './models/Airport';
import Client from './models/Client';

export default class WhazzupFile {
  readonly generalInformation: GeneralInformation;
  readonly clients: Client[];
  readonly servers: Server[];
  readonly airports: Airport[];
}
