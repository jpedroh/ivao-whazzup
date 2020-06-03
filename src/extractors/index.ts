import GeneralInformationExtractor from './GeneralInformationExtractor';
import FileSectionExtractor from './FileSectionExtractor';
import ServersExtractor from './ServersExtractor';
import AirportsExtractor from './AirportsExtractor';
import ClientsExtractor from './ClientsExtractor';

const extractors: FileSectionExtractor[] = [
  new GeneralInformationExtractor(),
  new ServersExtractor(),
  new AirportsExtractor(),
  new ClientsExtractor(),
];

export default extractors;
