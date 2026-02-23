# Deployment Guide for GitHub Pages

This portfolio is configured to be deployed on GitHub Pages at `https://yourusername.github.io/jelaswin-showcase-port/`

## Prerequisites
- Git installed
- GitHub account
- Repository pushed to GitHub

## Quick Start

### Option 1: Automatic Deployment with GitHub Actions (Recommended)

1. **Create GitHub Actions Workflow**
   - Create file `.github/workflows/deploy.yml`:
   ```yaml
   name: Build and Deploy

   on:
     push:
       branches: [ main ]

   permissions:
     contents: read
     pages: write
     id-token: write

   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         
         - uses: actions/setup-node@v3
           with:
             node-version: 18
         
         - run: npm install
         - run: npm run build
         
         - uses: actions/upload-pages-artifact@v1
           with:
             path: ./dist

     deploy:
       needs: build
       runs-on: ubuntu-latest
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       steps:
         - uses: actions/deploy-pages@v1
           id: deployment
   ```

2. **Enable GitHub Pages**
   - Go to Repository Settings → Pages
   - Set "Source" to "GitHub Actions"
   - Click Save

3. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Setup deployment"
   git push origin main
   ```

4. **Watch the deployment**
   - Go to Actions tab in your GitHub repository
   - View the workflow run
   - Once complete, your site will be live at: `https://yourusername.github.io/jelaswin-showcase-port/`

### Option 2: Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy using gh-pages package**
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Update package.json** - Add to scripts section:
   ```json
   "deploy": "npm run build && gh-pages -d dist"
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

## Local Testing

### Test production build locally
```bash
npm run build
npm run preview
```

Visit `http://localhost:4173` to see the production build.

## Environment Variables

No environment variables needed for GitHub Pages deployment. The base URL is automatically set in `vite.config.ts`.

## Troubleshooting

### Blank White Page?
- **Check browser console** for errors (F12)
- **Verify base URL** in `vite.config.ts` matches your repository name
- **Clear browser cache** (Ctrl+Shift+Del)
- **Check GitHub Actions** for build errors

### Assets Not Loading?
- Ensure `base` in `vite.config.ts` is set correctly for production
- Use relative paths in code (automated by Vite)

### Custom Domain?
1. Create `CNAME` file in `public/` directory with your domain
2. Add the domain to GitHub Pages settings
3. Update DNS records with your domain provider

## Project Structure

```
├── dist/              # Build output (for GitHub Pages)
├── src/               # Source code
├── public/            # Static files
├── vite.config.ts     # Vite configuration (includes base URL)
├── package.json       # Dependencies and scripts
└── DEPLOYMENT.md      # This file
```

## Next Steps

1. **Update portfolio content** in `src/components/` with your information
2. **Add your image** to `src/assets/` and update `HeroSection.tsx`
3. **Update social links** in components (GitHub, LinkedIn, Email)
4. **Customize colors/theme** in `tailwind.config.ts`
5. **Deploy to GitHub Pages** following the steps above

## Support

For more information:
- [Vite Documentation](https://vitejs.dev/)
- [GitHub Pages Docs](https://pages.github.com/)
- [React Documentation](https://react.dev/)
