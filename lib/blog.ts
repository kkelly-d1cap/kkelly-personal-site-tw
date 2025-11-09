import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { getPostsFromNotion, getPostBySlugFromNotion } from './notion';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  slug: string;
  frontmatter: {
    title: string;
    date: string;
    excerpt: string;
    author?: string;
    tags?: string[];
  };
  content: string;
}

// Check if Notion is configured
const isNotionConfigured = () => {
  return !!(process.env.NOTION_API_KEY && process.env.NOTION_DATABASE_ID);
};

// Get posts from files (fallback)
function getPostsFromFiles(): BlogPost[] {
  // Check if blog directory exists
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter(fileName => {
      // Only include .mdx and .md files
      if (!(fileName.endsWith('.mdx') || fileName.endsWith('.md'))) {
        return false;
      }
      // Exclude files that start with uppercase letters (templates/docs)
      // But allow files that start with digits or lowercase
      const firstChar = fileName[0];
      if (firstChar >= 'A' && firstChar <= 'Z') {
        return false;
      }
      return true;
    })
    .map(fileName => {
      const slug = fileName.replace(/\.mdx?$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        frontmatter: data as BlogPost['frontmatter'],
        content,
      };
    })
    .filter(post => {
      // Only include posts with valid frontmatter
      return post.frontmatter.title && post.frontmatter.date && post.frontmatter.excerpt;
    });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.frontmatter.date < b.frontmatter.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getPosts(): Promise<BlogPost[]> {
  // Use Notion if configured, otherwise fallback to files
  if (isNotionConfigured()) {
    return await getPostsFromNotion();
  }
  return getPostsFromFiles();
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  // Use Notion if configured, otherwise fallback to files
  if (isNotionConfigured()) {
    return await getPostBySlugFromNotion(slug);
  }
  const posts = getPostsFromFiles();
  return posts.find(post => post.slug === slug) || null;
}
