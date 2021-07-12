const webpack = require('webpack');

module.exports = {
  resolve: {
    // Use our versions of Node modules.
    alias: {
      'fs': 'browserfs/dist/shims/fs.js',
      'buffer': 'browserfs/dist/shims/buffer.js',
      'path': 'browserfs/dist/shims/path.js',
      'processGlobal': 'browserfs/dist/shims/process.js',
      'bufferGlobal': 'browserfs/dist/shims/bufferGlobal.js',
      'bfsGlobal': require.resolve('browserfs'),
      'util': require.resolve('util/'),
      'os': require.resolve('os-browserify/browser'),
      'stream': require.resolve('stream-browserify'),
      'readline': require.resolve('readline'),
    },
    fallback: {
      'util': require.resolve('util/'),
      'os': require.resolve('os-browserify/browser'),
      'stream': require.resolve('stream-browserify'),
      'readline': require.resolve('readline'),
    }
  },
  plugins: [
    // Expose BrowserFS, process, and Buffer globals.
    // NOTE: If you intend to use BrowserFS in a script tag, you do not need
    // to expose a BrowserFS global.
    new webpack.ProvidePlugin({ BrowserFS: 'bfsGlobal', process: 'processGlobal', Buffer: 'bufferGlobal' })
  ],
  // module: {
  //   rules: [
  //     {
  //       test: /\.(sass|less|css)$/,
  //       loader: 'style-loader', //, 'css-loader', 'less-loader']
  //     }
  //   ]
  // },
  externals: {
    fsevents: "require('fsevents')"
  },
  // DISABLE Webpack's built-in process and Buffer polyfills!
  // node: {
  //   process: false,
  //   Buffer: false
  // }
  node: false,
};