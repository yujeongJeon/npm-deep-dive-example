import pkg from './package.json' with { type: "json" };

export default {
    presets: [
      [
        "@babel/preset-env",
        {
          // debug: true, // For Debugging
          modules: false, // ESModule. Make into disable when 'ie >= 9'.
        }
      ]
    ],
    plugins: [
      ["@babel/plugin-transform-runtime", 
        // {corejs: {version: 3, proposals: true}, useESModules: true} // (Not Recommended)
        {useESModules: true} // ESModule. Make into disable when 'ie >= 9'.
      ],
      ["polyfill-corejs3", { 
        "method": "usage-pure", 
        "version": pkg.dependencies['core-js-pure'],
        "proposals": true,
      }]
    ],
}