import React from 'react';

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
        console.log(manifest);

        // TODO: loop through entrypoints instead
        const script = document.createElement('script');
        script.id = scriptId;
        script.crossOrigin = '';
        script.src = `${host}/${manifest.entrypoints[0]}`;
        document.head.appendChild(script);

        const script3 = document.createElement('script');
        script3.id = scriptId + 3;
        script3.crossOrigin = '';
        script3.src = `${host}/${manifest.entrypoints[1]}`;
        script3.onload = this.renderMicroFrontend;
        document.head.appendChild(script3);

        const script2 = document.createElement('script');
        script2.id = scriptId + 2;
        script2.crossOrigin = '';
        script2.src = `${host}/${manifest.entrypoints[2]}`;
        document.head.appendChild(script2);
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
