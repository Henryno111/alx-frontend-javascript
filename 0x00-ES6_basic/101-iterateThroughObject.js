/* eslint-disable */
export default function iterateThroughObject(reportWithIterator) {
  let result = '';
  let nextEmployee = reportWithIterator.next();

  while (!nextEmployee.done) {
    result += nextEmployee.value + ' | ';
    nextEmployee = reportWithIterator.next();
  }

  // Remove the last ' | ' characters
  result = result.slice(0, -3);

  return result;
}
