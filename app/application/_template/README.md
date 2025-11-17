# Application Page Template

This template provides a reusable structure for creating custom job application pages.

## Template Structure

### Core Sections (Required)
1. **Hero** - Role title, company, your photo, social links
2. **Why I'm the Right Fit** - 4-6 key strengths with specific examples
3. **Resources & Contact** - CV download, LinkedIn, thank you message

### Optional Sections
4. **Empathy Hook** - Show understanding of their challenges (recommended)
5. **Key Achievement Callout** - Highlight top achievement (recommended)
6. **Pattern Recognition** - Connect their needs to your experience (optional)
7. **Application Questions** - Detailed answers to specific questions (only if needed)

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

**Update the slug:**
```typescript
const pageSlug = 'stripe';  // Must match config
```

**Customize sections:**
- Update company name and role title in Hero
- Tailor the "Why I'm the Right Fit" strength cards (add/remove as needed)
- Update callouts with your specific achievements
- **Remove Application Questions section if not needed** (see comments in template)
- Personalize the thank you message

### 4. Remove Optional Sections (If Needed)

**To remove Application Questions:**
Look for the comment block in the template:
```tsx
{/* To remove: Delete from here... */}
<section className="bg-light-gray py-16 lg:py-24">
  <Container>
    <h2>Application Questions</h2>
    {/* ... question content ... */}
  </Container>
</section>
{/* ...to here to remove the Application Questions section */}
```
Delete everything between the markers.

**To remove Pattern Recognition Callout:**
Delete the entire section marked with `{/* Pattern Recognition Callout - OPTIONAL */}`

### 5. Test the Page
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

## Application Pattern Examples

### Pattern 1: Full Application with Questions (Like Ramp)
Use when the job posting has specific application questions.
- ✅ Keep all sections including Application Questions
- See `app/application/ramp/page.tsx` for reference

### Pattern 2: General Application (No Questions)
Use for general applications or when submitting via standard forms.
- ✅ Hero + Why I'm the Right Fit + Resources & Contact
- ❌ Remove Application Questions section
- Recommended: Keep Empathy Hook and Key Achievement callouts

### Pattern 3: Minimal Pitch Page
Use for quick referrals or networking connections.
- ✅ Hero + 3-4 Strength Cards + Contact
- ❌ Remove Application Questions, Pattern Recognition, and extra callouts
- Focus on impact and brevity

## Tips for Customization

1. **Start simple**: Begin with Pattern 2 or 3, add sections if needed
2. **Use metrics**: Quantify achievements wherever possible (60% efficiency, $500K savings)
3. **Be specific**: Tailor content to the specific role and company needs
4. **Update dates**: Set realistic expiration dates (30-90 days after application)
5. **Adjust strengths**: Use 4-6 strength cards depending on the role's key requirements
