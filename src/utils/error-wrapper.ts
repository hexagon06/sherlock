import { equals } from './equals';

export class ErrorWrapper {
    constructor(public readonly error: any) { }

    equals(other: any) {
        return this === other ||
            other instanceof ErrorWrapper && equals(this.error, other.error);
    }
}
