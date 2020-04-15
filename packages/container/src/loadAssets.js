const loadAssets = (entrypoints = []) => {
  const js = entrypoints.filter((path) => {
    return !/.+\.css/.test(path);
  });
  const css = entrypoints.filter((path) => {
    return /.+\.css/.test(path);
  });
  return { js, css };
};

export default loadAssets;
