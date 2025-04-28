require('esbuild').build({
  entryPoints: ['src/index.jsx'],
  bundle: true,
  outfile: 'public/bundle.js',
  sourcemap: true,
  minify: true
}).catch(() => process.exit(1));