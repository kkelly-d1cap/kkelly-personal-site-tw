# kkelly-personal-site-tw

## Setup

### MailChimp Integration

The email subscription form is integrated with MailChimp. To enable it:

1. Create a `.env.local` file in the root directory
2. Add the following environment variables:

```
MAILCHIMP_API_KEY=your_mailchimp_api_key_here
MAILCHIMP_AUDIENCE_ID=your_audience_id_here
MAILCHIMP_API_SERVER=us1
```

#### Getting your MailChimp credentials:

- **API Key**: Go to your [MailChimp account](https://mailchimp.com/help/about-api-keys/) and generate an API key
- **Audience ID**: Find your [Audience/List ID](https://mailchimp.com/help/find-audience-id/) in your MailChimp dashboard
- **API Server**: Found in your MailChimp account URL (e.g., `https://us1.admin.mailchimp.com/` means your server is `us1`)

See `.env.example` for a template.