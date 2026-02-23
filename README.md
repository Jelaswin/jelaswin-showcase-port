# Portfolio Template

A modern, responsive portfolio website built with React, TypeScript, Vite, and Tailwind CSS. Ready for GitHub Pages deployment.

## Features

✅ **Fixed & Optimized**
- ✓ Removed all Lovable AI traces and dependencies
- ✓ Fixed TypeScript/ESLint errors
- ✓ Configured for GitHub Pages hosting
- ✓ Production-ready build
- ✓ Responsive design
- ✓ Dark mode support
- ✓ Smooth animations with Framer Motion
- ✓ Beautiful UI components from shadcn/ui

## Quick Start

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
Visit `http://localhost:8080` to see your portfolio

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Deployment to GitHub Pages

### Automatic Deployment (Recommended)

1. Push your code to GitHub:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. Go to Repository Settings → Pages
3. Set Source to "GitHub Actions"
4. GitHub Actions will automatically build and deploy on each push

Your site will be live at: `https://yourusername.github.io/jelaswin-showcase-port/`

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions and troubleshooting.

## Customization

### Update Your Information

1. **Hero Section** - `src/components/HeroSection.tsx`
   - Change your name, title, and description
   - Update social links (GitHub, LinkedIn, Email)
   - Add your profile image to `src/assets/`

2. **Projects** - `src/components/ProjectsSection.tsx`
   - Edit project titles, descriptions, and tech stack

3. **Skills** - `src/components/SkillsSection.tsx`
   - Update your tech stack and skills

4. **Experience** - `src/components/ExperienceSection.tsx`
   - Add your work experience and internships

5. **Contact** - `src/components/ContactSection.tsx`
   - Update your email and contact methods

6. **Theme** - `tailwind.config.ts`
   - Customize colors and styling

### File Structure
```
src/
├── components/
│   ├── HeroSection.tsx          # Hero/Landing section
│   ├── AboutSection.tsx         # About me section
│   ├── SkillsSection.tsx        # Skills/Tech stack
│   ├── ProjectsSection.tsx      # Featured projects
│   ├── ExperienceSection.tsx    # Work experience
│   ├── ContactSection.tsx       # Contact form
│   ├── Navbar.tsx               # Navigation bar
│   ├── Footer.tsx               # Footer
│   └── ui/                      # UI components (shadcn)
├── pages/
│   ├── Index.tsx                # Main portfolio page
│   └── NotFound.tsx             # 404 page
├── assets/                      # Images and static files
├── App.tsx                      # Main app component
└── main.tsx                     # Entry point
```

## Technology Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animations
- **shadcn/ui** - Beautiful components
- **React Router** - Page routing
- **React Query** - Data fetching
- **Lucide React** - Icon library

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview production build
- `npm run lint` - Check code quality
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode

## Performance

- **Optimized Build Size**: ~144KB gzipped
- **Lazy Loading**: Components load on scroll
- **Image Optimization**: Automatic via Vite
- **Code Splitting**: Automatic route-based splitting

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Advanced Configuration

### Environment Variables
Create `.env` file if needed (currently not required for GitHub Pages):
```env
VITE_API_URL=https://api.example.com
```

### Custom Domain
See [DEPLOYMENT.md](./DEPLOYMENT.md) for custom domain setup.

### Analytics
Add your analytics provider (Google Analytics, Vercel Analytics, etc.) to `src/main.tsx`.

## Troubleshooting

### Build fails?
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Blank white page on GitHub Pages?
1. Check browser console (F12) for errors
2. Verify repository name in `vite.config.ts`
3. Clear browser cache
4. Check GitHub Actions tab for build errors

### Hot reload not working?
The dev server supports HMR at `http://localhost:8080`

## Best Practices

1. **Keep it clean** - Update components to match your profile
2. **Add projects** - Showcase your best work
3. **Update links** - Point to your real social profiles
4. **Optimize images** - Use compressed images in `src/assets/`
5. **Keep dependencies updated** - Run `npm update` periodically

## Getting Help

1. Check [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment help
2. Review component source code for customization
3. Check Vite, React, and Tailwind documentation
4. Test in development mode first before deploying

## License

MIT - Feel free to use this template for your portfolio

## Credits

- UI Components: [shadcn/ui](https://ui.shadcn.com/)
- Animations: [Framer Motion](https://www.framer.com/motion/)
- Icons: [Lucide React](https://lucide.dev/)
- Styling: [Tailwind CSS](https://tailwindcss.com/)

---

**Ready to deploy?** Follow the [DEPLOYMENT.md](./DEPLOYMENT.md) guide to get your portfolio live on GitHub Pages!

