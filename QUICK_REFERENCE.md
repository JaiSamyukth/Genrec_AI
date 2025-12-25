# GENREC AI - QUICK REFERENCE

**Quick access guide for common tasks and information**

---

## 🚀 QUICK START

### Start Development Server
```bash
cd D:\Files\genrec_ai_website
npm run dev
```
→ Open http://localhost:3000

### Build for Production
```bash
npm run build
npm start
```

---

## 📁 KEY FILES

| File | Purpose |
|------|---------|
| `src/app/page.tsx` | Homepage |
| `src/app/layout.tsx` | Site layout & metadata |
| `src/app/globals.css` | Global styles |
| `tailwind.config.ts` | Design system config |
| `next.config.js` | Next.js configuration |
| `package.json` | Dependencies |

---

## 🎨 HOMEPAGE COMPONENTS (IN ORDER)

1. **HeroParallax** - Animated hero with background carousel
2. **WorkShowcase** - 3D card portfolio display
3. **WhoWeAre** - Founder profiles
4. **OurEthos** - Brand philosophy quote
5. **WorkWithUs** - Contact form
6. **FooterRedesign** - Minimalist footer

---

## 🎯 QUICK EDITS

### Change Homepage Hero
**File:** `src/app/page.tsx`  
**Line 1:** Change import to different hero component  
**Options:** HeroParallax, HeroMinimal, HeroNew, HeroOptimized

### Update Founder Info
**File:** `src/components/WhoWeAre.tsx`  
**Lines 6-24:** Edit `founders` array

### Change Hero Text
**File:** `src/components/HeroParallax.tsx`  
**Lines 96-106:** Edit headline and subheading

### Update Contact Form
**File:** `src/components/WorkWithUs.tsx`  
**Lines 56-60:** Edit heading and description

---

## 🔑 ADMIN ACCESS

**URL:** http://localhost:3000/admin  
**Password:** `genrec_admin_2025`

**Features:**
- Blog post management
- Image gallery management

---

## 🎨 DESIGN SYSTEM

### Colors
```css
Primary: #FFFFFF (White)
Accent: #C9A66B (Gold)
Text: #000000 (Black)
Secondary Text: #6B7280 (Gray)
```

### Typography
```css
Headings: 'Merriweather', serif
Body: 'Inter', sans-serif
```

### Animations
```javascript
Duration: {
  fast: 120ms,
  default: 240ms,
  long: 420ms
}
```

---

## 📄 ALL PAGES

| Route | File | Status |
|-------|------|--------|
| `/` | `src/app/page.tsx` | ✅ Live |
| `/about` | `src/app/about/page.tsx` | ✅ Live |
| `/products` | `src/app/products/page.tsx` | ✅ Live |
| `/products/lumina-iq` | `src/app/products/lumina-iq/page.tsx` | ✅ Live |
| `/products/tabble` | `src/app/products/tabble/page.tsx` | ✅ Live |
| `/divisions` | `src/app/divisions/page.tsx` | ✅ Live |
| `/case-studies` | `src/app/case-studies/page.tsx` | ✅ Live |
| `/careers` | `src/app/careers/page.tsx` | ✅ Live |
| `/contact` | `src/app/contact/page.tsx` | ✅ Live |
| `/blog` | `src/app/blog/page.tsx` | ✅ Live |
| `/admin` | `src/app/admin/page.tsx` | 🔒 Protected |

---

## 🛠️ COMMON COMMANDS

```bash
# Development
npm run dev              # Start dev server
npm run build            # Build for production
npm run start            # Start production server
npm run lint             # Run ESLint
npm run format           # Format with Prettier

# Type checking
npm run type-check       # Check TypeScript

# Testing
npm run test             # Run tests
npm run test:e2e         # Run Playwright E2E tests
```

---

## 📦 KEY DEPENDENCIES

| Package | Version | Purpose |
|---------|---------|---------|
| next | 14.0.3 | Framework |
| react | 18.2.0 | UI library |
| tailwindcss | 3.3.6 | Styling |
| framer-motion | 10.16.5 | Animations |
| @supabase/supabase-js | 2.79.0 | Database |

---

## 🔧 TROUBLESHOOTING

### Dev Server Won't Start
```bash
# Delete node_modules and reinstall
rm -rf node_modules
npm install
```

### Build Errors
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

### Port Already in Use
```bash
# Kill process on port 3000 (Windows)
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Or change port
PORT=3001 npm run dev
```

---

## 📝 TEXT CONTENT LOCATIONS

### Hero Headline
**File:** `src/components/HeroParallax.tsx`  
**Text:** "Built by precision. / Driven by purpose."

### Hero Subheading
**File:** `src/components/HeroParallax.tsx`  
**Text:** "We build intelligent systems that work where others fail..."

### Founder Bios
**File:** `src/components/WhoWeAre.tsx`  
**Lines:** 6-24 (founders array)

### Our Ethos Quote
**File:** `src/components/OurEthos.tsx`  
**Lines:** 29-33 (quote text)

### Work With Us
**File:** `src/components/WorkWithUs.tsx`  
**Lines:** 56-62 (heading and description)

---

## 🎬 ANIMATIONS REFERENCE

### Fade In
```tsx
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 0.8 }}
```

### Slide Up
```tsx
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
```

### Card Hover
```tsx
whileHover={{ y: -8, scale: 1.01 }}
transition={{ duration: 0.16 }}
```

---

## 🌐 DEPLOYMENT

### Current Setup
- **Framework:** Next.js 14.0.3
- **Platform:** Vercel (presumed)
- **Build:** `npm run build`
- **Start:** `npm start`

### Environment Variables Needed
```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```

---

## 📚 DOCUMENTATION FILES

| File | Purpose |
|------|---------|
| `CURRENT_SITE_COMPLETE_DOCUMENTATION.md` | Full site documentation |
| `COMPONENT_REFERENCE.md` | All components explained |
| `CONTENT_GUIDE.md` | All text content |
| `QUICK_REFERENCE.md` | This file |
| `README.md` | Documentation overview |

---

## ⚡ PERFORMANCE

### Current Status
- Next.js: 14.0.3
- Dev Start: ~3 seconds
- Build Time: ~8 seconds
- Status: ✅ Production Ready

---

## 🔗 USEFUL LINKS

- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Framer Motion: https://www.framer.com/motion/
- Supabase Docs: https://supabase.com/docs

---

**Last Updated:** November 6, 2025  
**Version:** 1.0
