/**
 * Package for AWS Lambda deploy (dist + node_modules in zip).
 * Use when you need dependencies loaded from node_modules at runtime.
 * Creates lambda.zip with dist/, node_modules/, and package.json.
 * Handler in Lambda: dist/index.handler (or index.handler if you deploy with dist as root).
 * Run after: npm run build
 */
import { execSync } from 'node:child_process';
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import JSZip from 'jszip';

const root = process.cwd();
const outZip = path.join(root, 'lambda.zip');

const excludeFromNodeModules = new Set(['.cache']);

function addDirToZip(zip: JSZip, dirPath: string, zipPath: string): void {
  const entries = readdirSync(dirPath, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dirPath, e.name);
    const rel = path.join(zipPath, e.name);
    if (e.isDirectory()) {
      if (zipPath === 'node_modules' && excludeFromNodeModules.has(e.name)) continue;
      addDirToZip(zip, full, rel);
    }
    else {
      zip.file(rel, readFileSync(full));
    }
  }
}

async function main(): Promise<void> {
  execSync('npm run build', { cwd: root, stdio: 'inherit' });

  const zip = new JSZip();
  addDirToZip(zip, path.join(root, 'dist'), 'dist');
  addDirToZip(zip, path.join(root, 'node_modules'), 'node_modules');
  zip.file('package.json', readFileSync(path.join(root, 'package.json')));

  const buffer = await zip.generateAsync({ type: 'nodebuffer' });
  writeFileSync(outZip, buffer);

  console.log('Created', outZip);
  console.log('Lambda handler: dist/index.handler');
  console.log('Runtime: nodejs20.x or nodejs22.x');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
