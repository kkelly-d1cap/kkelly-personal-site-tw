import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-4xl font-heading font-bold text-charcoal mb-6 mt-8">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-heading font-bold text-charcoal mb-4 mt-6">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-heading font-bold text-charcoal mb-3 mt-5">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="text-lg text-medium-gray leading-relaxed mb-4">
        {children}
      </p>
    ),
    a: ({ children, href }) => (
      <a
        href={href}
        className="text-orange hover:underline"
        target={href?.startsWith('http') ? '_blank' : undefined}
        rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside mb-4 text-medium-gray space-y-2">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside mb-4 text-medium-gray space-y-2">
        {children}
      </ol>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-orange pl-4 italic text-medium-gray my-4">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="bg-light-gray px-2 py-1 rounded text-sm font-mono">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-charcoal text-white p-4 rounded-lg overflow-x-auto mb-4">
        {children}
      </pre>
    ),
    ...components,
  };
}
