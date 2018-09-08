export class BuildModelsError extends Error {
    constructor(msg: string) {
        super(msg)
        Object.setPrototypeOf(this, BuildModelsError.prototype)
    }
}
