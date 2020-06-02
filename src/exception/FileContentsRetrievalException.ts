export default class FileContentsRetrievalException extends Error {
  public constructor(message = 'Could not retrieve Whazzup File Contents') {
    super(message);
  }
}
