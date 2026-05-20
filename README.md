# Paradise Nursery

Paradise Nursery is a React shopping application for browsing houseplants,
adding plants to a Redux-powered cart, adjusting quantities, and viewing cart
totals before checkout.

## Project Features

- Landing page with company name, background image, company description, and a
  Get Started button.
- Product listing page with 18 unique houseplants grouped into three
  categories.
- Shared header on the product and cart pages with Home, Plants, and Cart
  navigation.
- Dynamic shopping cart icon showing the total item quantity.
- Shopping cart page with item thumbnails, names, unit prices, line totals,
  increase/decrease controls, delete controls, total quantity, and total cost.

## Run Locally

```bash
npm install
npm run dev
```

Open the Vite URL printed in the terminal, usually
`http://127.0.0.1:5173/`. Do not open `index.html` directly with the browser
or VS Code Live Server, because Vite apps need the dev server to resolve React
imports.

## Build

```bash
npm run build
```

To preview the built GitHub Pages version locally:

```bash
npm run preview
```
