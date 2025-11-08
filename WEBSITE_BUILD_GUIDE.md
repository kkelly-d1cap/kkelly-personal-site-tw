# How We Built Katie Kelly's Personal Website: A Step-by-Step Guide

## Project Overview
Built a modern, professional personal website for a FinTech operations leader using Next.js, Tailwind CSS, and MDX for blogging.

## Tech Stack Selection

### Core Technologies
- **Next.js 14** (App Router) - React framework with server-side rendering
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **TypeScript** - Type safety and better developer experience
- **MDX** - Markdown with React components for blog posts

### Why These Choices?
- Next.js provides excellent SEO, fast page loads, and easy deployment
- Tailwind enables quick prototyping with consistent design
- MDX allows rich blog content with embedded React components
- TypeScript catches errors early and improves code quality

## Step 1: Project Setup

### Initialize Next.js Project
```bash
npx create-next-app@latest kkelly-personal-site-tw
# Selected options:
# - TypeScript: Yes
# - ESLint: Yes
# - Tailwind CSS: Yes
# - App Router: Yes
```

### Install Additional Dependencies
```bash
npm install @next/mdx @mdx-js/loader @mdx-js/react
npm install gray-matter reading-time
npm install @types/mdx
```

## Step 2: Design System

### Color Palette (tailwind.config.ts)
Defined custom colors aligned with personal brand:
- **charcoal** (#2C2C2C) - Primary text, headers
- **medium-gray** (#6B7280) - Secondary text
- **light-gray** (#F3F4F6) - Backgrounds, cards
- **orange** (#F97316) - Primary accent, CTAs
- **lime** (#84CC16) - Secondary accent, highlights

### Typography System
- **Headings**: Poppins (bold, modern, professional)
- **Body**: Inter (readable, clean)
- **Handwritten accents**: Caveat (personality, warmth)

### Spacing & Layout
- Max content width: 1280px
- Consistent padding: py-16 lg:py-24 for sections
- Responsive breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)

## Step 3: Component Architecture

### Reusable Components Created

#### Container Component
```typescript
// app/components/Container.tsx
// Provides consistent max-width and padding across all sections
```

#### Card Component
```typescript
// app/components/Card.tsx
// Reusable card pattern with hover effects
```

### Page Sections as Components
- **Hero** - Profile photo, headline, social links
- **About** - Professional summary with personality
- **Work** - Featured projects with impact metrics
- **Experience** - Timeline-based work history
- **Education** - Academic background
- **Contact/FindMe** - Social links and contact CTAs

## Step 4: Home Page Construction

### Layout Structure (app/page.tsx)
```typescript
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Work />
      <Experience />
      <EducationHighlights />
      <FindMe />
    </>
  );
}
```

### Hero Section Key Features
- Responsive profile image
- Dynamic headline with role/value prop
- Social media links (LinkedIn, GitHub, etc.)
- Mobile-first design with flexible layouts

### Content Strategy
- **Metrics-driven**: Quantified achievements (60% efficiency improvement, 25+ person team)
- **Storytelling**: Connected accomplishments to business outcomes
- **Personality**: Used handwritten font for warmth, balanced with professional tone
- **Skimmability**: Clear headings, bullet points, visual hierarchy

## Step 5: Blog Implementation

### MDX Setup (mdx-components.tsx)
Created custom components for rich blog content:
- Custom headings with consistent styling
- Styled links with hover effects
- Code blocks with syntax highlighting
- Callout boxes for important notes

### Blog Post Structure
```
app/blog/
├── posts/
│   ├── post-slug.mdx
│   └── ...
├── page.tsx (blog index)
└── [slug]/page.tsx (individual post)
```

### Blog Index Page (app/blog/page.tsx)
- Lists all posts with title, date, excerpt
- Reading time calculation
- Card-based layout
- Sorted by date (newest first)

### Individual Post Page (app/blog/[slug]/page.tsx)
- Dynamic routing based on filename
- Metadata extraction from frontmatter
- Responsive typography
- Related posts/navigation

### Blog Post Frontmatter
```markdown
---
title: "Post Title"
date: "2025-01-08"
excerpt: "Brief description for preview"
author: "Katie Kelly"
---
```

## Step 6: Navigation & Header

### Header Component Features
- Sticky navigation that stays visible on scroll
- Smooth scroll to page sections using anchor links
- Mobile hamburger menu
- Visual feedback on scroll (changes size/shadow)
- Centered navigation links on desktop

### Navigation Implementation
```typescript
const navigation = [
  { name: 'About', href: '/#about' },
  { name: 'Work', href: '/#work' },
  { name: 'Experience', href: '/#experience' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/#contact' },
];
```

**Key lesson**: Use `/#about` format (not `#about`) so navigation works from any page, not just homepage.

## Step 7: Application Page for Ramp

### Custom Application Page (app/application/ramp/page.tsx)
Created a standalone page showcasing fit for specific role:

#### Structure
1. **Hero Section** - Role title, company, profile with social links
2. **Empathy Hook** - Shows understanding of company's challenges
3. **Why I'm the Right Fit** - 6 key strength cards
4. **Pattern Recognition Callout** - Bridges experience to their needs
5. **Application Questions** - Detailed answers with examples
6. **Resources & Contact** - CTAs and thank you

#### Design Patterns Used
- **Callout boxes** with colored borders for emphasis
- **Metrics cards** with large numbers and context
- **Timeline/process breakdowns** for complex explanations
- **Border-left accent bars** to highlight key points

## Step 8: Responsive Design

### Mobile-First Approach
- Start with mobile layout (`flex-col`)
- Add responsive classes at breakpoints (`sm:flex-row`)
- Test on multiple screen sizes

### Key Responsive Patterns
```typescript
// Stacks vertically on mobile, horizontal on tablet+
className="flex flex-col sm:flex-row"

// Different text sizes by screen
className="text-xl md:text-2xl lg:text-3xl"

// Different padding by screen
className="py-12 lg:py-24"

// Grid columns adapt to screen size
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
```

### Mobile-Specific Fixes
- Hero icons move below profile on small screens
- Navigation collapses to hamburger menu
- Reduced font sizes and padding for mobile
- Touch-friendly button sizes (minimum 44x44px)

## Step 9: Performance Optimization

### Next.js Image Component
```typescript
<Image
  src="/website_photo.png"
  alt="Katie Kelly"
  width={256}
  height={256}
  className="object-cover"
  priority // Load hero image immediately
/>
```

### Benefits
- Automatic image optimization
- Responsive images (srcset)
- Lazy loading for off-screen images
- WebP format when browser supports it

### Font Optimization
- Self-hosted Google Fonts via next/font
- Font display swap for faster perceived load
- Subsetting to include only needed characters

## Step 10: Content Writing Strategy

### Effective Patterns We Used

#### Quantified Achievements
❌ "Improved team efficiency"
✅ "Improved efficiency by 60% (394 → 629 hours per employee)"

#### Specific Context
❌ "Led a large team"
✅ "Built a 25+ person, multi-manager CS organization from scratch in 12 months"

#### Problem → Solution → Impact
1. **Challenge**: Doing more with less during hypergrowth
2. **Solution**: 5-Part Operational Framework
3. **Impact**: 60% efficiency improvement

#### Authenticity
- Avoided corporate jargon
- Used conversational tone in handwritten sections
- Balanced professional credibility with personality
- Acknowledged messy reality ("keep moving fast" vs "execute flawlessly")

## Step 11: Deployment

### Vercel Deployment (Recommended)
```bash
# Connect GitHub repo to Vercel
# Auto-deploys on every push to main branch
```

### Build Command
```bash
npm run build
```

### Environment Variables
None needed for static site (add later if using CMS, analytics, etc.)

## Step 12: Iteration & Refinement

### Real Improvements Made
1. **Navigation fix**: Changed `#about` to `/#about` to work from blog page
2. **Mobile layout**: Moved hero icons below profile on small screens
3. **Empathy hook**: Reduced font size for subtlety, changed "flawlessly" to "keep moving fast"
4. **Metrics accuracy**: Updated onboarding timelines from "6 weeks to 10 days" to "3 months to 6 weeks"
5. **Organization details**: Added specific 12-month timeline and 50+ person team context

### Testing Checklist
- [ ] All navigation links work from every page
- [ ] Mobile responsive on 375px, 768px, 1024px, 1440px
- [ ] Images load and display correctly
- [ ] Blog posts render properly
- [ ] Forms work (if applicable)
- [ ] Fast load times (< 3 seconds)
- [ ] Accessible (keyboard navigation, alt text, semantic HTML)

## Key Takeaways

### What Worked Well
1. **Component-based architecture** - Easy to iterate and reuse
2. **Tailwind CSS** - Rapid prototyping without context switching
3. **Content-first approach** - Designed around the message, not vice versa
4. **Metrics-driven storytelling** - Numbers make impact tangible
5. **Mobile-first design** - Ensured great experience on all devices

### Common Pitfalls to Avoid
1. ❌ Using `#anchor` links that don't work across pages (use `/#anchor`)
2. ❌ Forgetting mobile testing (50%+ traffic is mobile)
3. ❌ Generic content without specifics or metrics
4. ❌ Too many colors/fonts (stick to 2-3 of each)
5. ❌ Not optimizing images (can slow site dramatically)

### Best Practices Applied
- **Semantic HTML**: Proper heading hierarchy (h1 → h2 → h3)
- **Accessibility**: Alt text, ARIA labels, keyboard navigation
- **SEO**: Meta descriptions, OpenGraph tags, semantic structure
- **Performance**: Image optimization, code splitting, lazy loading
- **User Experience**: Clear CTAs, intuitive navigation, fast load times

## Time Investment
- Initial setup: 1-2 hours
- Design system: 2-3 hours
- Home page sections: 4-6 hours
- Blog setup: 2-3 hours
- Application page: 3-4 hours
- Refinement & testing: 2-3 hours
- **Total**: ~15-20 hours for a professional, production-ready site

## Resources & Tools Used
- **Design inspiration**: Dribbble, Awwwards, personal sites of admired professionals
- **Colors**: Tailwind color palette generator
- **Fonts**: Google Fonts (Poppins, Inter, Caveat)
- **Icons**: Heroicons (built into Tailwind)
- **Hosting**: Vercel (free for personal sites)
- **Domain**: (optional) Namecheap, Google Domains

## Future Enhancements to Consider
1. **Analytics** - Add Google Analytics or Plausible
2. **CMS** - Add Sanity or Contentful for non-technical content updates
3. **Contact form** - Add Formspree or custom API route
4. **Newsletter** - Integrate ConvertKit or Buttondown
5. **Dark mode** - Add theme toggle
6. **Animations** - Add Framer Motion for subtle interactions
7. **Resume download** - PDF generation or static file
8. **Testimonials** - Add recommendations section
9. **Case studies** - Deep dives on major projects
10. **Search** - Add blog post search functionality

---

## Quick Start Guide for Replication

```bash
# 1. Create Next.js project
npx create-next-app@latest my-personal-site

# 2. Install dependencies
npm install @next/mdx @mdx-js/loader gray-matter reading-time

# 3. Set up Tailwind config with custom colors

# 4. Create component structure
mkdir app/components
# Create: Container, Card, Hero, About, Work, Experience, etc.

# 5. Build home page
# Compose sections in app/page.tsx

# 6. Set up blog
mkdir app/blog/posts
# Create blog index and dynamic route

# 7. Add navigation
# Create Header component with sticky behavior

# 8. Test responsive design
# Check mobile, tablet, desktop

# 9. Deploy to Vercel
# Connect GitHub repo and deploy

# 10. Iterate based on feedback
# Refine content, design, and functionality
```

---

**Bottom line**: A professional personal website is achievable in a weekend with the right tools and approach. Focus on clear messaging, clean design, and mobile responsiveness. The tech stack (Next.js + Tailwind) handles the hard parts so you can focus on content and storytelling.
