import { readFile, writeFile, mkdir } from 'node:fs/promises';

// Static route heads let crawlers and link unfurlers read metadata without running the app.
const pages = JSON.parse(await readFile('src/data/metadata.json', 'utf8'));
const template = await readFile('dist/index.html', 'utf8');
const escape = value => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');

const breadcrumbName = segment =>
  segment
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');

for (const [route, [title, description]] of Object.entries(pages)) {
  const url = `https://doviralabs.com${route === '/' ? '/' : route}`;
  const fullTitle = escape(`Dovira Labs — ${title}`);

  const graph = [
    {
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: `Dovira Labs — ${title}`,
      description,
      isPartOf: { '@id': 'https://doviralabs.com/#website' },
      publisher: { '@id': 'https://doviralabs.com/#organization' },
    },
  ];

  if (route === '/founder') {
    graph.push({
      '@type': 'Person',
      '@id': 'https://doviralabs.com/founder#person',
      name: 'Danish Sheikh',
      url: 'https://doviralabs.com/founder',
      jobTitle: 'Founder & Developer',
      worksFor: { '@id': 'https://doviralabs.com/#organization' },
    });
    graph[0].mainEntity = { '@id': 'https://doviralabs.com/founder#person' };
  }

  if (route === '/projects/app-lock') {
    graph.push({
      '@type': 'SoftwareApplication',
      '@id': 'https://doviralabs.com/projects/app-lock#software',
      name: 'App Lock',
      applicationCategory: 'UtilitiesApplication',
      operatingSystem: 'Android',
      url: 'https://doviralabs.com/projects/app-lock',
      publisher: { '@id': 'https://doviralabs.com/#organization' },
      description: 'App Lock is an Android app from Dovira Labs currently being prepared for release.',
    });
    graph[0].mainEntity = { '@id': 'https://doviralabs.com/projects/app-lock#software' };
  }

  if (route !== '/') {
    const segments = route.split('/').filter(Boolean);
    const itemListElement = [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://doviralabs.com/',
      },
    ];

    let currentPath = '';
    segments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      itemListElement.push({
        '@type': 'ListItem',
        position: index + 2,
        name: index === segments.length - 1 ? title : breadcrumbName(segment),
        item: `https://doviralabs.com${currentPath}`,
      });
    });

    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumbs`,
      itemListElement,
    });
    graph[0].breadcrumb = { '@id': `${url}#breadcrumbs` };
  }

  const routeSchema = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': graph,
  }).replaceAll('</script', '<\\/script');

  const html = template
    .replace(/<title>.*?<\/title>/, `<title>${fullTitle}</title>`)
    .replace(/(<meta\s+name="description"\s+content=")[^"]*"/, `$1${escape(description)}"`)
    .replace(/(<meta\s+property="og:title"\s+content=")[^"]*"/, `$1${fullTitle}"`)
    .replace(/(<meta\s+property="og:description"\s+content=")[^"]*"/, `$1${escape(description)}"`)
    .replace(/(<meta\s+property="og:url"\s+content=")[^"]*"/, `$1${url}"`)
    .replace(/(<link\s+rel="canonical"\s+href=")[^"]*"/, `$1${url}"`)
    .replace('</head>', `    <script type="application/ld+json" id="route-structured-data">${routeSchema}</script>\n  </head>`);

  const directory = route === '/' ? 'dist' : `dist${route}`;
  await mkdir(directory, { recursive: true });
  await writeFile(`${directory}/index.html`, html);
}
console.log(`Generated metadata and structured data for ${Object.keys(pages).length} routes.`);
