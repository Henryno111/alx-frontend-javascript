/* eslint-disabled */
export default function cleanSet(mySet, startString) {
  // Use filter to create a new array with elements starting with startString
  const filteredValues = Array.from(mySet).filter((value) => value.startsWith(startString))
    .map((value) => value.slice(startString.length));

  // Join the filtered values with a hyphen (-) separator
  return filteredValues.join('-');
}
