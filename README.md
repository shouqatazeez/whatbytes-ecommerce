# ShopNow - E-Commerce Product Listing

A responsive e-commerce product listing application built with Next.js and Tailwind CSS as part of the WhatBytes Frontend Developer assignment.

## Live Demo

🔗 **[https://whatbytes-ecommerce-zeta.vercel.app](https://whatbytes-ecommerce-zeta.vercel.app)**

## Features

- Responsive product grid (3 columns desktop, 2 tablet, 1 mobile)
- Category filtering with radio buttons
- Price range filtering with slider and input
- Real-time search with string matching
- URL-based filters (shareable filtered views)
- Product detail page with dynamic routing (`/product/[id]`)
- Shopping cart with add, remove, and quantity controls
- Cart state persisted in localStorage
- Conditional rendering when no products match filters
- Sticky navigation header

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS
- **Icons:** lucide-react
- **State Management:** React Context API
- **Persistence:** localStorage
- **Language:** TypeScript
- **Deployment:** Vercel

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Home page with product listing and filters
│   ├── layout.tsx            # Root layout with header and footer
│   ├── globals.css           # Global styles
│   ├── product/[id]/page.tsx # Product detail page (dynamic route)
│   └── cart/page.tsx         # Shopping cart page
├── components/
│   ├── Header.tsx            # Navigation with search and cart
│   ├── Footer.tsx            # Footer with links and social icons
│   ├── Sidebar.tsx           # Category and price filters
│   ├── ProductGrid.tsx       # Responsive product grid
│   ├── ProductCard.tsx       # Individual product card
│   └── ProductDetail.tsx     # Product detail view
├── context/
│   └── CartContext.tsx       # Cart state management with localStorage
└── data/
    └── products.ts           # Product data
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home page with product listing, filters, and search |
| `/product/[id]` | Product detail page with full info and add to cart |
| `/cart` | Shopping cart with quantity controls and order summary |
