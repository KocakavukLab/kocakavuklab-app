# Cloudflare Pages Deployment Guide

## Overview
This application is configured for deployment on Cloudflare Pages with the custom domain **kocakavuklab.com**.

## Configuration Files

### 1. `public/_redirects`
- Handles client-side routing for React Router
- All routes redirect to `index.html` with a 200 status code
- This ensures that all URLs are handled by React Router

### 2. `public/_headers`
- Security headers (X-Frame-Options, X-Content-Type-Options, etc.)
- Cache control for static assets (1 year cache for immutability)
- Optimizes performance and security

### 3. `package.json`
- Homepage set to `https://kocakavuklab.com`
- All Vercel dependencies removed
- Cleaned up unused server-side packages

## Deployment Steps

### Option 1: Cloudflare Pages Dashboard
1. Log in to your Cloudflare account
2. Go to **Pages** in the dashboard
3. Click **Create a project**
4. Connect your GitHub repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `build`
   - **Root directory**: `/`
   - **Environment variables**: None required

### Option 2: Wrangler CLI
```bash
# Install Wrangler globally
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy the project
wrangler pages deploy build --project-name=kocakavuklab
```

## Custom Domain Configuration

1. In Cloudflare Pages, go to your project
2. Navigate to **Custom domains**
3. Add `kocakavuklab.com` and `www.kocakavuklab.com`
4. Cloudflare will automatically configure DNS records

## Routes

All routes are handled by React Router:
- `/` → redirects to `/overview`
- `/overview` → About page
- `/members` → Team members
- `/network` → Network & funding
- `/publications` → Research publications
- `/news` → News timeline
- `/news/:newsId` → Individual news article
- `/joinus` → Join us page
- `/contact` → Contact form
- `/privacypolicy` → Privacy policy
- `/imprint` → Legal imprint
- `/designcredits` → Design credits

## Build Information

- **Framework**: React 18.2.0
- **Build tool**: react-scripts 5.0.1
- **Bundle size**: ~199 KB (gzipped)
- **Node version**: 18+ recommended

## Environment Variables (if needed)

If you need to add environment variables later:
1. Go to Cloudflare Pages dashboard
2. Select your project
3. Navigate to **Settings** > **Environment variables**
4. Add variables with `REACT_APP_` prefix

## Caching Strategy

- Static assets: 1 year cache (immutable)
- Images: 1 year cache (immutable)
- HTML: No cache (ensures latest version)

## Troubleshooting

### Issue: 404 on direct URL access
**Solution**: Ensure `_redirects` file is in the `public` folder and is being copied to the build output.

### Issue: Images not loading
**Solution**: All images are now in `src/assets/` and webpack-bundled. Make sure to import them correctly.

### Issue: Custom domain not working
**Solution**: Verify DNS records in Cloudflare DNS management. Allow 24-48 hours for DNS propagation.

## Migration from Vercel

- ✅ Removed `@vercel/analytics` package
- ✅ Removed `@vercel/speed-insights` package
- ✅ Removed `vercel.json` configuration file
- ✅ Updated homepage URL to custom domain
- ✅ Created Cloudflare-specific configuration files

## Performance Optimizations

1. All images webpack-optimized and bundled
2. Code splitting enabled
3. Lazy loading for images
4. Minified JavaScript and CSS
5. Gzip compression enabled by default on Cloudflare
