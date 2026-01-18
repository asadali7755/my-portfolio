# Asad Ali - Portfolio

Welcome to my professional portfolio website! This is a modern, responsive portfolio showcasing my skills, projects, and experience as a Frontend Developer & UI/UX Designer.

## Features

- 🚀 Modern UI/UX design with smooth animations
- 📱 Fully responsive layout for all devices
- ⚡ Optimized performance with Next.js
- 🎨 Beautiful gradient and glass-morphism effects
- 🎯 Sections: Hero, About, Skills, Projects, Experience, Contact
- 🔄 Smooth scrolling navigation
- 💫 Framer Motion animations on scroll
- 🔗 Easy customization and extensibility

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Production-ready motion library
- [Geist Font](https://vercel.com/font) - Modern font family

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization Guide

### Images
To customize images in this portfolio:
1. Replace the images in the `public/image/` directory:
   - `my2.jpg` - Your profile picture in the Hero and About sections
   - `project1.jpg` through `project6.jpg` - Project thumbnail images
2. For optimal performance, ensure images are:
   - Compressed to appropriate sizes (recommended: 300-600px width for profile, 400-800px for project images)
   - Saved in WebP or AVIF format for better compression
   - Named consistently with descriptive filenames

### Content
Update the content in the respective component files:
- `src/app/components/Hero.tsx` - Hero section content
- `src/app/components/About.tsx` - About section content
- `src/app/components/Skills.tsx` - Skills and education details
- `src/app/components/Projects.tsx` - Project listings
- `src/app/components/Experience.tsx` - Work experience details
- `src/app/components/Contact.tsx` - Contact information

### Colors
Modify the color scheme by updating the gradient classes in the components:
- Primary: `cyan-400`, `cyan-500`, `cyan-600`
- Secondary: `blue-500`, `blue-600`
- Background: `gray-900`, `black`

## Performance Optimization

This portfolio is optimized for performance with:
- Lazy loading for images
- Component-based code splitting
- Optimized bundle sizes
- Efficient animations with Framer Motion
- Proper image sizing and formats

## Learn More

To learn more about the technologies used in this portfolio:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Tailwind CSS](https://tailwindcss.com/docs) - utility-first CSS framework.
- [Framer Motion](https://www.framer.com/motion/) - production-ready motion library.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
