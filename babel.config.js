module.exports = api => {
  api.cache(true);

  const presets = ['@babel/preset-env', '@babel/preset-react'];

  const plugins = [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-transform-runtime',
    'react-hot-loader/babel',
  ];

  return {
    presets,
    plugins,
    env: {
      test: {
        plugins: ['rewire'],
      },
    },
  };
};
