import { Indexable } from "Indexable";
import { KeyValuePair } from "KeyValuePair";

/**
 * Interface for dictionary type objects
 */
export interface IDictionary<K extends keyof any, V> {
    _dict: Indexable<K, V>;
    getValue(key: K) : V;
    setValue(key: K, value: V) : void;
    empty() : void;
    clear(key: K) : boolean;
    containsKey(key: K) : boolean;
    forEach(callback: (pair: KeyValuePair<K, V>) => void) : void
}
