import IvaoWhazzupBuilder from './ivao-whazzup-builder'
import ApiFileContentsProvider from './file-contents-provider/api-file-contents-provider'
import Axios from 'axios'

const defaultFileContentsProvider = new ApiFileContentsProvider(Axios)

export default new IvaoWhazzupBuilder(defaultFileContentsProvider)
