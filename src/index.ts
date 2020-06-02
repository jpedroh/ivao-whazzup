import IvaoWhazzupBuilder from './IvaoWhazzupBuilder';
import ApiFileContentsProvider from './providers/ApiFileContentsProvider';
import AxiosHttpClient from './utils/AxiosHttpClient';
import sessionExtractors from './extractors';

const defaultContentsProvider = new ApiFileContentsProvider(new AxiosHttpClient());

export default new IvaoWhazzupBuilder(defaultContentsProvider, sessionExtractors);
