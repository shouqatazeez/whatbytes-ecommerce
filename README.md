# ShopNow - E-Commerce Product Listing

A responsive e-commerce product listing application built with Next.js and Tailwind CSS.

## Live Demo

🔗 [Deployed on Vercel](https://your-deployment-url.vercel.app)

## Features

- Product listing with responsive grid (3 columns desktop, 2 tablet, 1 mobile)
- Category and price filtering with URL-based state
- Search functionality with string matching
- Product detail pages with dynamic routing
- Cart with add/remove/update quantity controls
- Cart state persisted in localStorage
- Fully responsive design

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS
- **Icons:** lucide-react
- **State Management:** React Context API
- **Language:** TypeScript

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Home page (product listing)
│   ├── layout.tsx            # Root layout (header + footer)
│   ├── product/[id]/page.tsx # Product detail page
│   └── cart/page.tsx         # Cart page
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Sidebar.tsx
│   ├── ProductGrid.tsx
│   ├── ProductCard.tsx
│   └── ProductDetail.tsx
├── context/
│   └── CartContext.tsx       # Cart state management
└── data/
    └── products.ts           # Product data
```
