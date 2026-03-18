import { build as esbuild } from 'esbuild';
import { TsconfigPathsPlugin } from '@esbuild-plugins/tsconfig-paths';
import fs from 'fs';
import JSZip from 'jszip';
import { resolve } from 'path';

const root = process.cwd();
const distDir = resolve(root, 'dist');
const outputFile = resolve(distDir, 'index.js');
const zipFile = resolve(distDir, 'lambda.zip');

const isProd = process.argv.includes('--prod');

/** Remove previous build output and zip so we start clean */
async function cleanPreviousBuildAndZip(): Promise<void> {
  await fs.promises.rm(distDir, { recursive: true, force: true });
  await fs.promises.mkdir(distDir, { recursive: true });
}

async function buildLambda(): Promise<void> {
  await esbuild({
    entryPoints: [resolve(root, 'src/index.ts')],
    outfile: outputFile,
    bundle: true,
    platform: 'node',
    target: 'node22',
    format: 'cjs',
    sourcemap: !isProd,
    minify: isProd,
    legalComments: 'none',
    logLevel: 'info',
    tsconfig: resolve(root, 'tsconfig.json'),
    plugins: [
      TsconfigPathsPlugin({
        tsconfig: resolve(root, 'tsconfig.json'),
      }),
    ],
  });
}

async function zipDist(): Promise<void> {
  const zip = new JSZip();
  zip.file('index.js', fs.readFileSync(outputFile));
  const mapFile = `${outputFile}.map`;
  if (fs.existsSync(mapFile)) {
    zip.file('index.js.map', fs.readFileSync(mapFile));
  }
  const buffer = await zip.generateAsync({ type: 'nodebuffer' });
  fs.writeFileSync(zipFile, buffer);
}

async function build(): Promise<void> {
  await cleanPreviousBuildAndZip();
  await buildLambda();
  await zipDist();

  console.log(`Built Lambda: ${outputFile}`);
  console.log(`Created zip: ${zipFile}`);
}

build().catch((error) => {
  console.error(error);
  process.exit(1);
});
