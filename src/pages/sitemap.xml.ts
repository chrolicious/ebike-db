const SITE = 'https://crossergids.nl';

const pages = [
  ['/', '2026-05-01', 'weekly', '1.0'],
  ['/wetgeving/', '2026-05-01', 'monthly', '0.8'],
  ['/elektrische-crosser-kopen/', '2026-05-01', 'monthly', '0.8'],
  ['/elektrische-crosser-rijbewijs/', '2026-05-01', 'monthly', '0.7'],
  ['/vergelijk/', '2026-05-01', 'weekly', '0.9'],
  ['/dealers/', '2026-05-01', 'monthly', '0.6'],
  ['/speed-pedelec-vs-bromfiets/', '2026-05-01', 'monthly', '0.7'],
  ['/sur-ron-vs-talaria/', '2026-05-01', 'monthly', '0.7'],

  // Product pages
  ['/surron-light-bee-x/', '2026-05-01', 'monthly', '0.8'],
  ['/talaria-sting-mx5-pro/', '2026-05-01', 'monthly', '0.8'],
  ['/segway-dirt-ebike-x260/', '2026-05-01', 'monthly', '0.8'],
  ['/super73-s2/', '2026-05-01', 'monthly', '0.8'],
  ['/ktm-freeride-e-xc/', '2026-05-01', 'monthly', '0.7'],
  ['/zero-fx/', '2026-05-01', 'monthly', '0.7'],
  ['/stealth-h52/', '2026-05-01', 'monthly', '0.7'],
  ['/onyx-rcr/', '2026-05-01', 'monthly', '0.7'],
  ['/cake-kalk-or/', '2026-05-01', 'monthly', '0.7'],
  ['/ubco-2x2-work-bike/', '2026-05-01', 'monthly', '0.7'],
  ['/himiway-cobra/', '2026-05-01', 'monthly', '0.7'],
  ['/rad-power-radrunner-2/', '2026-05-01', 'monthly', '0.7'],
  ['/eskimo-fat-26/', '2026-05-01', 'monthly', '0.7'],
  ['/surron-storm-bee/', '2026-05-01', 'monthly', '0.7'],
  ['/bafang-ultra-m620/', '2026-05-01', 'monthly', '0.6'],

  // Nederland pages
  ['/surron-light-bee-x-nederland/', '2026-05-01', 'monthly', '0.8'],
  ['/talaria-sting-nederland/', '2026-05-01', 'monthly', '0.8'],
  ['/segway-dirt-ebike-x260-nederland/', '2026-05-01', 'monthly', '0.8'],
  ['/super73-s2-nederland/', '2026-05-01', 'monthly', '0.8'],
  ['/ktm-freeride-e-xc-nederland/', '2026-05-01', 'monthly', '0.7'],
  ['/zero-fx-nederland/', '2026-05-01', 'monthly', '0.7'],
  ['/surron-storm-bee-nederland/', '2026-05-01', 'monthly', '0.7'],
  ['/onyx-rcr-nederland/', '2026-05-01', 'monthly', '0.7'],
  ['/cake-kalk-or-nederland/', '2026-05-01', 'monthly', '0.7'],
  ['/ubco-2x2-nederland/', '2026-05-01', 'monthly', '0.7'],
  ['/himiway-cobra-nederland/', '2026-05-01', 'monthly', '0.7'],
  ['/rad-power-radrunner-2-nederland/', '2026-05-01', 'monthly', '0.7'],
  ['/eskimo-fat-26-nederland/', '2026-05-01', 'monthly', '0.7'],

  // Comparison pages
  ['/vergelijk/surron-light-bee-x-vs-talaria-sting-mx5-pro/', '2026-05-01', 'monthly', '0.7'],
  ['/vergelijk/surron-light-bee-x-vs-segway-dirt-ebike-x260/', '2026-05-01', 'monthly', '0.7'],
  ['/vergelijk/super73-s2-vs-himiway-cobra/', '2026-05-01', 'monthly', '0.7'],
  ['/vergelijk/ktm-freeride-e-xc-vs-zero-fx/', '2026-05-01', 'monthly', '0.7'],
  ['/vergelijk/surron-light-bee-x-vs-surron-storm-bee/', '2026-05-01', 'monthly', '0.7'],
  ['/vergelijk/talaria-sting-mx5-pro-vs-segway-dirt-ebike-x260/', '2026-05-01', 'monthly', '0.7'],
  ['/vergelijk/himiway-cobra-vs-rad-power-radrunner-2/', '2026-05-01', 'monthly', '0.6'],
  ['/vergelijk/onyx-rcr-vs-super73-s2/', '2026-05-01', 'monthly', '0.6'],
];

export async function GET() {
  const urls = pages
    .map(([loc, lastmod, changefreq, priority]) =>
      `  <url>
    <loc>${SITE}${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
