import { isTypedArray } from "./isTypedArray";

const toString = Object.prototype.toString;

export type JSType =
    | "array"
    | "bigint"
    | "boolean"
    | "function"
    | "null"
    | "number"
    | "object"
    | "string"
    | "symbol"
    | "undefined";

export function getTypeOf(value: unknown): JSType {
    // Treat TypedArrays as black boxes - they should be treated as arrays
    // without inspecting their contents during validation
    if (isTypedArray(value)) {
        return "array";
    }
    
    const type = toString.call(value).slice(8, -1).toLowerCase();
    if (type === "file") {
        return "object";
    }
    return type;
}
