import { cp, mkdir } from 'node:fs/promises';
import path from 'node:path';

const routes = ['login', 'booking', 'dashboard'];
const distDirectory = path.resolve('dist');
const indexFile = path.join(distDirectory, 'index.html');

for (const route of routes) {
  const routeDirectory = path.join(distDirectory, route);
  await mkdir(routeDirectory, { recursive: true });
  await cp(indexFile, path.join(routeDirectory, 'index.html'));
}
