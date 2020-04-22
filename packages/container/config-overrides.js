const { override, addWebpackExternals } = require('customize-cra');

module.exports = override(
  addWebpackExternals({
    react: 'React',
    'react-dom': 'ReactDOM',
  }),
);
