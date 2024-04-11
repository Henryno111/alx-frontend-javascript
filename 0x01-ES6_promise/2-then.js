/* eslint-disable */
export default function handleResponseFromApi(promise) {
    return promise.then(response => {
        console.log('Got a response from the API');
        return {
            status: 200,
            body: 'success'
        };
    }).catch(error => {
        console.error('Got a response from the API:', error);
        return new Error();
    });
}
