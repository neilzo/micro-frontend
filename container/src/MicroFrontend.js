import React from 'react';

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
    const { name, host, document } = this.props;
    const scriptId = `micro-frontend-script-${name}`;

    if (document.getElementById(scriptId)) {
      this.renderMicroFrontend();
      return;
    }

    fetch(`${host}/asset-manifest.json`)
      .then((res) => res.json())
      .then((manifest) => {
        addEntryPoint(manifest.entrypoints[0], host, scriptId);
        addEntryPoint(manifest.entrypoints[1], host, `micro-frontend-script-${name}-1`, this.renderMicroFrontend);
        addEntryPoint(manifest.entrypoints[2], host, `micro-frontend-script-${name}-2`);
      });
  }

  componentWillUnmount() {
    const { name, window } = this.props;

    window[`unmount${name}`](`${name}-container`);
  }

  renderMicroFrontend = () => {
    const { name, window, history } = this.props;

    window[`render${name}`](`${name}-container`, history);
  };

  render() {
    return <main id={`${this.props.name}-container`} />;
  }
}

MicroFrontend.defaultProps = {
  document,
  window,
};

export default MicroFrontend;
