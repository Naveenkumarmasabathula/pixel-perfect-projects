import fs from 'fs';
import path from 'path';

function readSiteUrl(workspaceRoot) {
  const envSite = process.env.SITE_URL || process.env.VITE_SITE_URL;
  if (envSite) return envSite;

  try {
    const wranglerPath = path.join(workspaceRoot, 'dist', 'server', 'wrangler.json');
    if (fs.existsSync(wranglerPath)) {
      const data = JSON.parse(fs.readFileSync(wranglerPath, 'utf8'));
      const vars = data.vars || {};
      if (vars.SITE_URL) return vars.SITE_URL;
      if (vars.VITE_SITE_URL) return vars.VITE_SITE_URL;
    }
  } catch (error) {
    console.warn('Could not read SITE_URL from dist/server/wrangler.json:', error.message);
  }

  return 'http://localhost:3000';
}

const workspaceRoot = path.resolve(process.cwd());
const SITE_URL = readSiteUrl(workspaceRoot);
const routeGenPath = path.join(workspaceRoot, 'src', 'routeTree.gen.ts');
let routes = ['/'];

try {
  const content = fs.readFileSync(routeGenPath, 'utf8');
  // Try to extract the union of fullPaths: '/' | '/about' | '/contact' ...
  const m = content.match(/fullPaths:\s*([^\n]+)\n/);
  if (m && m[1]) {
    const union = m[1];
    const parts = union.split('|').map(s => s.trim().replace(/['|]/g, ''));
    routes = parts.filter(Boolean);
  } else {
    // Fallback: look for exported FileRoutesByFullPath keys
    const m2 = content.match(/export interface FileRoutesByFullPath \{([\s\S]*?)\}/);
    if (m2 && m2[1]) {
      const keys = Array.from(m2[1].matchAll(/'([^']+)'/g)).map(x => x[1]);
      if (keys.length) routes = keys;
    }
  }
} catch (err) {
  console.warn('Could not read routeTree.gen.ts, falling back to root only', err.message);
}

// Ensure unique and sorted
routes = Array.from(new Set(routes)).sort();

const urls = routes.map((p) => {
  const pathname = p === '/' ? '' : p;
  const loc = `${SITE_URL.replace(/\/$/, '')}${pathname}`;
  return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${new Date().toISOString().slice(0,10)}</lastmod>\n  </url>`;
}).join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

const publicDir = path.join(workspaceRoot, 'public');
if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir);
const outPath = path.join(publicDir, 'sitemap.xml');
fs.writeFileSync(outPath, xml);
console.log('Wrote sitemap.xml with', routes.length, 'routes to', outPath);

// Also write robots.txt if missing
const robotsPath = path.join(publicDir, 'robots.txt');
if (!fs.existsSync(robotsPath)) {
  const robots = `User-agent: *\nAllow: /\nSitemap: ${SITE_URL.replace(/\/$/, '')}/sitemap.xml\n`;
  fs.writeFileSync(robotsPath, robots);
  console.log('Wrote robots.txt to', robotsPath);
} else {
  console.log('robots.txt already exists, skipping write');
}

// Also copy generated files into `dist` so static hosts (Pages/Workers) serving build output can expose them
try {
  const distDir = path.join(workspaceRoot, 'dist');
  if (fs.existsSync(distDir)) {
    const distSitemap = path.join(distDir, 'sitemap.xml');
    const distRobots = path.join(distDir, 'robots.txt');
    fs.copyFileSync(outPath, distSitemap);
    console.log('Copied sitemap.xml to', distSitemap);
    if (fs.existsSync(robotsPath)) {
      fs.copyFileSync(robotsPath, distRobots);
      console.log('Copied robots.txt to', distRobots);
    }
  }
} catch (err) {
  console.warn('Failed to copy sitemap/robots to dist:', err.message);
}
