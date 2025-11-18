/**
 * Application Pages Configuration
 *
 * This file manages custom job application pages with expiration dates.
 * Once a page expires, it will automatically redirect to the homepage.
 *
 * To create a new application page:
 * 1. Copy app/application/_template/ to app/application/[company-name]/
 * 2. Add an entry here with the page slug and expiration date
 * 3. Customize the content for the specific role
 */

export interface ApplicationPage {
  slug: string;
  company: string;
  role: string;
  expiresAt: Date;
  isActive: boolean;
}

export const applicationPages: ApplicationPage[] = [
  {
    slug: 'ramp',
    company: 'Ramp',
    role: 'Head of Customer Success - Activation & Onboarding',
    expiresAt: new Date('2025-01-31'), // Set expiration date
    isActive: false, // Manually disable if needed
  },
  {
    slug: 'proof',
    company: 'Proof',
    role: 'Senior Director Customer Success & Professional Services',
    expiresAt: new Date('2026-01-15'), // Page expires Jan 15, 2026 (app deadline Nov 21, 2025)
    isActive: true,
  },
  // Add new application pages here:
  // {
  //   slug: 'company-name',
  //   company: 'Company Name',
  //   role: 'Role Title',
  //   expiresAt: new Date('2025-12-31'),
  //   isActive: true,
  // },
];

/**
 * Check if an application page is still active
 */
export function isApplicationPageActive(slug: string): boolean {
  const page = applicationPages.find(p => p.slug === slug);

  if (!page) {
    return false;
  }

  const now = new Date();
  const isNotExpired = now < page.expiresAt;

  return page.isActive && isNotExpired;
}

/**
 * Get application page details
 */
export function getApplicationPage(slug: string): ApplicationPage | null {
  return applicationPages.find(p => p.slug === slug) || null;
}
