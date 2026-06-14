import fs from 'fs';
import https from 'https';
import path from 'path';

const articles = [
  {
    slug: 'supercharge-your-coding-with-aws-code-whisperer-in-vs-code',
    title: 'Supercharge Your Coding with AWS CodeWhisperer in VS Code',
    published_at: '2023-08-10T00:00:00.000Z',
    category: 'ai',
    tags: 'ai',
  },
  {
    slug: 'electronics-shop-hacker-rank-problem-java-script-solution',
    title: 'Electronics Shop - HackerRank Problem - JavaScript Solution',
    published_at: '2021-08-10T00:00:00.000Z',
    category: 'Algorithms',
    tags: 'algorithm, hacker-rank, program',
  },
  {
    slug: 'longest-common-prefix-program',
    title: 'Longest Common Prefix Program',
    published_at: '2021-05-10T00:00:00.000Z',
    category: 'JavaScript',
    tags: 'algorithm',
  },
  {
    slug: 'drawing-book-hacker-rank-problem',
    title: 'Drawing Book - HackerRank Problem - JavaScript Solution',
    published_at: '2021-04-10T00:00:00.000Z',
    category: 'JavaScript',
    tags: 'algorithm',
  },
  {
    slug: 'steps-to-integrate-ccavenue-payment-gateway-to-your-website-using-node-js-express-framework',
    title:
      'Steps to integrate CCAvenue Payment gateway to your website using Node.js - Express Framework',
    published_at: '2021-03-10T00:00:00.000Z',
    category: 'JavaScript',
    tags: 'cc-avenue',
  },
];

const fetchHtml = (url) =>
  new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        let data = '';
        res.on('data', (chunk) => (data += chunk));
        res.on('end', () => resolve(data));
      })
      .on('error', reject);
  });

async function run() {
  const outDir = path.join(process.cwd(), 'public', 'content', 'articles');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  for (const art of articles) {
    console.log(`Fetching ${art.slug}...`);
    try {
      const html = await fetchHtml(`https://aravin.net/article/${art.slug}`);

      // We will blindly extract what looks like the main content
      // It's inside <div class="prose max-w-screen-lg"> ... </div>
      let content = html.split('<div class="prose max-w-screen-lg">')[1];
      if (content) {
        content = content.split('<hr/>')[0]; // Split before the author footer
        content = content.split('<hr />')[0];
        content = content.trim();
        // Remove trailing </div>
        if (content.endsWith('</div>')) content = content.slice(0, -6).trim();
      } else {
        content = '<p>Content could not be automatically extracted. Please edit via Decap CMS.</p>';
      }

      const md = `---
title: "${art.title}"
slug: "${art.slug}"
category: "${art.category}"
tags: "${art.tags}"
published_at: "${art.published_at}"
---
${content}
`;
      fs.writeFileSync(path.join(outDir, `${art.slug}.md`), md);
      console.log(`Saved ${art.slug}.md`);
    } catch (err) {
      console.error(`Failed ${art.slug}: ${err.message}`);
    }
  }
}

run();
