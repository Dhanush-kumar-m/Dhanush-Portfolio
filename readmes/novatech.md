# 🚀 NovaTech - Modern Product Landing Page

NovaTech is a highly conversion-oriented, modern, and interactive product landing page designed to showcase a premium SaaS technology workspace. The layout is built completely using HTML5, CSS3, and ES6+ Vanilla JavaScript.

---

## 🎨 Core Design & Animation Features

*   **Custom Mouse Glow Outline (Mouse Trail):**
    *   A custom double-layer cursor follower (outer ring and inner dot) trail mouse movements on desktop screens. It scales up and glows cyan when hovering over links, pricing cards, and interactive elements.
*   **Decentralized Background Tech Pointers:**
    *   Floating micro-indicators (`✨`, `✦`, `⚙️`, `⚡`, etc.) drift and rotate slowly in the background with minimal opacity, creating a premium depth effect.
*   **Animated Stats Counters:**
    *   When the user scrolls into the Metrics/Stats section, counting animations fire automatically, counting up to target values (e.g. *15,000+ Happy Customers*).
*   **Interactive Showcase tab switches:**
    *   Allows users to click tab options to transition between screenshots smoothly (Dashboard, Analytics, Automation).
*   **Sliding Testimonials Carousels:**
    *   Autoplay sliding quotes showing reviews with star ratings and client avatars.
*   **Pricing Switch (Monthly/Yearly Toggle):**
    *   Clicking the slider toggle switches pricing rates between monthly and annual plans with a scale transition.
*   **Accordion FAQs:**
    *   Interactive accordion layout that calculates scroll heights dynamically, expanding and rotating chevrons on click.
*   **Contact Form & Email Subscription Validation:**
    *   Interactive forms with email validation, showing success toasts for submitted entries.
*   **Theme Control:**
    *   Complete dark/light mode toggle with state persistence in `localStorage`.

---

## 📁 Project Structure

```text
D:/NovaTech/
├── index.html           # Main Landing Page
├── README.md            # Project Documentation
└── assets/
    ├── css/
    │   ├── variables.css   # Color palette tokens (light/dark)
    │   ├── animations.css  # Mockup floaters, mouse glow, transitions
    │   ├── style.css       # Core layout structure
    │   └── responsive.css  # Breakpoints matching mobile up to 1920px
    └── js/
        ├── utils.js        # Mouse glow, theme sync, toast system
        ├── navbar.js       # Hamburger toggles & active scroll links
        ├── scroll.js       # Scroll reveal observers & Back to Top
        ├── faq.js          # Dynamic height accordion
        └── app.js          # Counter, testimonials, and toggle actions
```

---

## ⚙️ How to Run the Landing Page

1.  Navigate to `D:/NovaTech/`.
2.  Double-click `index.html` to load the landing page directly inside any web browser (using the `file://` protocol).
3.  Alternatively, host the files on a local static server (e.g., using VS Code Live Server or running `npx serve .` inside the directory).
