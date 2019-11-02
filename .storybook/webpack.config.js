module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve("babel-loader")
      }
    ]
  });
  config.resolve.extensions.push(".ts", ".tsx");

  config.module.rules.push({
    test: /\.stories\.tsx?$/,
    loaders: [
      {
        loader: require.resolve("@storybook/source-loader"),
        options: { parser: "typescript" }
      }
    ],
    enforce: "pre"
  });

  return config;
};
