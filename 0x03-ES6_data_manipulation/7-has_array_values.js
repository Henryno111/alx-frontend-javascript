/* eslint-disabled */
export default function hasValuesFromArray(mySet, myArray) {
  // Check if any element in the array is not found in the set
  return myArray.every((element) => mySet.has(element));
}
