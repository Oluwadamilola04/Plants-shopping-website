# Paradise Nursery

Paradise Nursery is a small React storefront built as a frontend practice
project. It is a simple houseplant shopping experience with a catalogue,
Redux-powered cart, and responsive styling.

## Live Demo

Visit the deployed app at [plants-shopping-website.vercel.app](https://plants-shopping-website.vercel.app/).

This is a learning/demo project rather than a production ecommerce platform.
Checkout is a placeholder, and the cart is held in the browser session rather
than backed by a database or payment service.

## Project Features

- Responsive landing page with a houseplant-focused visual design.
- Product catalogue with 18 plants grouped into three categories.
- Redux cart with add, quantity, delete, and total-cost controls.
- Hash-based navigation between the home, catalogue, and cart views.
- Vercel deployment for sharing the frontend demo.

## Run Locally

```bash
npm install
npm run dev
```

Open the Vite URL printed in the terminal, usually
`http://127.0.0.1:5173/`. Use the Vite development server rather than opening
`index.html` directly.

## Build

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```
