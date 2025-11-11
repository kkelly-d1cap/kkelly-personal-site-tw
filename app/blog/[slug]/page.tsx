import { notFound } from 'next/navigation';
import { getPosts, getPostBySlug } from '@/lib/blog';
import Container from '@/app/components/Container';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';

// Revalidate every hour (3600 seconds)
export const revalidate = 3600;

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.frontmatter.title} - Katie Kelly`,
    description: post.frontmatter.excerpt,
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white py-20">
        <Container>
          <article className="max-w-3xl mx-auto">
            <header className="mb-12">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-charcoal mb-4">
                {post.frontmatter.title}
              </h1>
              <div className="flex items-center gap-4 text-medium-gray">
                <time dateTime={post.frontmatter.date}>
                  {new Date(post.frontmatter.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                {post.frontmatter.author && (
                  <>
                    <span>•</span>
                    <span>{post.frontmatter.author}</span>
                  </>
                )}
              </div>
              {post.frontmatter.tags && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {post.frontmatter.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs bg-light-gray text-medium-gray px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </header>

            <div className="prose prose-lg max-w-none">
              <MDXRemote
                source={post.content}
                options={{
                  mdxOptions: {
                    remarkPlugins: [remarkGfm],
                    rehypePlugins: [rehypeHighlight],
                  },
                }}
              />
            </div>
          </article>
        </Container>
      </main>
      <Footer />
    </>
  );
}
