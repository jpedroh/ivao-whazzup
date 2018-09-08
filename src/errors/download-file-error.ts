export class DownloadFileError extends Error {
    constructor(msg: string) {
        super(msg)
        Object.setPrototypeOf(this, DownloadFileError.prototype)
    }
}
