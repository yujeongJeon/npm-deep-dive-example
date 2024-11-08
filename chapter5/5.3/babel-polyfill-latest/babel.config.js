import pkg from './package.json'  with { type: "json" };

export default {
    presets: [
      [
        "@babel/preset-env",
        {
          debug: true,
          modules: false, 
        }
      ]
    ],
    plugins: [
      ["@babel/plugin-transform-runtime", 
        {corejs: {version: 3, proposals: true}, useESModules: true} // (Not Recommended)
        // {useESModules: true}
      ],
      // ["polyfill-corejs3", { 
      //   "method": "usage-pure", 
      //   "version": pkg.dependencies['core-js-pure'],
      //   proposals: true,
      // }]
    ],
}