# 3l3ven.com

A VitePress-powered static website for DJ services, video production, and event bookings.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deployment

This site is automatically deployed to GitHub Pages via GitHub Actions when changes are pushed to the `main` branch.

## Custom Domain

The site is configured for `3l3ven.com`. To use a different domain:

1. Update the `CNAME` file
2. Update the vite.config.ts social links
3. Configure your DNS CNAME record to point to `github.io`

## Structure

```
3l3ven.com/
├── content/
│   ├── index.md      # Home page
│   ├── booking.md    # Booking page
│   └── schedule.md   # Schedule page
├── .github/
│   └── workflows/
│       └── deploy.yml # GitHub Actions workflow
├── vite.config.ts    # VitePress configuration
├── package.json      # NPM dependencies
├── CNAME             # Custom domain
└── README.md         # This file
```

## License

MIT