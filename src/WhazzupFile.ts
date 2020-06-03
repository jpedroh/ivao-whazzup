import GeneralInformation from './models/GeneralInformation';
import Server from './models/Server';

export default class WhazzupFile {
  readonly generalInformation: GeneralInformation;
  readonly servers: Server[];
}
