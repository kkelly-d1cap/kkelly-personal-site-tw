# Notion → Blog Quick Start

## The 5-Minute Workflow

### Step 1: Write in Notion
Write your blog post naturally in Notion. Use:
- Headings (H2, H3)
- Bullet points
- Code blocks
- Images
- Quotes

### Step 2: Add Frontmatter at TOP
Copy this to the very beginning of your Notion page:

```
---
title: 'Your Post Title'
date: '2025-01-08'
excerpt: 'Brief description for blog index'
author: 'Katie Kelly'
tags: ['Tag1', 'Tag2']
---
```

### Step 3: Export from Notion
1. Click `•••` → Export
2. Choose "Markdown & CSV"
3. Click Export
4. Unzip the downloaded file

### Step 4: Prepare File
1. Rename file: `my-post-slug.mdx` (change `.md` to `.mdx`)
2. Move to: `/content/blog/`

### Step 5: Handle Images (if any)
1. Move exported images to: `/public/blog-images/`
2. Update image paths in .mdx:
   ```markdown
   ![Description](/blog-images/image-name.png)
   ```

### Step 6: Deploy
```bash
git add content/blog/my-post-slug.mdx
git commit -m "Add blog post: Title"
git push
```

Done! 🎉

---

## Common Issues & Fixes

**Issue**: Post doesn't appear on blog
- Check frontmatter is properly formatted (especially the `---` lines)
- Ensure date format is YYYY-MM-DD
- File extension must be `.mdx` or `.md`

**Issue**: Images don't show
- Images must be in `/public/blog-images/`
- Path must start with `/` like `/blog-images/name.png`
- Check spelling of image filename

**Issue**: Formatting looks weird
- Remove any extra blank lines Notion adds
- Check that code blocks use triple backticks
- Ensure headings start with `##` (not `#`)

---

## Pro Tips

✅ **Test locally first**: Run `npm run dev` and check `localhost:3000/blog`

✅ **Use descriptive file names**: They become the URL
- Good: `building-personal-website.mdx`
- Bad: `blog-post-1.mdx`

✅ **Keep tags consistent**: Reuse existing tags when possible

✅ **Write compelling excerpts**: This is what people see on the blog index

✅ **Date format matters**: Use YYYY-MM-DD (e.g., 2025-01-08, not 01/08/2025)

---

## Example Notion Page Setup

```
---
title: 'How to Scale Operations Teams'
date: '2025-01-08'
excerpt: 'Five proven strategies for scaling operations without sacrificing quality.'
author: 'Katie Kelly'
tags: ['Operations', 'Leadership', 'Scaling']
---

## Introduction

Your intro paragraph here...

## Strategy 1: Hire for Adaptability

Content here...

### Why This Works

Sub-section...

## Key Takeaways

- Takeaway 1
- Takeaway 2

## Conclusion

Wrap up...
```

---

**Questions?** Check the full template: `BLOG_POST_TEMPLATE.md`
