module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        corejs: {version: '3.39.0', proposals: false},
        useBuiltIns: 'usage',
        targets: {
          browsers: ['ie >= 11'],
        },
      },
    ],
  ],
}