# Application Page Template

This template provides a reusable structure for creating custom job application pages.

## How to Create a New Application Page

### 1. Copy the Template
```bash
cp -r app/application/_template app/application/[company-slug]
```

For example, for a Stripe application:
```bash
cp -r app/application/_template app/application/stripe
```

### 2. Register in Configuration
Add an entry to `content/applicationPages.ts`:

```typescript
{
  slug: 'stripe',  // Must match the folder name
  company: 'Stripe',
  role: 'VP of Customer Success',
  expiresAt: new Date('2025-12-31'),  // When to auto-hide the page
  isActive: true,  // Set to false to manually disable
}
```

### 3. Customize the Content
Edit `app/application/[company-slug]/page.tsx`:

- Update the company name and role title
- Customize the "Why I'm the Right Fit" section
- Tailor the application questions and answers
- Adjust callouts and metrics

### 4. Test the Page
```bash
npm run dev
```

Visit: `http://localhost:3000/application/[company-slug]`

## Expiration Behavior

Pages automatically redirect to the homepage when:
- The current date is past `expiresAt` date
- `isActive` is set to `false`

This keeps your site clean without needing to manually delete old application pages.

## Reusing the Ramp Content

The Ramp application (`app/application/ramp/`) serves as the original example. You can:
- Reference its structure when creating new applications
- Copy specific sections that are relevant
- Adapt the questions to match different job applications

## Tips for Customization

1. **Keep the structure**: The template follows a proven format (Hero → Fit → Questions → Contact)
2. **Use metrics**: Quantify achievements wherever possible
3. **Be specific**: Tailor content to the specific role and company
4. **Update dates**: Set realistic expiration dates (30-90 days after application)
