module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        corejs: {version: '3.37.1', proposals: false},
        useBuiltIns: 'usage',
        targets: {
          browsers: ['ie >= 11'],
        },
      },
    ],
  ],
}