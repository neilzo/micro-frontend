class Api {
  static get(url, options) {
    const combinedOptions = {
      method: 'GET',
      credentials: 'same-origin',
      ...options,
    };

    return fetch(url, combinedOptions).then(Api.handleResponse).catch(Api.handleErrors);
  }
  static handleResponse(response) {
    return response.json();
  }
  static handleErrors(err) {
    console.error(err);
    throw err;
  }
}

export default Api;
