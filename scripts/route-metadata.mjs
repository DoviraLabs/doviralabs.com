import { readFile, writeFile, mkdir } from 'node:fs/promises';

// Static route heads let link unfurlers read metadata without running the app.
const pages = JSON.parse(await readFile('src/data/metadata.json', 'utf8'));
const template = await readFile('dist/index.html', 'utf8');
const escape = value => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');
for (const [route, [title, description]] of Object.entries(pages)) {
  const url = `https://doviralabs.com${route}`;
  const fullTitle = escape(`Dovira Labs — ${title}`);
  const html = template
    .replace(/<title>.*?<\/title>/, `<title>${fullTitle}</title>`)
    .replace(/(<meta\s+name="description"\s+content=")[^"]*"/, `$1${escape(description)}"`)
    .replace(/(<meta\s+property="og:title"\s+content=")[^"]*"/, `$1${fullTitle}"`)
    .replace(/(<meta\s+property="og:description"\s+content=")[^"]*"/, `$1${escape(description)}"`)
    .replace(/(<meta\s+property="og:url"\s+content=")[^"]*"/, `$1${url}"`)
    .replace(/(<link\s+rel="canonical"\s+href=")[^"]*"/, `$1${url}"`);
  const directory = route === '/' ? 'dist' : `dist${route}`;
  await mkdir(directory, { recursive: true });
  await writeFile(`${directory}/index.html`, html);
}
console.log(`Generated metadata for ${Object.keys(pages).length} routes.`);
