# Genrec AI Website

This is a comprehensive Next.js 14 web application built for Genrec AI, featuring a modern design system, AI product showdcases, and a blog platform.

## Features

- **Modern Tech Stack**: Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion.
- **Design System**: Custom "Gold & Minimal" aesthetic with reusable UI components.
- **Product Pages**: Dedicated landing pages for LuminaIQ, Tabble, and vertical-specific web solutions.
- **Content Platform**: Dynamic blog system, case studies, and career portals.
- **Admin Panel**: Client-side protected dashboard for managing content.
- **SEO Optimized**: Sitemap, robots.txt, and JSON-LD structured data included.

## Getting Started

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Run Development Server**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) with your browser.

3.  **Build for Production**:
    ```bash
    npm run build
    npm start
    ```

## Project Structure

- `src/app`: App Router pages and API routes.
- `src/components`: Reusable UI components.
  - `ui`: Base design system primitives (Button, Input, etc.).
- `src/lib`: Utilities, mock data, and SEO helpers.
- `public`: Static assets.

## Configuration

- **Theme**: Customize colors and fonts in `tailwind.config.ts` and `globals.css`.
- **SEO**: Update metadata defaults in `src/app/layout.tsx`.
- **Blog Data**: Manage posts in `src/lib/blog.ts`.

## Admin Access

The admin panel is located at `/admin`.
**Default Access Key**: `genrec_admin_2025`
> Note: This is a client-side simulation. For production, integrate robust authentication (NextAuth.js, Clerk, etc.).
