// https://github.com/vitejs/vite/blob/master/src/node/config.ts

const viteSSRPlugin = require('vite-ssr/plugin')

module.exports = {
  plugins: [viteSSRPlugin],
  // `Tip:\nMake sure your "dependencies" only include packages that you\n` +
  // `intend to use in the browser. If it's a Node.js package, it\n` +
  // `should be in "devDependencies".\n\n` +
  // `If you do intend to use this dependency in the browser and the\n` +
  // `dependency does not actually use these Node built-ins in the\n` +
  // `browser, you can add the dependency (not the built-in) to the\n` +
  // `"optimizeDeps.allowNodeBuiltins" option in vite.config.js.\n\n` +
  // `If that results in a runtime error, then unfortunately the\n` +
  // `package is not distributed in a web-friendly format. You should\n` +
  // `open an issue in its repo, or look for a modern alternative.`
  optimizeDeps: {
    exclude: ['express', 'rimraf']
  }
}