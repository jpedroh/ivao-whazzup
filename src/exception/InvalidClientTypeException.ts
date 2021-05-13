export default class InvalidClientTypeException extends Error {
  public constructor(message = 'Invalid client type provided') {
    super(message);
    Object.setPrototypeOf(this, InvalidClientTypeException.prototype);
  }
}
