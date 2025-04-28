const commitHash = process.env.GITHUB_SHA || 'unknown';
const buildDate = process.env.GITHUB_RUN_DATE || new Date().toISOString();

require('esbuild').build({
  entryPoints: ['src/index.jsx'],
  bundle: true,
  outfile: 'public/bundle.js',
  sourcemap: true,
  minify: true,
  define: {
    'process.env.COMMIT_HASH': JSON.stringify(commitHash),
    'process.env.BUILD_DATE': JSON.stringify(buildDate)
  }
}).catch(() => process.exit(1));
