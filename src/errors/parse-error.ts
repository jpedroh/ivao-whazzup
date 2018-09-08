export class ParseError extends Error {
    constructor(msg: string) {
        super(msg)
        Object.setPrototypeOf(this, ParseError.prototype)
    }
}
