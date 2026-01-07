# Artex Tech - Scalable Software, AI & Web3 Solutions

<div align="center">

![Artex Tech](https://via.placeholder.com/150x150.png?text=Artex+Tech)

**A vibrant team of innovators, creators, and tech enthusiasts pushing the boundaries of what's possible.**

[![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.3-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](LICENSE)

[Live Demo](https://artex-tech.vercel.app) · [Report Bug](https://github.com/yourusername/artex-tech/issues) · [Request Feature](https://github.com/yourusername/artex-tech/issues)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Components](#-components)
- [Styling](#-styling)
- [SEO & Performance](#-seo--performance)
- [Deployment](#-deployment)
- [Browser Support](#-browser-support)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🌟 Overview

Artex Tech is a cutting-edge portfolio and service showcase website built with Next.js 16, featuring stunning visual effects, smooth animations, and modern UI/UX design. The project demonstrates expertise in web development, AI solutions, mobile app development, and Web3 technologies.

### Key Highlights

- 🎨 **Immersive Visual Experience**: WebGL-powered animated background using OGL
- ⚡ **Advanced Animations**: GSAP and Framer Motion for fluid, professional animations
- 💎 **Glassmorphism Design**: Custom liquid glass effects with SVG filters
- 📱 **Responsive Design**: Fully optimized for all devices and screen sizes
- 🔍 **SEO Optimized**: Complete metadata, sitemap, and robots.txt configuration
- 🚀 **Performance Focused**: Optimized bundle size and loading performance

---

## ✨ Features

### 🎨 Visual Components

- **Dynamic Balatro Background**: WebGL shader-based animated gradient background with mouse interaction
- **Blur Text Animation**: Smooth text reveal animations with customizable directions
- **Typewriter Effect**: Realistic typing animation with customizable speeds
- **Liquid Glass Buttons**: Advanced glassmorphism effects using SVG displacement maps
- **Parallax Effects**: Scroll-based parallax animations for depth

### 📱 Interactive Elements

- **Bubble Navigation Menu**: Animated circular navigation with GSAP-powered transitions
- **Service Showcase**: Interactive service cards with hover effects and icons
- **Statistics Counter**: Animated numerical counters with spring physics
- **Call-to-Action Section**: Engaging "Let's Work Together" section with micro-interactions

### 🔧 Technical Features

- Server-side rendering (SSR) with Next.js 16
- TypeScript for type safety
- Modular CSS architecture
- Optimized asset loading
- Automatic sitemap generation
- SEO-friendly metadata structure

---

## 🛠 Tech Stack

### Core Framework
- **[Next.js 16.1.1](https://nextjs.org/)** - React framework with App Router
- **[React 19.2.3](https://reactjs.org/)** - UI library
- **[TypeScript 5.x](https://www.typescriptlang.org/)** - Type-safe JavaScript

### Animation Libraries
- **[GSAP 3.14.2](https://greensock.com/gsap/)** - Professional-grade animation
- **[Framer Motion 12.23.26](https://www.framer.com/motion/)** - React animation library
- **[Motion 12.23.26](https://motion.dev/)** - Additional motion utilities

### Graphics & Icons
- **[OGL 1.0.11](https://github.com/oframe/ogl)** - Minimal WebGL library
- **[Lucide React 0.562.0](https://lucide.dev/)** - Beautiful icon library

### Development Tools
- **[@types/node](https://www.npmjs.com/package/@types/node)** - Node.js type definitions
- **[@types/react](https://www.npmjs.com/package/@types/react)** - React type definitions
- **[@types/react-dom](https://www.npmjs.com/package/@types/react-dom)** - React DOM type definitions

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: Version 20.x or higher
- **npm**, **yarn**, or **pnpm**: Package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/artex-tech.git
   cd artex-tech
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```
artex-tech/
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── layout.tsx            # Root layout with metadata
│   │   ├── page.tsx              # Home page
│   │   ├── page.module.css       # Page-specific styles
│   │   ├── globals.css           # Global styles
│   │   ├── robots.ts             # Robots.txt configuration
│   │   └── sitemap.ts            # Dynamic sitemap generation
│   │
│   ├── components/               # React components
│   │   ├── Balatro.tsx           # WebGL animated background
│   │   ├── navbar.tsx            # Bubble navigation menu
│   │   ├── about.tsx             # About section with services
│   │   ├── blurText.tsx          # Text blur animation component
│   │   ├── TextType.tsx          # Typewriter effect component
│   │   ├── liquidGlassButton.tsx # Glassmorphism button
│   │   └── letsWork.tsx          # CTA section
│   │
│   ├── styles/                   # CSS modules
│   │   ├── hero.css              # Hero section styles
│   │   ├── about.css             # About section styles
│   │   ├── navbar.css            # Navigation styles
│   │   ├── balatro.css           # Background component styles
│   │   ├── TextType.css          # Typewriter styles
│   │   ├── liquidGlassButton.css # Glass button styles
│   │   └── letsWork.css          # CTA section styles
│   │
│   └── assets/                   # Static assets
│       └── Artex-logo.jpeg       # Company logo
│
├── public/                       # Public static files
│   ├── og-image.png              # Open Graph image
│   ├── icon.png                  # Favicon
│   └── apple-icon.png            # Apple touch icon
│
├── next.config.ts                # Next.js configuration
├── tsconfig.json                 # TypeScript configuration
├── package.json                  # Dependencies and scripts
└── .gitignore                    # Git ignore rules
```

---

## 🧩 Components

### Core Components

#### 1. **Balatro Background** (`src/components/Balatro.tsx`)
WebGL-powered animated gradient background with customizable colors and mouse interaction.

**Props:**
- `spinRotation?: number` - Base rotation speed
- `spinSpeed?: number` - Animation speed multiplier
- `color1-3?: string` - Hex color values for gradient
- `mouseInteraction?: boolean` - Enable/disable mouse effects
- `isRotate?: boolean` - Enable continuous rotation

**Usage:**
```tsx
<Balatro 
  isRotate={false}
  mouseInteraction={true}
  pixelFilter={800}
  color1="#DE443B"
  color2="#006BB4"
  color3="#162325"
/>
```

#### 2. **Bubble Menu** (`src/components/navbar.tsx`)
Animated circular navigation with GSAP-powered transitions.

**Props:**
- `logo: ReactNode | string` - Logo content
- `items: MenuItem[]` - Navigation items array
- `animationDuration?: number` - Animation timing
- `useFixedPosition?: boolean` - Fixed or absolute positioning

**Usage:**
```tsx
<BubbleMenu
  logo={<Image src={logo} alt="Logo" />}
  items={navigationItems}
  menuBg="#ffffff"
  animationDuration={0.5}
/>
```

#### 3. **Blur Text** (`src/components/blurText.tsx`)
Animated text reveal with blur and motion effects.

**Props:**
- `text: string` - Text to animate
- `delay?: number` - Delay between elements
- `animateBy?: 'words' | 'letters'` - Animation granularity
- `direction?: 'top' | 'bottom'` - Animation direction

**Usage:**
```tsx
<BlurText
  text="Your one stop IT solution"
  delay={150}
  animateBy="words"
  direction="top"
/>
```

#### 4. **Text Type** (`src/components/TextType.tsx`)
Realistic typewriter effect with cursor animation.

**Props:**
- `text: string | string[]` - Content to type
- `typingSpeed?: number` - Typing speed in ms
- `showCursor?: boolean` - Display cursor
- `loop?: boolean` - Enable looping

**Usage:**
```tsx
<TextType
  text={["A vibrant team of innovators..."]}
  typingSpeed={75}
  showCursor={true}
  cursorCharacter="|"
/>
```

#### 5. **Glass Surface** (`src/components/liquidGlassButton.tsx`)
Advanced glassmorphism component using SVG filters.

**Props:**
- `width?: number | string` - Component width
- `height?: number | string` - Component height
- `borderRadius?: number` - Border radius
- `blur?: number` - Blur intensity
- `opacity?: number` - Background opacity

**Usage:**
```tsx
<GlassSurface
  width={250}
  height={70}
  borderRadius={20}
  blur={11}
>
  <h2>Button Content</h2>
</GlassSurface>
```

#### 6. **About Section** (`src/components/about.tsx`)
Service showcase with parallax effects and animated statistics.

**Features:**
- Responsive grid layout
- Animated service cards
- Counter statistics with spring physics
- Scroll-based parallax blobs

#### 7. **Let's Work Together** (`src/components/letsWork.tsx`)
Engaging CTA section with micro-interactions and calendar integration.

**Features:**
- Smooth state transitions
- Calendar booking integration (Cal.com)
- Availability indicator
- Hover effects and animations

---

## 🎨 Styling

### Design System

**Color Palette:**
```css
--bg: #f2f3ec           /* Primary background */
--text: #0f172a         /* Primary text */
--accent: #2563eb       /* Accent color */
--background: #151212   /* Dark background */
```

**Typography:**
- Primary: Inter, system-ui
- Fallback: -apple-system, BlinkMacSystemFont, Segoe UI

### Responsive Breakpoints

```css
/* Mobile: < 480px */
/* Small tablets: 481px - 767px */
/* Tablets: 768px - 991px */
/* Laptops: 992px - 1199px */
/* Desktops: 1200px - 1919px */
/* Large screens: ≥ 1920px */
```

### CSS Architecture

- **Modular CSS**: Component-specific stylesheets
- **CSS Custom Properties**: For dynamic theming
- **Mobile-First**: Progressive enhancement approach
- **BEM Naming**: Block-Element-Modifier methodology

---

## 🔍 SEO & Performance

### Metadata Configuration

Comprehensive SEO setup in `src/app/layout.tsx`:

- Open Graph tags for social sharing
- Twitter Card metadata
- Canonical URLs
- Structured data ready
- Dynamic titles with templates

### Performance Optimizations

- ✅ **Next.js Image Optimization**: Automatic image optimization
- ✅ **Code Splitting**: Automatic route-based splitting
- ✅ **Font Optimization**: Next.js font loading with `display: swap`
- ✅ **CSS Optimization**: Minimal CSS with component-level styles
- ✅ **Tree Shaking**: Unused code elimination

### Sitemap & Robots

- **Dynamic Sitemap**: Auto-generated at `/sitemap.xml`
- **Robots.txt**: Configured for optimal crawling
- **Change Frequency**: Set per route type
- **Priority Levels**: Weighted by importance

---

## 🚀 Deployment

### Vercel Deployment (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Import to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Import your repository
   - Deploy with default settings

3. **Configure Domain** (Optional)
   - Add custom domain in Vercel dashboard
   - Update DNS settings

### Environment Variables

Create `.env.local` for local development:

```env
# Add any environment variables here
NEXT_PUBLIC_API_URL=your_api_url
```

### Manual Deployment

```bash
# Build the project
npm run build

# Test production build locally
npm run start

# Deploy to your hosting provider
```

---

## 🌐 Browser Support

- ✅ Chrome (latest 2 versions)
- ✅ Firefox (latest 2 versions)
- ✅ Safari (latest 2 versions)
- ✅ Edge (latest 2 versions)
- ⚠️ IE11 (not supported)

### WebGL Support

The Balatro background component requires WebGL support. Fallback styling is provided for unsupported browsers.

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

### Code Style Guidelines

- Use TypeScript for all new components
- Follow existing naming conventions
- Add JSDoc comments for complex functions
- Ensure responsive design for all breakpoints
- Test across multiple browsers

---

## 📝 Scripts

```json
{
  "dev": "next dev",          // Start development server
  "build": "next build",      // Build for production
  "start": "next start"       // Start production server
}
```

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📧 Contact

**Artex Tech**
- 🌐 Website: [artex-tech.vercel.app](https://artex-tech.vercel.app)
- 📧 Email: contact@artextech.com
- 📅 Calendar: [Book a 15-min call](https://cal.com/artex-tech-saad/15min)
- 🐦 Twitter: [@artextech](https://twitter.com/artextech)

---

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [GSAP Documentation](https://greensock.com/docs/)
- [Framer Motion](https://www.framer.com/motion/)
- [OGL WebGL Library](https://github.com/oframe/ogl)
- [Lucide Icons](https://lucide.dev/)

---

## 📸 Screenshots

### Hero Section
![Hero Section](https://via.placeholder.com/800x400.png?text=Hero+Section)

### Services Showcase
![Services](https://via.placeholder.com/800x400.png?text=Services+Section)

### Call to Action
![CTA](https://via.placeholder.com/800x400.png?text=CTA+Section)

---

<div align="center">

**Built with ❤️ by Artex Tech**

⭐ Star this repo if you find it helpful!

[⬆ Back to Top](#artex-tech---modern-web-development-portfolio)

</div>