export default function setFromArray(array) {
  // Use the spread operator (...) to pass the array elements to the Set constructor
  return new Set([...array]);
}
