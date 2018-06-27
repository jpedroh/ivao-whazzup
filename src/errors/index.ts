export class IVAORequestError extends Error {
  message: string;
  errorInfo: any;
  constructor(errorInfo: any) {
    super();
    this.message = 'There was a problem accessing IVAO API';
    this.errorInfo = errorInfo;
  }
}