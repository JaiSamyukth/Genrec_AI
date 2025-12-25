# GENREC AI - COMPONENT REFERENCE GUIDE

**Generated:** November 6, 2025  
**Purpose:** Complete reference for all React components in the project

---

## COMPONENTS IN USE (HOMEPAGE)

### 1. HeroParallax
**File:** `src/components/HeroParallax.tsx`  
**Status:** ✅ Active on Homepage  
**Dependencies:** framer-motion, lucide-react, next/link

**Props:** None

**Features:**
- Auto-rotating background carousel (4 images, 5s interval)
- Parallax scrolling with `useScroll` and `useTransform`
- Fade-out animations on scroll
- Responsive typography
- CTA buttons with hover effects
- Scroll indicator with bouncing animation

**Text Content:**
```
Headline: "Built by precision. / Driven by purpose."
Subheading: "We build intelligent systems that work where others fail — software designed for performance, not pretense."
CTA 1: "EXPLORE OUR WORK"
CTA 2: "LEARN ABOUT LUMINAIQ"
```

**Styling:**
- Background images: Unsplash tech-themed photos
- Gradient overlay: `from-white/40 via-white/60 to-white`
- Font sizes: 5xl → 8xl (responsive)
- Colors: Gray-900 text, white background

---

### 2. WorkShowcase
**File:** `src/components/WorkShowcase.tsx`  
**Status:** ✅ Active on Homepage  
**Dependencies:** framer-motion

**Props:** None

**Features:**
- 3D card rotation based on mouse position
- Auto-advancing carousel (5 projects, 5s intervals)
- Manual navigation (arrow buttons)
- Vertical thumbnail navigation
- Spring physics for smooth animation
- Gradient backgrounds per project

**Projects:**
1. Enterprise CRM Dashboard (blue gradient)
2. Automation Dashboard Interface (purple gradient)
3. Feedback System Platform (emerald gradient)
4. Intelligent Web Application (rose gradient)
5. LuminaIQ AI Platform (amber gradient)

**Animations:**
- Mouse tracking: `useMotionValue` + spring physics
- Rotation: `rotateX` and `rotateY` based on cursor
- Fade transitions: 500ms duration
- Hover: Button scale + brightness

**Styling:**
- Section height: min-h-screen
- Perspective: 1000px for 3D effects
- Gradients: `from-{color}-900 via-{color}-800 to-{color}-900`

---

### 3. WhoWeAre
**File:** `src/components/WhoWeAre.tsx`  
**Status:** ✅ Active on Homepage  
**Dependencies:** framer-motion, react-intersection-observer, lucide-react

**Props:** None

**Features:**
- Three founder profiles
- Grayscale images → color on hover
- Social media links (LinkedIn, GitHub)
- Staggered entrance animations
- Responsive grid (1-3 columns)

**Founder Data:**
```javascript
{
  name: 'Jai Samyukth B U',
  role: 'Co-Founder',
  bio: 'Building intelligent systems from first principles.'
},
{
  name: 'Shyamnath Sankar',
  role: 'Co-Founder',
  bio: 'Engineering precision into every line of code.'
},
{
  name: 'Harish V',
  role: 'Technical Lead',
  bio: 'Architecting scalable solutions that endure.'
}
```

**Animations:**
- Image: `group-hover:scale-110` (700ms transition)
- Filter: `grayscale(100%)` → `grayscale(0%)` on hover
- Gradient overlay appears on hover
- Social icons fade in on hover

---

### 4. OurEthos
**File:** `src/components/OurEthos.tsx`  
**Status:** ✅ Active on Homepage  
**Dependencies:** framer-motion, react-intersection-observer

**Props:** None

**Features:**
- Centered quote display
- Large decorative quotation mark
- Staggered text reveal
- Decorative horizontal line
- Scale animation on entry

**Text Content:**
```
"We don't chase trends.
We build products that outlast them.

Innovation here isn't a tagline — it's survival."
```

**Animations:**
- Container: scale(0.95) → scale(1), 1s duration
- Quote mark: fade in, delay 300ms
- Main text: fade + slide up, delay 500ms
- Secondary text: fade + slide up, delay 700ms
- Line: scaleX(0) → scaleX(1), delay 900ms

---

### 5. WorkWithUs
**File:** `src/components/WorkWithUs.tsx`  
**Status:** ✅ Active on Homepage  
**Dependencies:** framer-motion, react-intersection-observer, lucide-react

**Props:** None

