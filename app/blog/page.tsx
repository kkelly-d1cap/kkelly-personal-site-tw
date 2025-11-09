import Link from 'next/link';
import { getPosts } from '@/lib/blog';
import Container from '@/app/components/Container';
import Card from '@/app/components/Card';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export const metadata = {
  title: 'Blog - Katie Kelly',
  description: 'Insights on FinTech operations, leadership, and scaling teams',
};

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-light-gray py-20">
        <Container>
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-charcoal mb-4">
            Blog
          </h1>
          <p className="text-xl text-medium-gray mb-12 max-w-2xl">
            Insights on FinTech operations, leadership, and scaling teams
          </p>

          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-medium-gray">
                No blog posts yet. Check back soon!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map(post => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <Card hover className="h-full flex flex-col">
                    <h2 className="font-handwritten text-2xl mb-3 text-charcoal">
                      {post.frontmatter.title}
                    </h2>
                    <p className="text-sm text-medium-gray mb-3">
                      {new Date(post.frontmatter.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                    <p className="text-medium-gray mb-4 flex-grow">
                      {post.frontmatter.excerpt}
                    </p>
                    {post.frontmatter.tags && (
                      <div className="flex flex-wrap gap-2">
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
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </Container>
      </main>
      <Footer />
    </>
  );
}
