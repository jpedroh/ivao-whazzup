import GeneralInformation from './models/GeneralInformation';
import Server from './models/Server';
import Airport from './models/Airport';

export default class WhazzupFile {
  readonly generalInformation: GeneralInformation;
  readonly servers: Server[];
  readonly airports: Airport[];
}
