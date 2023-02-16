/**
 * A indexable type that represents a key value pair
 */
export type Indexable<K extends keyof any, V> = {[key in K]: V};