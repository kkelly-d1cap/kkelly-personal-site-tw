# Blog Post Template

## Before You Start in Notion

1. Write your post in Notion normally
2. When ready to publish, copy the frontmatter below to the TOP of your Notion page
3. Export as Markdown & CSV
4. Rename the file to match your desired URL slug (e.g., `my-post-title.mdx`)
5. Move to `/content/blog/` folder
6. Commit and push

---

## Frontmatter Template (Copy this to top of Notion page)

```
---
title: 'Your Post Title Here'
date: '2025-01-08'
excerpt: 'A compelling 1-2 sentence description that appears on the blog index. Make it enticing!'
author: 'Katie Kelly'
tags: ['Tag1', 'Tag2', 'Tag3']
---
```

**Field Guide:**
- **title**: The H1 heading (will display at top of post)
- **date**: Format YYYY-MM-DD (newest posts appear first)
- **excerpt**: Shows on blog index page - make it compelling!
- **author**: Your name (optional, defaults to you)
- **tags**: 2-5 relevant tags (Operations, Leadership, FinTech, etc.)

---

## Notion Export Steps

### In Notion:
1. Click the `•••` menu in top right
2. Select "Export"
3. Choose "Markdown & CSV" format
4. Click "Export"
5. Unzip the downloaded file

### On Your Computer:
1. Find the exported `.md` file
2. Rename to `.mdx` extension
3. Move to `/content/blog/` in your website repo
4. If you have images:
   - Move images to `/public/blog-images/`
   - Update image paths in the .mdx file to `/blog-images/filename.png`

---

## Writing Tips for Blog Posts

### Headings
- Use ## for main sections
- Use ### for subsections
- Don't use # (that's reserved for the title from frontmatter)

### Images
- In Notion, embed images normally
- After export, move images to `/public/blog-images/`
- Update the markdown image path: `![Alt text](/blog-images/your-image.png)`

### Code Blocks
- Use triple backticks in Notion
- Specify language for syntax highlighting:
  ```bash
  npm install
  ```

### Lists
- Bullet points and numbered lists work as expected
- Can be nested

### Quotes
- Use `>` for blockquotes
- Will render with orange left border

### Links
- `[Link text](https://url.com)` format
- External links automatically open in new tab

---

## Recommended Tags

Choose from these existing tags (or create new ones):

- Operations
- Leadership
- FinTech
- Team Building
- Scaling
- Process Improvement
- Career Advice
- Web Development
- Tutorial
- Lessons Learned

---

## Sample Blog Post Structure

```markdown
---
title: 'How I Built My Personal Website in a Weekend'
date: '2025-01-08'
excerpt: 'A practical guide to building a professional personal website using Next.js and Tailwind CSS, complete with blog and application pages.'
author: 'Katie Kelly'
tags: ['Web Development', 'Tutorial', 'Career Advice']
---

## Introduction

Brief intro that hooks the reader...

## The Challenge

What problem were you solving?

## The Approach

How did you tackle it?

### Step 1: Planning
Details...

### Step 2: Execution
Details...

## Key Lessons Learned

- Lesson 1
- Lesson 2
- Lesson 3

## Conclusion

Wrap it up with actionable takeaway...
```

---

## File Naming Convention

**Good file names:**
- `building-personal-website.mdx`
- `scaling-operations-teams.mdx`
- `5-frameworks-for-efficiency.mdx`

**Bad file names:**
- `Blog Post 1.mdx` (spaces, not descriptive)
- `MY_NEW_POST.mdx` (all caps, underscores)
- `post-2025-01-08.mdx` (date in filename is redundant)

**Rule**: Use lowercase, hyphens between words, descriptive of content

---

## Checklist Before Publishing

- [ ] Frontmatter is complete and properly formatted
- [ ] Date is correct (YYYY-MM-DD)
- [ ] Excerpt is compelling and under 2 sentences
- [ ] Tags are relevant (2-5 tags)
- [ ] File renamed to `.mdx` extension
- [ ] Images moved to `/public/blog-images/` (if applicable)
- [ ] Image paths updated in markdown
- [ ] Proofread for typos
- [ ] Preview locally with `npm run dev`
- [ ] Commit and push to deploy

---

## Need Help?

- Check existing post: `/content/blog/scaling-operations-teams.mdx`
- Blog styling: MDX components auto-style headings, links, quotes, code
- Questions? Test locally first with `npm run dev` and visit `localhost:3000/blog`
