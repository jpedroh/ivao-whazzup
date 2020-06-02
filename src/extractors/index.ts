import GeneralInformationExtractor from './GeneralInformationExtractor';
import FileSessionExtractor from './FileSessionExtractor';

const extractors: FileSessionExtractor[] = [new GeneralInformationExtractor()];

export default extractors;
