import React from 'react';
import PropTypes from 'prop-types';

const addEntryPoint = (entry, host, scriptId, cb) => {
  const script = document.createElement('script');
  script.id = scriptId;
  script.crossOrigin = '';
  script.src = `${host}/${entry}`;

  if (cb) script.onload = cb;

  document.head.appendChild(script);
};

class MicroFrontend extends React.Component {
  componentDidMount() {
    const { name, host } = this.props;
    const scriptId = `micro-frontend-script-${name}`;

    if (document.getElementById(scriptId)) {
      this.renderMicroFrontend();
      return;
    }

    fetch(`${host}/asset-manifest.json`)
      .then((res) => res.json())
      .then((manifest) => {
        addEntryPoint(manifest.entrypoints[0], host, scriptId);
        addEntryPoint(
          manifest.entrypoints[1],
          host,
          `micro-frontend-script-${name}-1`,
          this.renderMicroFrontend,
        );
        addEntryPoint(manifest.entrypoints[2], host, `micro-frontend-script-${name}-2`);
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