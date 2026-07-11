# 🍔 FoodieExpress - Modern Food Delivery Website

FoodieExpress is a state-of-the-art, fully responsive food delivery web interface built entirely using HTML5, CSS3 (Vanilla), and ES6+ JavaScript. The project functions entirely on the client side using the **Local Storage API** to persist user data (like Shopping Cart items, Favorites, and theme mode).

---

## 🚀 Key Features

*   **Custom Interactive Elements:** A lag-free mouse trail follower and floating background food pointers (`🍕`, `🍔`, `🍣`, `🍰`, etc.) that float and rotate dynamically.
*   **Persistent Shopping Cart:** Fully working cart with items, live quantity controls, removal options, and discount code application.
*   **Promo Coupon UI:** Supports applying coupons like `FOODIE20` (20% off) or `WELCOME50` (₹50 off) with live summary recalculation.
*   **Client-Side Favorites:** Add/remove items from a favorites list that persists across pages.
*   **Global Autocomplete Search:** A search bar with a glassmorphism dropdown that updates in real-time as you type, suggesting matches from the menu and restaurant list.
*   **Dietary Filters:** Filter foods dynamically by Veg/Non-Veg.
*   **Theme Control:** Full Dark/Light mode synchronization across all pages.
*   **Toast Notifications:** Custom toast messages for actions (e.g. adding items, changing themes).
*   **Form Validation:** Built-in form validation on the Contact and Newsletter forms.

---

## 📁 Project Structure

```text
D:/restaurants/
├── index.html           # Home Page
├── restaurants.html     # Browse Restaurants Page
├── restaurant.html      # Restaurant Profile & Menu Details
├── menu.html            # Complete Menu browsing
├── cart.html            # Shopping Cart Page
├── favorites.html       # Saved Favorites Page
├── about.html           # About & Leadership Page
├── contact.html         # Contact Form Page
├── README.md            # Project documentation
└── assets/
    ├── css/
    │   ├── variables.css   # Color tokens & Light/Dark variables
    │   ├── animations.css  # Transition rules & Cursor animations
    │   ├── style.css       # Core components styling
    │   └── responsive.css  # Mobile first media query breakpoints
    └── js/
        ├── data.js         # Master DB of 8 Restaurants and 22 Foods
        ├── utils.js        # Core LocalStorage methods & cursor indicators
        ├── filters.js      # Reusable sort & filter algorithms
        ├── search.js       # Live homepage search suggestion dropdown
        ├── restaurants.js  # Restaurants listings & query parameters
        ├── menu.js         # Menu listings & Quick View modal
        ├── cart.js         # Cart summary calculations & checkout modal
        ├── favorites.js    # Favorites listings
        └── app.js          # Navigation, badges, & footer event bindings
```

---

## ⚡ How to Run the Project

1.  Navigate to `D:/restaurants/`.
2.  Double-click `index.html` to open the website directly in any web browser (works via the `file://` protocol).
3.  Alternatively, serve it locally using any static web server (e.g., Live Server in VS Code, or running `npx serve .` inside the folder).

---

## 🎨 Design Colors

*   **Primary Accent:** `#FF6B35` (Fresh Orange)
*   **Light Background:** `#FFF8F1` (Cream/Warm White)
*   **Dark Background:** `#0F0F10` (Soft Obsidian)
*   **Card Background:** `#FFFFFF` (White)
*   **Success Green:** `#10B981`
*   **Danger Red:** `#EF4444`

---

## ⚙️ Technical Details

1.  **State Management:** State is saved in the browser's `localStorage` and shared instantly using Javascript Custom Events (e.g. `cartUpdated`, `favoritesUpdated`, `themeChanged`).
2.  **Cursor Trail:** Rendered using lightweight, hardware-accelerated CSS `transform` styles with LERP (Linear Interpolation) inside a `requestAnimationFrame` loop.
3.  **Images:** High-resolution food and dining photography references sourced from open-source stock directories on Unsplash.
