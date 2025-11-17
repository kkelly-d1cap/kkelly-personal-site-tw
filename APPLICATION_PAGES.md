# Application Pages System

This system allows you to create custom job application pages that automatically expire after a specified date, keeping your website clean without manual cleanup.

## Overview

- **Automatic expiration**: Pages redirect to homepage after expiration date
- **Reusable templates**: Preserve content structure for future applications
- **Easy management**: Single configuration file controls all application pages

## Quick Start

### 1. Check Current Status

All application pages are configured in `content/applicationPages.ts`:

```typescript
{
  slug: 'ramp',              // URL: /application/ramp
  company: 'Ramp',
  role: 'Head of Customer Success',
  expiresAt: new Date('2025-01-31'),  // Auto-redirects after this date
  isActive: false,           // Set to false to manually disable
}
```

**Current status**: The Ramp application page is set to expire on **January 31, 2025** and is currently **inactive** (isActive: false).

### 2. Create a New Application Page

#### Step 1: Copy the Template
```bash
cp -r app/application/_template app/application/[company-slug]
```

Example for a Stripe application:
```bash
cp -r app/application/_template app/application/stripe
```

#### Step 2: Register in Configuration
Edit `content/applicationPages.ts` and add:

```typescript
{
  slug: 'stripe',  // Must match folder name
  company: 'Stripe',
  role: 'VP of Customer Success',
  expiresAt: new Date('2025-06-30'),
  isActive: true,
}
```

#### Step 3: Customize the Content
Edit `app/application/stripe/page.tsx`:

1. Update the `pageSlug` constant:
   ```typescript
   const pageSlug = 'stripe';  // Must match slug in config
   ```

2. Choose your application pattern:
   - **Pattern 1 (Full)**: Keep all sections including Application Questions
   - **Pattern 2 (General)**: Remove Application Questions, keep strength cards
   - **Pattern 3 (Minimal)**: Just Hero + 3-4 strengths + Contact

3. Customize the content:
   - Company name and role title
   - Value proposition
   - Strengths and achievements (add/remove cards as needed)
   - Application questions and answers (if applicable)
   - Thank you message

**Note**: Application Questions section is optional! Delete it if not needed (see template comments).

#### Step 4: Test
```bash
npm run dev
```

Visit: `http://localhost:3000/application/stripe`

## Managing Existing Pages

### Manually Disable a Page
Set `isActive: false` in `content/applicationPages.ts`:

```typescript
{
  slug: 'ramp',
  // ... other fields
  isActive: false,  // Page will redirect immediately
}
```

### Extend Expiration Date
Update the `expiresAt` date:

```typescript
{
  slug: 'ramp',
  // ... other fields
  expiresAt: new Date('2025-12-31'),  // New expiration date
}
```

### Re-activate an Expired Page
Update both the expiration date and active status:

```typescript
{
  slug: 'ramp',
  // ... other fields
  expiresAt: new Date('2026-01-31'),
  isActive: true,
}
```

## Application Page Patterns

The template supports three common patterns:

### Pattern 1: Full Application (Like Ramp)
**Use when**: Job posting has specific application questions

**Includes**:
- Hero section
- Empathy hook
- 6 strength cards
- Key achievement callout
- Pattern recognition
- Detailed Q&A section
- Resources & contact

**Example**: See `app/application/ramp/page.tsx`

### Pattern 2: General Application
**Use when**: Applying through standard job portals or no specific questions

**Includes**:
- Hero section
- Empathy hook
- 4-6 strength cards
- Key achievement callout
- Resources & contact

**To create**: Copy template and delete the Application Questions section

### Pattern 3: Minimal Pitch
**Use when**: Quick referrals, networking, or informal applications

**Includes**:
- Hero section
- 3-4 strength cards
- Resources & contact

**To create**: Copy template and delete Application Questions, Pattern Recognition, and extra callouts

## How It Works

1. **Configuration File** (`content/applicationPages.ts`):
   - Central registry of all application pages
   - Defines expiration dates and active status
   - Exports helper functions to check page status

2. **Page Component** (e.g., `app/application/ramp/page.tsx`):
   - Checks if page is active on load
   - Redirects to homepage if expired or inactive
   - Renders content if still active

3. **Template** (`app/application/_template/`):
   - Provides starter structure for new pages
   - Modular sections (core + optional)
   - Clear comments showing what can be removed

## Expiration Logic

A page is considered **active** when BOTH conditions are true:
- `isActive === true`
- Current date < `expiresAt` date

If either condition is false, visitors are redirected to the homepage.

## Tips

1. **Set realistic expiration dates**: 30-90 days after applying is typical
2. **Keep content specific**: Tailor each page to the specific role and company
3. **Use metrics**: Quantify achievements wherever possible
4. **Reference the Ramp page**: Use it as inspiration for structure and content
5. **Test before sharing**: Always verify the page works before sending the link

## Example Timeline

1. **Day 0**: Apply to job, create application page
   ```typescript
   expiresAt: new Date('2025-03-15')  // 60 days from now
   isActive: true
   ```

2. **Day 30**: Still in interview process - extend if needed
   ```typescript
   expiresAt: new Date('2025-04-30')
   isActive: true
   ```

3. **Day 45**: Received rejection or offer
   - If rejected: Leave it to auto-expire
   - If accepted: Can keep as portfolio piece, extend expiration

4. **Day 60**: Page automatically redirects to homepage

## Troubleshooting

**Page immediately redirects to homepage**:
- Check `isActive` is set to `true` in `content/applicationPages.ts`
- Verify `expiresAt` date is in the future
- Ensure `pageSlug` in the component matches the `slug` in config

**Build fails**:
- Make sure the `pageSlug` variable matches a slug in `applicationPages.ts`
- Check for TypeScript errors in your custom content

**Changes not showing**:
- Restart the dev server (`npm run dev`)
- Clear browser cache
- Check you're editing the correct file

## Files Reference

- **Config**: `content/applicationPages.ts` - Central registry
- **Ramp Page**: `app/application/ramp/page.tsx` - Original example
- **Template**: `app/application/_template/` - Starter for new pages
- **This Guide**: `APPLICATION_PAGES.md` - Documentation
