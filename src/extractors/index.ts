import GeneralInformationExtractor from './GeneralInformationExtractor';
import FileSectionExtractor from './FileSectionExtractor';
import ServersExtractor from './ServersExtractor';
import AirportsExtractor from './AirportsExtractor';

const extractors: FileSectionExtractor[] = [
  new GeneralInformationExtractor(),
  new ServersExtractor(),
  new AirportsExtractor(),
];

export default extractors;