**State:**
```javascript
{
  name: string,
  email: string,
  message: string
}
```

**Features:**
- Contact form with validation
- Loading state management
- Form submission handler
- Animated entrance
- Focus states

**Form Fields:**
1. Name - text input, required
2. Email - email input, required
3. Message - textarea, required, 6 rows

**Animations:**
- Container: fade + slide up, delay 200ms
- Input focus: border color transition to gray-900
- Button hover: background color change
- Loading: button text changes to "SENDING..."

**Styling:**
- Labels: uppercase, tracking-wider
- Inputs: white background, gray borders
- Button: full width, gray-900 background
- Section: bg-gray-50

---

### 6. FooterRedesign
**File:** `src/components/FooterRedesign.tsx`  
**Status:** ✅ Active on Homepage  
**Dependencies:** framer-motion

**Props:** None

**Features:**
- Dynamic copyright year
- Minimalist design
- Gradient background
- Animated decorative line

**Text Content:**
```
"© 2025 Genrec AI. All rights reserved."
"Built with purpose. Designed for performance."
```

**Animations:**
- Text: fade + slide up, 400ms
- Line: scaleX(0) → scaleX(1), 500ms, delay 200ms

**Styling:**
- Background: gradient `from-gray-100 via-gray-50 to-white`
- Line: `bg-accent-metal/50`, width 6rem
- Padding: py-12

---

## LAYOUT COMPONENTS

### HeaderEnhanced
**File:** `src/components/HeaderEnhanced.tsx`  
**Status:** ✅ Active Site-Wide  
**Dependencies:** framer-motion, next/link, next/navigation, lucide-react

**Features:**
- Sticky positioning
- Auto-hide on scroll down
- Show on scroll up
- Backdrop blur after scroll
- Mobile hamburger menu
- Dropdown submenus
- Body scroll lock when menu open

**Navigation Items:**
```javascript
[
  { name: 'Home', href: '/' },
  { name: 'Divisions', href: '/divisions' },
  { 
    name: 'Products', 
    href: '/products',
    submenu: [
      { name: 'Lumina IQ', href: '/products/lumina-iq' },
      { name: 'Tabble', href: '/products/tabble' }
    ]
  },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' }
]
```

**States:**
- `isScrolled`: boolean (backdrop blur trigger)
- `isVisible`: boolean (hide/show)
- `lastScrollY`: number (scroll direction detection)
- `mobileMenuOpen`: boolean
- `activeSubmenu`: string | null

---

## UTILITY COMPONENTS

### MotionContainer
**File:** `src/components/animations/MotionContainer.tsx`  
**Status:** Available  
**Dependencies:** framer-motion

**Props:**
- `as`: HTML element type
- `children`: React.ReactNode
- All framer-motion props

**Purpose:** 
Wraps content with Framer Motion while respecting `prefers-reduced-motion` user preference.

**Usage:**
```tsx
<MotionContainer
  as="div"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
>
  <Content />
</MotionContainer>
```

---

### DemoEmbed
**File:** `src/components/demo/DemoEmbed.tsx`  
**Status:** Available  
**Dependencies:** React hooks

**Props:**
```typescript
{
  demoUrl: string
  title: string
  onEvent?: (type: string, payload: any) => void
  fallbackContent?: React.ReactNode
}
```

**Features:**
- Lazy loading with Intersection Observer
- PostMessage communication
- Origin validation
- Error handling
- Loading skeleton
- 10-second timeout

**Events:**
- `demo_loaded`
- `demo_interaction`
- `demo_started_quiz`
- `demo_request_demo`
- `cta_clicked`
- `demo_error`

---

### CookieBannerEnhanced
**File:** `src/components/CookieBannerEnhanced.tsx`  
**Status:** ✅ Active Site-Wide  
**Dependencies:** framer-motion, next/link

**Features:**
- GDPR compliant
- Necessary vs optional cookies
- Persistent localStorage
- Consent management
- Customizable cookie categories

**Cookie Preferences:**
```typescript
{
  necessary: boolean  // always true
  analytics: boolean  // user choice
  timestamp: number
}
```

**Buttons:**
- Accept All
- Necessary Only
- Customize
- Save Preferences

---

## ALTERNATIVE COMPONENTS (NOT CURRENTLY USED)

### Hero Variants

1. **Hero** (`Hero.tsx`)
   - Original hero design
   - Static background
   - No carousel

2. **HeroNew** (`HeroNew.tsx`)
   - Alternative layout
   - Different animation timing
   - Obsessive craftsmanship messaging

