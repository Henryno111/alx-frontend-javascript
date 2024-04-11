/* eslint-default */
export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    // Simulating an API call with a setTimeout
    setTimeout(() => {
      const positive = { message: 'True' };
      resolve(positive);
    }, 2000);
  });
}
