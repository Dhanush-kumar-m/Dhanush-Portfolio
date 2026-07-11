# 🛒 Electro Hub - Modern E-Commerce Website

A premium consumer electronics e-commerce store frontend constructed using clean semantic HTML5, modular CSS3 (variables, animations, grids), and object-oriented Vanilla JavaScript.

---

## 📁 File Structure

```text
electrohub-ecommerce/
│
├── index.html          # Homepage (Hero layout, categories list, countdown, newsletters)
├── products.html       # Catalog listing page (Live query, sidebar filters, sorting)
├── product.html        # Detailed item specifications, swatches, gallery zoom, reviews
├── cart.html           # Quantity updates, promo code reductions, shipping milestones
├── wishlist.html       # Saved item grid layout with cart migrators
├── about.html          # Brand background, core values, and team card grid
├── contact.html        # Multi-field validated query forms and toasts
│
├── css/
│   ├── variables.css   # Main design tokens (light and dark mode theme variables)
│   ├── animations.css  # Transition helpers, pulse keyframes, spin overlays
│   ├── style.css       # Core typography, elements, widgets, and layout definitions
│   └── responsive.css  # Media queries adjusting layouts down to 360px width
│
└── js/
    ├── products.js     # Catalog database of 20 high-fidelity tech gadgets
    ├── utils.js        # Formatting, storage wrapper, and toast alert engines
    ├── app.js          # Shared system handlers (Hamburger drawer, countdown timers)
    ├── search.js       # Dynamic search bar live listeners and URL parameters
    ├── filters.js      # Multi-criteria catalog filtering mechanisms
    ├── cart.js         # Quantity adjustments, coupon additions, subtotal summaries
    └── wishlist.js     # Saved grids and move-to-cart operations
```

---

## ⚡ UI & UX System

- **Dual Color Modes**: Support for Dark and Light theme configurations backed by `localStorage` variables.
- **Micro-Animations**: Hover animations on cards, sliding alerts, zoom pans, and spin indicators.
- **Real-Time Catalog Filtering**: Users can filter catalog lists by category checkbox, brand checkbox, price limit ranges, stock status, and rating scores.
- **Dynamic Swatch Selection**: Products in details views display custom capacity and color choices.
- **Deals Countdown Timer**: Custom 24-hour deals countdown timer displaying seconds.
- **Promo Coupon System**: Enter code `TECH10` to get 10% discount, or `FREESHIP` to unlock free shipping on checkout.
- **Toast System**: Custom warnings, success banners, and info alerts.
- **Sticky header**: Auto-hides on scroll-down and reveals on scroll-up to maximize viewport utilization.