3. **HeroMinimal** (`HeroMinimal.tsx`)
   - Simplified design
   - Minimal animations
   - Badge animation
   - H1 clip-path reveal

4. **HeroOptimized** (`HeroOptimized.tsx`)
   - Performance focused
   - Reduced animations
   - Faster load time

5. **HeroRedesign** (`HeroRedesign.tsx`)
   - Redesigned layout
   - Different visual hierarchy

6. **HeroFixed** (`HeroFixed.tsx`)
   - Fixed positioning variant
   - Different scroll behavior

7. **HeroWithCarousel** (`HeroWithCarousel.tsx`)
   - Integrated carousel
   - Two-column layout

---

### Section Variants

1. **OurWork** (`OurWork.tsx`)
   - Alternative work showcase
   - Grid-based layout
   - Different from WorkShowcase

2. **LuminaIQSection** (`LuminaIQSection.tsx`)
   - Product feature section
   - Can be added to homepage
   - Interactive demo section

3. **HowItWorksRedesign** (`HowItWorksRedesign.tsx`)
   - Process explanation
   - Step-by-step guide
   - Numbered steps

4. **DivisionsOverview** (`DivisionsOverview.tsx`)
   - Four divisions display
   - Card-based layout
   - Hover effects
   - Can be added to homepage

---

### Admin Components

1. **Blog Admin** (in admin panel)
   - Rich text editor
   - Markdown support
   - Cover image upload
   - Draft/publish toggle
   - Category management

2. **Gallery Admin** (in admin panel)
   - Drag & drop upload
   - Image preview
   - Copy URL button
   - Delete functionality
   - Grid layout

---

## COMPONENT USAGE GUIDE

### How to Swap Components

To change the hero section:

1. Open `src/app/page.tsx`
2. Change import:
```tsx
// Current
import { HeroParallax } from '@/components/HeroParallax'

// Alternative
import { HeroMinimal } from '@/components/HeroMinimal'
```
3. Update JSX:
```tsx
// Current
<HeroParallax />

// Alternative  
<HeroMinimal />
```

### How to Add Sections

To add DivisionsOverview to homepage:

```tsx
import { DivisionsOverview } from '@/components/DivisionsOverview'

export default function HomePage() {
  return (
    <div className="flex flex-col bg-white">
      <HeroParallax />
      <DivisionsOverview />  {/* Add here */}
      <WorkShowcase />
      {/* ... rest */}
    </div>
  )
}
```

### Component Best Practices

1. **Always use 'use client' directive** for components with:
   - useState
   - useEffect
   - Event handlers
   - Framer Motion animations

2. **Import order:**
   ```tsx
   // 1. React/Next
   import { useState } from 'react'
   import Link from 'next/link'
   
   // 2. External libraries
   import { motion } from 'framer-motion'
   import { useInView } from 'react-intersection-observer'
   
   // 3. Icons
   import { ChevronDown } from 'lucide-react'
   
   // 4. Types
   import type { ComponentProps } from './types'
   ```

3. **Naming conventions:**
   - Components: PascalCase (`HeroParallax`)
   - Files: PascalCase matching component (`HeroParallax.tsx`)
   - Props interfaces: `ComponentNameProps`

4. **Animation patterns:**
   ```tsx
   initial={{ opacity: 0, y: 30 }}
   animate={{ opacity: 1, y: 0 }}
   transition={{ duration: 0.8 }}
   ```

---

## COMPONENT DEPENDENCIES

### Most Used Libraries

1. **framer-motion** - 45+ components
   - All animated sections
   - Hero variants
   - Card effects
   - Page transitions

2. **lucide-react** - 30+ components
   - Icons throughout site
   - Social media icons
   - UI indicators
   - Navigation icons

3. **react-intersection-observer** - 15+ components
   - Scroll-triggered animations
   - Lazy loading
   - Viewport detection

4. **next/link** - All navigation components
5. **next/navigation** - Dynamic routing components

---

## PERFORMANCE NOTES

### Heavy Components
- **WorkShowcase**: Uses complex mouse tracking + spring physics
- **HeroParallax**: Multiple images + parallax calculations
- **FoundersPreview**: Multiple high-res images

### Optimization Tips
1. Lazy load below-the-fold components
2. Use `loading="lazy"` for images
3. Implement `next/image` for automatic optimization
4. Consider code splitting for admin components
5. Use `React.memo()` for static components

---

**Document Version:** 1.0  
**Last Updated:** November 6, 2025
