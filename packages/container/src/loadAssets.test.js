import loadAssets from './loadAssets';

const entrypoints = [
  'static/js/runtime-main.4f1d040a.js',
  'static/js/2.c3660d72.chunk.js',
  'static/css/main.26614081.chunk.css',
  'static/js/main.62a4d834.chunk.js',
];

describe('loadAssets', () => {
  test('should filter js assets', () => {
    expect(loadAssets(entrypoints)).toEqual([
      'static/js/runtime-main.4f1d040a.js',
      'static/js/2.c3660d72.chunk.js',
      'static/js/main.62a4d834.chunk.js',
    ]);
  });
});
