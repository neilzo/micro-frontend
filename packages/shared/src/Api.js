class Api {
  static request(url, options) {
    return fetch(url, options).then(Api.handleResponse).catch(Api.handleErrors);
  }
  static get(url, options) {
    const combinedOptions = {
      method: 'GET',
      credentials: 'same-origin',
      ...options,
    };

    return Api.request(url, combinedOptions);
  }
  static post(url, body, options) {
    const combinedOptions = {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body),
      ...options,
    };

    return Api.request(url, combinedOptions);
  }
  static handleResponse(response) {
    return response.json();
  }
  static handleErrors(err) {
    console.error(err);
    throw err;
  }
}

module.exports = Api;
