const pkg = require('./package.json')

module.exports = {
    presets: [
      [
        "@babel/preset-env",
      ]
    ],
    plugins: [
      ["@babel/plugin-transform-runtime", 
        // {corejs: {version: 3, proposals: true}, useESModules: true} // (Not Recommended)
        {useESModules: false}
      ],
      ["polyfill-corejs3", { 
        "method": "usage-pure", 
        "version": pkg.dependencies['core-js-pure'],
        proposals: true,
      }]
    ],
}