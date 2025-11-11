import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';
import { BlogPost } from './blog';

// Initialize Notion client
const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const n2m = new NotionToMarkdown({ notionClient: notion });

const databaseId = process.env.NOTION_DATABASE_ID || '';

interface NotionPage {
  id: string;
  properties: {
    Title: {
      title: Array<{ plain_text: string }>;
    };
    Published: {
      checkbox: boolean;
    };
    Date: {
      date: { start: string } | null;
    };
    Excerpt: {
      rich_text: Array<{ plain_text: string }>;
    };
    Author?: {
      rich_text: Array<{ plain_text: string }>;
    };
    Tags: {
      multi_select: Array<{ name: string }>;
    };
    Slug: {
      rich_text: Array<{ plain_text: string }>;
    };
  };
}

export async function getPostsFromNotion(): Promise<BlogPost[]> {
  try {
    if (!databaseId) {
      console.warn('NOTION_DATABASE_ID not set, returning empty posts');
      return [];
    }

    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: 'Published',
        checkbox: {
          equals: true,
        },
      },
      sorts: [
        {
          property: 'Date',
          direction: 'descending',
        },
      ],
    });

    const posts: BlogPost[] = await Promise.all(
      response.results.map(async (page: any) => {
        const notionPage = page as NotionPage;

        // Get page content as markdown
        const mdblocks = await n2m.pageToMarkdown(page.id);
        const mdString = n2m.toMarkdownString(mdblocks);

        // Extract properties with proper null checks
        const title = notionPage.properties.Title?.title?.[0]?.plain_text || 'Untitled';
        const date = notionPage.properties.Date?.date?.start || new Date().toISOString().split('T')[0];
        const excerpt = notionPage.properties.Excerpt?.rich_text?.[0]?.plain_text || '';
        const author = notionPage.properties.Author?.rich_text?.[0]?.plain_text || 'Katie Kelly';
        const tags = notionPage.properties.Tags?.multi_select?.map((tag) => tag.name) || [];
        const slug = notionPage.properties.Slug?.rich_text?.[0]?.plain_text ||
                     title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

        return {
          slug,
          frontmatter: {
            title,
            date,
            excerpt,
            author,
            tags,
          },
          content: mdString.parent || '',
        };
      })
    );

    return posts;
  } catch (error) {
    console.error('Error fetching from Notion:', error);
    return [];
  }
}

export async function getPostBySlugFromNotion(slug: string): Promise<BlogPost | null> {
  const posts = await getPostsFromNotion();
  return posts.find((post) => post.slug === slug) || null;
}
