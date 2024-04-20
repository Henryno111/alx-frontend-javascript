export default function cleanSet(mySet, startString) {
  if (typeof startString !== 'string') return '';
  const setValues = Array.from(mySet);
  console.log(setValues);
  const filteredValues = setValues.filter((value) => {
    if (!value) return false;
    return value.startsWith(startString);
  });
  console.log(filteredValues);
  const mappedValues = filteredValues.map((value) => value.slice(startString.length));

  return mappedValues.join('-');
}
