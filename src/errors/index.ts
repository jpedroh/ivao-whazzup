export class IVAORequestError extends Error {
  public message: string;
  public errorInfo: any;
  constructor(errorInfo: any) {
    super();
    this.message = 'There was a problem accessing IVAO API';
    this.errorInfo = errorInfo;
  }
}