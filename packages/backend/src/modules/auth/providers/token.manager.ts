import { CryptManager } from "./crypt.manager";

export abstract class TokenManager<T> extends CryptManager<T> {
    abstract decode(token: string): T;

    abstract encode(payload: T): string;
}
