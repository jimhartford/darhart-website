# Darhart Lawn Care Website

A modern, responsive single-page marketing website for a lawn care and landscaping company built with React, TypeScript, Tailwind CSS, and shadcn/ui components.

<!-- Trigger deployment -->

## Features

- 🎨 Modern, professional design inspired by industry-leading lawn care websites
- 📱 Fully responsive layout for mobile, tablet, and desktop
- 🚀 Optimized for GitHub Pages deployment
- ⚡ Built with Vite for fast development and production builds
- 🎭 Smooth scroll navigation between sections
- 📝 Contact form with validation
- 🖼️ Image gallery with lightbox functionality
- ⭐ Client testimonials section
- 🎯 SEO-friendly with proper meta tags

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality component library
- **Framer Motion** - Animation library
- **React Hook Form** - Form handling
- **Zod** - Schema validation

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd darhart-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

1. Push your code to a GitHub repository
2. Go to your repository Settings > Pages
3. Under "Source", select "GitHub Actions"
4. The workflow will automatically build and deploy on every push to the `main` branch
5. Your site will be available at `https://[username].github.io/darhart-website/`

### Manual Deployment

If you prefer to deploy manually:

```bash
npm run build
# Then deploy the dist folder to the gh-pages branch
```

## Project Structure

```
darhart-website/
├── public/              # Static assets
├── src/
│   ├── components/
│   │   ├── ui/         # shadcn/ui components
│   │   ├── Header.tsx  # Navigation header
│   │   ├── Hero.tsx    # Hero section
│   │   ├── About.tsx   # About section
│   │   ├── Services.tsx # Services section
│   │   ├── Gallery.tsx # Gallery section
│   │   ├── Testimonials.tsx # Testimonials section
│   │   ├── Contact.tsx # Contact form section
│   │   └── Footer.tsx  # Footer component
│   ├── lib/
│   │   └── utils.ts    # Utility functions
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Entry point
│   └── index.css      # Global styles
├── .github/
│   └── workflows/
│       └── deploy.yml  # GitHub Actions workflow
├── vite.config.ts     # Vite configuration
├── tailwind.config.js # Tailwind configuration
└── package.json       # Dependencies and scripts
```

## Customization

### Updating Company Information

1. **Company Name**: Update in `Header.tsx` and `Footer.tsx`
2. **Contact Information**: Update phone numbers and addresses in:
   - `Header.tsx`
   - `Hero.tsx`
   - `Contact.tsx`
   - `Footer.tsx`
3. **Services**: Modify the services array in `Services.tsx`
4. **Testimonials**: Update the testimonials array in `Testimonials.tsx`

### Styling

The site uses a green color palette suitable for lawn care businesses. You can customize colors in:
- `tailwind.config.js` - Lawn color palette
- `src/index.css` - CSS variables for theme colors

### Images

Currently using Unsplash placeholder images. Replace with your own images:
- Hero background: Update in `Hero.tsx`
- About section: Update in `About.tsx`
- Services: Update image URLs in `Services.tsx`
- Gallery: Update image URLs in `Gallery.tsx`

## Form Submission

The contact form currently logs form data to the console. To enable actual form submission:

1. Set up a backend service (e.g., EmailJS, Formspree, or your own API)
2. Update the `onSubmit` function in `Contact.tsx`
3. Add your API endpoint or service configuration

## License

This project is private and proprietary.

## Support

For questions or issues, please contact the development team.
