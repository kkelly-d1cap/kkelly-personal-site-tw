# Notion Blog Setup Guide

Your blog now supports **Notion integration**! Write posts in Notion and they'll automatically appear on your website.

## Quick Start (5 minutes)

### Step 1: Create a Notion Integration

1. Go to [https://www.notion.so/my-integrations](https://www.notion.so/my-integrations)
2. Click **"+ New integration"**
3. Name it: `Katie Kelly Blog`
4. Select your workspace
5. Click **Submit**
6. Copy the **Internal Integration Token** (starts with `secret_`)
7. Save this token - you'll need it in Step 3

### Step 2: Create Your Blog Database in Notion

1. In Notion, create a new **database** (full page)
2. Name it: `Blog Posts`
3. Add these properties (exact names matter):

| Property Name | Type | Required | Notes |
|--------------|------|----------|-------|
| **Title** | Title | ✅ Yes | Auto-created, your post title |
| **Published** | Checkbox | ✅ Yes | Check to publish, uncheck to hide |
| **Date** | Date | ✅ Yes | Publication date (YYYY-MM-DD) |
| **Excerpt** | Text | ✅ Yes | Short description for blog index |
| **Slug** | Text | ✅ Yes | URL slug (e.g., "my-blog-post") |
| **Tags** | Multi-select | No | Post tags |
| **Author** | Text | No | Defaults to "Katie Kelly" |

4. **Connect your integration to this database:**
   - Click the `•••` menu in top right of the database
   - Select **"Connect to"**
   - Choose your **Katie Kelly Blog** integration

5. **Get your Database ID:**
   - Look at your database URL in the browser
   - It looks like: `https://notion.so/YOUR_WORKSPACE/DATABASE_ID?v=...`
   - Copy the `DATABASE_ID` part (32 characters, letters and numbers)
   - Example: `a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6`

### Step 3: Add Environment Variables

1. Open `.env.local` in your project
2. Add your credentials:

```bash
NOTION_API_KEY=secret_your_integration_token_here
NOTION_DATABASE_ID=your_database_id_here
```

3. Save the file

### Step 4: Test It!

1. Create a test post in your Notion database:
   - **Title:** "My First Notion Post"
   - **Published:** ✅ Checked
   - **Date:** Today's date
   - **Excerpt:** "Testing Notion integration"
   - **Slug:** "my-first-notion-post"
   - **Tags:** Operations, Test

2. Write some content in the Notion page

3. Run your dev server:
   ```bash
   npm run dev
   ```

4. Visit `http://localhost:3000/blog`
   - You should see your post!

5. Click it to view the full post

## How to Publish a New Post

1. **Open your Blog Posts database in Notion**
2. **Click "New"** to create a new page
3. **Fill in the properties:**
   - Title: Your post title
   - Published: ✅ Check this box
   - Date: Publication date
   - Excerpt: 1-2 sentence summary
   - Slug: URL-friendly version (lowercase, dashes)
   - Tags: Choose or create tags
4. **Write your content** in the Notion page
   - Use headings, lists, code blocks, etc.
   - Add images (they'll be included)
5. **Check the Published box**
6. **Done!** Your post is live

## How to Unpublish a Post

1. Open the post in Notion
2. Uncheck the **Published** checkbox
3. The post will disappear from your website

## Notion Formatting Tips

### Supported Formatting

✅ **Headings** (H1, H2, H3)
✅ **Bold** and *italic*
✅ Lists (bulleted and numbered)
✅ Code blocks with syntax highlighting
✅ Quotes
✅ Images
✅ Links
✅ Dividers

### Not Yet Supported

❌ Callouts (will show as regular text)
❌ Toggles (will expand automatically)
❌ Databases (won't render)
❌ Embeds (may not work)

### Best Practices

- **Use H2 (##) for main sections** - Don't use H1, that's your title
- **Keep excerpt short** - 1-2 sentences max
- **Use descriptive slugs** - `implementing-80-20-rule` not `post-1`
- **Add tags consistently** - Reuse existing tags when possible
- **Set dates correctly** - YYYY-MM-DD format (Notion handles this)

## Troubleshooting

### "No blog posts yet" shows on the blog page

**Check:**
- Is the **Published** checkbox checked?
- Are the property names spelled exactly right? (case-sensitive)
- Is the database connected to your integration?
- Are the environment variables set correctly in `.env.local`?

**Debug:**
```bash
# In your terminal
npm run dev
```
Check the console for any error messages

### Post doesn't update after editing in Notion

**Solution:**
- Rebuild your site: `npm run build`
- In production, this happens automatically on each deployment
- For local dev, restart the dev server

### Images don't show

**Issue:** Notion image URLs expire
**Solution:**
- Download images from Notion
- Upload to `/public/blog-images/` in your repo
- Reference as: `![Description](/blog-images/image.png)`

### Can I use both Notion AND file-based posts?

**No** - The system uses Notion if configured, files otherwise. Pick one approach.

To switch back to files:
1. Remove or comment out the env vars in `.env.local`
2. Put `.mdx` files back in `/content/blog/`

## Example Notion Post Template

Here's what a complete post looks like in Notion:

**Database Properties:**
- **Title:** "The 80/20 Rule for Operations"
- **Published:** ✅
- **Date:** 2025-01-08
- **Excerpt:** "How we increased output by 20% while reducing headcount by 25%"
- **Slug:** "80-20-rule-for-operations"
- **Tags:** Operations, Scaling, Leadership
- **Author:** Katie Kelly

**Page Content:**
```
## The Problem

Your content here...

## The Solution

More content...

### Step 1: Do This

Details...

## Conclusion

Wrap up...
```

## Need Help?

- The blog will fall back to file-based posts if Notion isn't configured
- Check the browser console and terminal for errors
- Make sure database property names match exactly (case-sensitive)
- Verify your integration has access to the database

---

**You're all set!** Start writing in Notion and your blog will auto-update. 🎉
