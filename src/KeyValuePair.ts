/**
 * Represents a Key Value pair of a Dictionary
 */
export class KeyValuePair<K extends keyof any, V> {
    readonly Key: K;
    readonly Value: V;

    constructor(key: K, value: V) {
        this.Key = key;
        this.Value = value;
    }
}