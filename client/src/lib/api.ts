// Mock API that reads local markdown files instead of Strapi

// Basic Frontmatter parser since we don't have gray-matter in the browser
function parseFrontmatter(markdown: string) {
  const match = markdown.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { attributes: {}, content: markdown };

  const frontmatter = match[1];
  const content = match[2];

  const attributes: any = {};
  frontmatter.split('\n').forEach((line) => {
    const splitIndex = line.indexOf(':');
    if (splitIndex > -1) {
      const key = line.slice(0, splitIndex).trim();
      let value = line.slice(splitIndex + 1).trim();
      if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1);
      attributes[key] = value;
    }
  });

  return { attributes, content };
}

const TAG_COLORS = [
  '#ef4444', // red-500
  '#f97316', // orange-500
  '#eab308', // yellow-500
  '#22c55e', // green-500
  '#0ea5e9', // sky-500
  '#3b82f6', // blue-500
  '#6366f1', // indigo-500
  '#a855f7', // purple-500
  '#ec4899', // pink-500
];

function getTagColor(tag: string) {
  let hash = 0;
  for (let i = 0; i < tag.length; i++) {
    hash = tag.charCodeAt(i) + ((hash << 5) - hash);
  }
  return TAG_COLORS[Math.abs(hash) % TAG_COLORS.length];
}

const markdownFiles = import.meta.glob('/src/content/articles/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
});

export async function fetchAPI(path: string, urlParamsObject: any = {}): Promise<any> {
  if (path === '/articles') {
    const articles = Object.keys(markdownFiles)
      .map((filepath) => {
        const rawContent = markdownFiles[filepath] as string;
        const parsed = parseFrontmatter(rawContent);

        const slug = filepath.split('/').pop()?.replace('.md', '');
        parsed.attributes.slug = parsed.attributes.slug || slug;

        // If a slug is provided in the query, we can filter it
        if (urlParamsObject?.filters?.slug) {
          if (parsed.attributes.slug !== urlParamsObject.filters.slug) return null;
        }

        return {
          id: Object.keys(markdownFiles).indexOf(filepath) + 1, // numeric id for sorting
          attributes: {
            ...parsed.attributes,
            content: parsed.content,
            // Mock nested structures required by the old components
            category: { data: { attributes: { name: parsed.attributes.category || 'Blog' } } },
            tags: {
              data: parsed.attributes.tags
                ? parsed.attributes.tags.split(',').map((t: string) => ({
                    attributes: { slug: t.trim(), name: t.trim(), color: getTagColor(t.trim()) },
                  }))
                : [],
            },
            createdAt: parsed.attributes.published_at || new Date().toISOString(),
          },
        };
      })
      .filter(Boolean);

    // Sort articles by created/published date descending (recently created first)
    articles.sort((a: any, b: any) => {
      const dateA = new Date(a.attributes.createdAt).getTime();
      const dateB = new Date(b.attributes.createdAt).getTime();
      return dateB - dateA;
    });

    return { data: articles };
  }

  if (path === '/categories') {
    return { data: [{ attributes: { name: 'Blog', slug: 'blog' } }] };
  }

  if (path === '/global') {
    return {
      data: {
        attributes: {
          favicon: '/favicon.ico',
          defaultSeo: {
            metaTitle: 'Aravin.net',
            metaDescription: 'My Portfolio and Blog',
            shareImage: '/Aravin.png',
          },
        },
      },
    };
  }

  return { data: [] };
}
