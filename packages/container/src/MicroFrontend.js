import React from 'react';
import PropTypes from 'prop-types';
import separateAssets from './separateAssets';

const addEntryPoint = (entry, host, scriptId, cb) => {
  const script = document.createElement('script');
  script.id = scriptId;
  script.crossOrigin = '';
  script.src = `${host}/${entry}`;

  if (cb) script.onload = cb;

  document.head.appendChild(script);
};

const loadCSS = (host, path) => {
  const link = document.createElement('link');
  link.href = `${host}/${path}`;
  link.type = 'text/css';
  link.rel = 'stylesheet';
  link.media = 'screen,print';
  document.head.append(link);
};

class MicroFrontend extends React.Component {
  componentDidMount() {
    const { name, host } = this.props;
    const scriptId = `micro-frontend-script-${name}`;

    if (document.getElementById(scriptId)) {
      this.renderMicroFrontend();
      return;
    }

    // TODO: Harden this fetching => cb init
    // This occasionally fails due to a race condition
    // where the cb fires before all the JS has loaded
    fetch(`${host}/asset-manifest.json`)
      .then((res) => res.json())
      .then((manifest) => {
        const assets = separateAssets(manifest.entrypoints);
        const { js } = assets;
        addEntryPoint(js[0], host, scriptId);
        addEntryPoint(js[1], host, `micro-frontend-script-${name}-1`, this.renderMicroFrontend);
        addEntryPoint(js[2], host, `micro-frontend-script-${name}-2`);
        loadCSS(host, assets.css);
      });
  }

  componentWillUnmount() {
    const { name } = this.props;

    window[`unmount${name}`](`${name}-container`);
  }

  renderMicroFrontend = () => {
    const { name, history, store } = this.props;

    window[`render${name}`](`${name}-container`, history, store);
  };

  render() {
    const { name } = this.props;

    return <main id={`${name}-container`} />;
  }
}

MicroFrontend.propTypes = {
  history: PropTypes.shape({}),
  name: PropTypes.string,
  host: PropTypes.string,
  store: PropTypes.shape({}),
};

MicroFrontend.defaultProps = {
  history: null,
  name: '',
  host: '',
  store: null,
};

export default MicroFrontend;
