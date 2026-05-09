# Banker Weekly Command Center - Deployment Guide

This package contains your complete Banker Weekly Command Center application, ready to deploy.

## What's Included

- ✅ All source code (`src/` directory)
- ✅ Configuration files (`package.json`, `vite.config.ts`)
- ✅ Styles and themes
- ✅ Wellby Financial branding
- ✅ All UI components

## Quick Deployment Options

### Option 1: Vercel (Recommended - Free & Easy)

1. **Upload to GitHub**
   - Go to https://github.com and create a free account (if you don't have one)
   - Click "New repository"
   - Name it `banker-command-center`
   - Click "Create repository"
   - Follow the instructions to upload these files

2. **Deploy to Vercel**
   - Go to https://vercel.com and sign up with your GitHub account
   - Click "Import Project"
   - Select your `banker-command-center` repository
   - Vercel will auto-detect the settings
   - Click "Deploy"
   - **You'll get a public URL like: `banker-command-center.vercel.app`**

3. **Share with bankers**
   - Copy the Vercel URL
   - Share it with your team
   - They can access it from any browser (no Figma needed!)

### Option 2: Netlify (Also Free & Easy)

1. Upload to GitHub (same as above)
2. Go to https://netlify.com
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub and select your repository
5. Click "Deploy"
6. Get your URL: `banker-command-center.netlify.app`

### Option 3: GitHub Pages (100% Free)

1. Upload to GitHub
2. In your repository, go to Settings → Pages
3. Under "Source", select "main" branch
4. Click "Save"
5. Your site will be at: `yourusername.github.io/banker-command-center`

## Local Testing (Before Deployment)

To test locally on your computer:

```bash
# Install dependencies (first time only)
pnpm install

# Start development server
pnpm run dev
```

Then open http://localhost:5173 in your browser.

## Build for Production

```bash
pnpm run build
```

This creates optimized files in the `dist/` folder.

## Need Help?

- **Vercel Documentation**: https://vercel.com/docs
- **Netlify Documentation**: https://docs.netlify.com
- **GitHub Pages**: https://pages.github.com

## Custom Domain (Optional)

Once deployed, you can connect a custom domain like:
- `bankers.wellbyfinancial.com`
- `commandcenter.wellby.com`

Both Vercel and Netlify offer this for free in their dashboards.

---

**Questions?** The deployment platforms all have excellent free support and documentation.
