# kkelly-personal-site-tw

Katie Kelly's personal website built with Next.js, Tailwind CSS, and TypeScript.

## Features

- Modern, responsive design
- Blog powered by Notion API
- Custom job application pages with automatic expiration
- MailerLite email subscription integration
- Google Analytics tracking

## Setup

### MailerLite Integration

The email subscription form is integrated with MailerLite using an embedded form. The MailerLite Universal script is already included in the site layout, so no additional configuration is needed.

### Application Pages

This site includes a system for creating custom job application pages that automatically expire. See [APPLICATION_PAGES.md](./APPLICATION_PAGES.md) for detailed documentation.

**Quick reference**:
- View/edit active pages: `content/applicationPages.ts`
- Create new application: Copy `app/application/_template/` to `app/application/[company-slug]/`
- Template and examples: `app/application/_template/` and `app/application/ramp/`