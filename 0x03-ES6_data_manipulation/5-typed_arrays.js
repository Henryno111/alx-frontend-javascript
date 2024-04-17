export default function createInt8TypedArray(length, position, value) {
  // Validate position within the array bounds
  if (position < 0 || position >= length) {
    throw new RangeError('Position outside range');
  }

  // Create the ArrayBuffer with enough byte size for the Int8 array
  const buffer = new ArrayBuffer(length);

  // Create an Int8 typed array view on the buffer
  const int8Array = new Int8Array(buffer);

  // Set the value at the specified position
  int8Array[position] = value;

  return buffer;
}
