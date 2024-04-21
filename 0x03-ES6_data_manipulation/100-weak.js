/* eslint-disabled */
export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  // Check if the endpoint is already tracked in the weakMap
  if (!weakMap.has(endpoint)) {
    // If not, initialize the count to 0
    weakMap.set(endpoint, 0);
  }

  // Increment the count for the endpoint
  const count = weakMap.get(endpoint) + 1;
  weakMap.set(endpoint, count);

  // Check if the count is greater than or equal to 5
  if (count >= 5) {
    // If so, throw an error
    throw new Error('Endpoint load is high');
  }
}
