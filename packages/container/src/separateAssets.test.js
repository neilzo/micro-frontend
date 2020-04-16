import separateAssets from './separateAssets';

const entrypoints = [
  'static/js/runtime-main.4f1d040a.js',
  'static/js/2.c3660d72.chunk.js',
  'static/css/main.26614081.chunk.css',
  'static/js/main.62a4d834.chunk.js',
];

describe('separateAssets', () => {
  test('should separate css and js assets', () => {
    expect(separateAssets(entrypoints)).toEqual({
      css: ['static/css/main.26614081.chunk.css'],
      js: [
        'static/js/runtime-main.4f1d040a.js',
        'static/js/2.c3660d72.chunk.js',
        'static/js/main.62a4d834.chunk.js',
      ],
    });
  });
});
