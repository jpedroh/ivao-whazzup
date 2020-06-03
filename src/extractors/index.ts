import GeneralInformationExtractor from './GeneralInformationExtractor';
import FileSectionExtractor from './FileSectionExtractor';
import ServersExtractor from './ServersExtractor';

const extractors: FileSectionExtractor[] = [new GeneralInformationExtractor(), new ServersExtractor()];

export default extractors;
