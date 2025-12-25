# GENREC AI - TECHNICAL SETUP GUIDE

**Generated:** November 6, 2025  
**Purpose:** Technical configuration and setup details

---

## 📦 DEPENDENCIES

### Production Dependencies (package.json)

```json
{
  "@gsap/react": "^2.1.2",
  "@hookform/resolvers": "^5.2.2",
  "@mdx-js/loader": "^3.0.0",
  "@mdx-js/react": "^3.0.0",
  "@next/mdx": "^14.0.0",
  "@radix-ui/react-accordion": "^1.1.2",
  "@radix-ui/react-dialog": "^1.0.5",
  "@radix-ui/react-dropdown-menu": "^2.0.6",
  "@radix-ui/react-navigation-menu": "^1.2.14",
  "@radix-ui/react-select": "^2.0.0",
  "@radix-ui/react-tabs": "^1.0.4",
  "@radix-ui/react-toast": "^1.1.5",
  "@react-spring/web": "^10.0.3",
  "@supabase/supabase-js": "^2.79.0",
  "@vercel/analytics": "^1.1.1",
  "class-variance-authority": "^0.7.1",
  "clsx": "^2.0.0",
  "framer-motion": "^10.16.5",
  "gsap": "^3.13.0",
  "lottie-react": "^2.4.1",
  "lucide-react": "^0.545.0",
  "next": "14.0.3",
  "nodemailer": "^6.9.7",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-hook-form": "^7.48.2",
  "react-intersection-observer": "^9.16.0",
  "react-parallax": "^3.5.2",
  "tailwind-merge": "^2.1.0",
  "tailwindcss-animate": "^1.0.7",
  "zod": "^3.22.4"
}
```

### Development Dependencies

```json
{
  "@playwright/test": "^1.40.1",
  "@testing-library/jest-dom": "^6.1.5",
  "@testing-library/react": "^14.1.2",
  "@testing-library/user-event": "^14.6.1",
  "@types/aos": "^3.0.7",
  "@types/jest": "^29.5.11",
  "@types/node": "^20.10.4",
  "@types/nodemailer": "^6.4.14",
  "@types/react": "^18.2.45",
  "@types/react-dom": "^18.2.17",
  "@typescript-eslint/eslint-plugin": "^6.14.0",
  "@typescript-eslint/parser": "^6.14.0",
  "autoprefixer": "^10.4.16",
  "eslint": "^8.55.0",
  "eslint-config-next": "14.0.3",
  "eslint-config-prettier": "^9.1.0",
  "eslint-plugin-jsx-a11y": "^6.8.0",
  "eslint-plugin-react": "^7.33.2",
  "eslint-plugin-react-hooks": "^4.6.0",
  "husky": "^8.0.3",
  "jest": "^29.7.0",
  "jest-environment-jsdom": "^29.7.0",
  "postcss": "^8.4.32",
  "prettier": "^3.1.1",
  "prettier-plugin-tailwindcss": "^0.5.9",
  "tailwindcss": "^3.3.6",
  "typescript": "^5.3.3"
}
```

---

## ⚙️ CONFIGURATION FILES

### next.config.js

```javascript
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,
  
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'demo.genrecai.com',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
    deviceSizes: [360, 420, 768, 1024, 1280, 1440, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  compress: true,

  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },

  headers: async () => {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ]
  },
}

module.exports = withMDX(nextConfig)
```

### tailwind.config.ts

**Custom Colors:**
```typescript
colors: {
  'accent-metal': '#C9A66B',
  'accent-metal-light': '#D4B47E',
  'accent-metal-dark': '#B89558',
}
```

**Custom Animations:**
```typescript
animation: {
  'fade-in': 'fadeIn 0.6s ease-out',
  'slide-up': 'slideUp 0.6s ease-out',
  'scale': 'scale 0.6s ease-out',
}

keyframes: {
  fadeIn: {
    '0%': { opacity: '0' },
    '100%': { opacity: '1' },
  },
  slideUp: {
    '0%': { transform: 'translateY(30px)', opacity: '0' },
    '100%': { transform: 'translateY(0)', opacity: '1' },
  },
  scale: {
    '0%': { transform: 'scale(0.95)', opacity: '0' },
    '100%': { transform: 'scale(1)', opacity: '1' },
  },
}
```

### tsconfig.json

**Key Settings:**
```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

---

## 🌍 ENVIRONMENT VARIABLES

### Required Variables

Create `.env.local`:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Email Configuration (Optional)
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-email@example.com
SMTP_PASS=your-password
CONTACT_EMAIL=contact@genrecai.com

# Analytics (Optional)
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=auto_generated_by_vercel
```

### Environment Variable Usage

**Public Variables (NEXT_PUBLIC_*):**
- Accessible in browser
- Used for client-side features
- Examples: Supabase URL, Analytics ID

**Server-Only Variables:**
- Only accessible in server components and API routes
- Used for sensitive operations
- Examples: Service Role Key, SMTP credentials

---

## 📂 FILE STRUCTURE

