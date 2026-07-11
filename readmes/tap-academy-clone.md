# 🎓 TAP Academy Clone - Modern EdTech Learning Platform

TAP Academy Clone is a frontend recreation inspired by the placement-oriented training academy website. This project showcases modern web design patterns including animated statistics counters, course filtering grids, scrolling company logo tracks, video success story modals, custom cursor outlines, and a floating WhatsApp-style helper chat window.

---

## 🎨 Design System & Visual Features

*   **Custom Double-Layer Mouse Follower:**
    *   An inner dot and outer tracking circle trail user mouse coordinates on desktop views (using LERP animation loop on `requestAnimationFrame`).
*   **Hiring Partner Infinite Marquee:**
    *   A continuous scrolling track listing tech companies (Google, Microsoft, Amazon, Infosys, Accenture, TCS, Wipro, Cognizant, IBM). It pauses on hover.
*   **Animated Counter Statistics:**
    *   Numbers for *Students Trained (25,000+)*, *Placement Offers (18,000+)*, and *Hiring Companies (450+)* count up from zero when scrolled into view.
*   **Course Filtering Engine:**
    *   Interactive filter tabs on `courses.html` display matching programs (All, Java, Python, Web Dev, Career Prep) with scale-out and fade-in animations.
*   **Video Testimonial Modals:**
    *   Clicking alumni video cards overlays a dark modal dialog simulating video player review feeds.
*   **Top Progress Tracker:**
    *   A linear progress bar at the very top indicates scroll percentage.
*   **Floating Support Chat Window:**
    *   A bottom-right floating chat button opens a messaging bubble simulating quick support. Sends responses when user submits a query.
*   **Dark / Light Mode:**
    *   Toggle switcher in the header with persistent state storage in `localStorage`.

---

## 📁 Project Structure

```text
D:/tap-academy-clone/
├── index.html           # Home Dashboard Page
├── courses.html         # Course List & Filter Page
├── placements.html      # Timelines & Hiring Success
├── reviews.html         # Star Ratings & Video Stories
├── about.html           # Team Mentors & Mission
├── contact.html         # HQ Address & Enquiry Form
├── README.md            # Project Overview
└── assets/
    ├── css/
    │   ├── variables.css   # Theme colors & styles
    │   ├── animations.css  # Cursor LERP, scroll marquee, progress
    │   ├── style.css       # Core components design
    │   └── responsive.css  # Mobile breakpoints scaling
    └── js/
        ├── utils.js        # Cursor setup, chats, scroll progress
        ├── navbar.js       # Responsive menu sticky headers
        ├── slider.js       # Testimonials sliders
        ├── counter.js      # Animated counters
        ├── faq.js          # Accordions heights
        ├── form.js         # Callback inputs validations
        └── app.js          # Filters, video player loaders
```

---

## 🚀 How to Run the Project

1.  Navigate to `D:/tap-academy-clone/`.
2.  Open any page (e.g. `index.html`) directly in a web browser using the `file://` scheme.
3.  Ensure your browser supports ES6 modules (all modern browsers: Chrome, Edge, Safari, Firefox).
