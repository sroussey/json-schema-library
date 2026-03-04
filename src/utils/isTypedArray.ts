export function isTypedArray(value: unknown): value is Uint8Array | Uint16Array | Uint32Array | Int8Array | Int16Array | Int32Array | Float32Array | Float64Array {
    return ArrayBuffer.isView(value) && !(value instanceof DataView);
}