```
genrec_ai_website/
├── .git/                       # Git repository
├── .github/                    # GitHub configuration
├── .husky/                     # Git hooks
├── .next/                      # Build output (auto-generated)
├── node_modules/               # Dependencies (auto-generated)
├── public/                     # Static assets
│   ├── images/                 # Image files
│   ├── favicon.svg
│   ├── site.webmanifest
│   └── browserconfig.xml
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── about/
│   │   ├── admin/
│   │   ├── api/
│   │   ├── blog/
│   │   ├── careers/
│   │   ├── case-studies/
│   │   ├── contact/
│   │   ├── divisions/
│   │   ├── privacy/
│   │   ├── products/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   └── error.tsx
│   ├── components/             # React components
│   ├── lib/                    # Utilities
│   └── types/                  # TypeScript types
├── .env.local                  # Environment variables (not in git)
├── .env.example                # Example env file
├── .eslintrc.json              # ESLint config
├── .gitignore                  # Git ignore rules
├── .prettierrc.json            # Prettier config
├── next.config.js              # Next.js config
├── package.json                # Dependencies
├── package-lock.json           # Lock file
├── postcss.config.js           # PostCSS config
├── tailwind.config.ts          # Tailwind config
└── tsconfig.json               # TypeScript config
```

---

## 🚀 DEPLOYMENT

### Vercel Deployment (Recommended)

1. **Connect Repository:**
   - Link GitHub repository to Vercel
   - Auto-deploy on push to main

2. **Environment Variables:**
   - Add all variables in Vercel dashboard
   - Settings → Environment Variables

3. **Build Settings:**
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

4. **Domain Configuration:**
   - Add custom domain in Vercel settings
   - Configure DNS records

### Manual Deployment

```bash
# Build the application
npm run build

# Start production server
npm start

# Or use PM2 for process management
pm2 start npm --name "genrec-ai" -- start
```

---

## 🔧 BUILD & OPTIMIZATION

### Build Output Analysis

```bash
# Check bundle sizes
npm run build

# Analyze bundle composition
npm run analyze
```

### Expected Build Output

```
Route (app)                Size     First Load JS
┌ ○ /                     5.2 kB    95.1 kB
├ ○ /about                4.8 kB    94.7 kB
├ ○ /admin                6.5 kB    96.4 kB
├ ○ /products             5.1 kB    95.0 kB
└ ○ /contact              4.2 kB    94.1 kB

○  (Static)  prerendered as static content
```

### Performance Targets

- **First Contentful Paint (FCP):** < 1.8s
- **Largest Contentful Paint (LCP):** < 2.5s
- **Time to Interactive (TTI):** < 3.8s
- **Cumulative Layout Shift (CLS):** < 0.1
- **Total Blocking Time (TBT):** < 300ms

---

## 🧪 TESTING

### Test Scripts

```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Coverage report
npm run test -- --coverage
```

### Test Configuration

**Jest:** `jest.config.js`
```javascript
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
}
```

**Playwright:** `playwright.config.ts`
```typescript
export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
  },
})
```

---

## 📊 MONITORING & ANALYTICS

### Vercel Analytics

**Integration:**
```tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

**Features:**
- Page view tracking (automatic)
- Web Vitals monitoring
- Real User Monitoring (RUM)
- No cookies required

---

## 🔒 SECURITY

### Security Headers (next.config.js)

```javascript
headers: [
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  }
]
```

### Content Security Policy

Currently disabled for development. Enable in production:

```javascript
{
  key: 'Content-Security-Policy',
  value: `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' https://va.vercel-scripts.com;
    style-src 'self' 'unsafe-inline';
    img-src 'self' data: https:;
    font-src 'self' data:;
  `.replace(/\s{2,}/g, ' ').trim()
}
```

---

## 🛠️ DEVELOPMENT TOOLS

### Git Hooks (Husky)

**Pre-commit:**
```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npm run lint
npm run type-check
```

### Code Quality

**ESLint:**
```json
{
  "extends": [
    "next/core-web-vitals",
    "prettier"
  ],
  "rules": {
    "@next/next/no-img-element": "off"
  }
}
```

**Prettier:**
```json
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

---

## 📱 RESPONSIVE BREAKPOINTS

```javascript
// Tailwind breakpoints (tailwind.config.ts)
screens: {
  'sm': '640px',   // Small devices (phones)
  'md': '768px',   // Medium devices (tablets)
  'lg': '1024px',  // Large devices (laptops)
  'xl': '1280px',  // Extra large devices (desktops)
  '2xl': '1536px', // 2X large devices (large desktops)
}
```

---

## 🔄 UPDATE & MAINTENANCE

### Updating Dependencies

```bash
# Check for outdated packages
npm outdated

# Update all dependencies (be careful!)
npm update

# Update specific package
npm install package-name@latest
```

### Version Management

**Current Versions:**
- Node.js: 18+ recommended
- npm: 9+ recommended
- Next.js: 14.0.3
- React: 18.2.0
- TypeScript: 5.3.3

---

## 📝 SCRIPTS REFERENCE

```json
{
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "format": "prettier --write .",
  "format:check": "prettier --check .",
  "test": "jest --watch",
  "test:ci": "jest --ci --coverage",
  "test:e2e": "playwright test",
  "type-check": "tsc --noEmit"
}
```

---

**Last Updated:** November 6, 2025  
**Document Version:** 1.0  
**Purpose:** Technical reference for developers
