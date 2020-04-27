const Api = require('../Api');

global.fetch = jest.fn();

describe('@micro-frontend/shared Api', () => {
  it('should make a GET request', async () => {
    global.fetch.mockReturnValueOnce(Promise.resolve({ json: () => {} }));
    const expectedOptions = {
      method: 'GET',
      credentials: 'same-origin',
    };

    await Api.get('mockUrl');

    expect(global.fetch).toHaveBeenCalledWith('mockUrl', expectedOptions);
  });

  it('should call json() on the response body', async () => {
    const json = jest.fn();
    global.fetch.mockReturnValueOnce(Promise.resolve({ json }));
    const expectedOptions = {
      method: 'GET',
      credentials: 'same-origin',
    };

    await Api.get('mockUrl');

    expect(global.fetch).toHaveBeenCalledWith('mockUrl', expectedOptions);
    expect(json).toHaveBeenCalled();
  });

  it('should throw if there is an error', async () => {
    global.fetch.mockReturnValueOnce(Promise.reject('someErr'));

    expect.assertions(1);
    try {
      await Api.get('someUrl');
    } catch (e) {
      expect(e).toMatch('someErr');
    }
  });
});
