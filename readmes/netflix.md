# 🎬 Netflix - Premium Movie Streaming Platform

> A premium, highly responsive frontend streaming platform inspired by the dark theme and row slider browse mechanics of Netflix. Built using **HTML5**, **CSS3**, and **Vanilla JavaScript (ES6)**, with complete state management persisted locally through the **Web Local Storage API**.

---

# 📖 Project Overview

Netflix recreates a cinema streaming application. It features a Netflix-style Hero Billboard banner, dynamic categories (including a custom category of **50 Tamil movies**), an active "Continue Watching" queue, watchlist adds/deletes, responsive live search filters, and an integrated HTML5 video player modal that streams movie trailers.

---

# ✨ Features

## Home / Browse Dashboard
- **Hero Billboard Banner** - featured title displaying ratings, runtime, matching score percentage, and custom controls.
- **Continue Watching Row** - slider showing recently started items and red progress bar meters.
- **Dynamic Category Sliders** - including a full row of **50 Tamil movies** (Leo, Vikram, Master, Kaithi, Thunivu, Jailer, Soorarai Pottru, Karnan, Asuran, Jai Bhim, etc.).
- **Hover Scale Transitions** - movie cards scale up smoothly on hover and reveal matching rates.

## Interactive HTML5 Video Player
- Clicking "Play" on any banner or movie card immediately triggers the overlay player.
- Streams real cinematic trailers.
- Includes pause controls and a close overlay button.

## My Watchlist
- Persistent watchlist additions and removals.
- Clicking the circular cross icon on any watchlist card immediately removes it from local storage, dynamically updating all rows.

## Live Search Page
- Interactive search queries matching titles, genres, or cast.
- Browse tag pills (e.g. Suriya, Vijay, Action, Sci-Fi) for one-click search suggestions.

## Profile Dashboard
- Account stats showing card tiers ("Premium Ultra HD").
- Counter indicators for saved watchlist tracks and streaming hours.
- Summarized grids displaying recently viewed files.

---

# 📁 Folder Structure

```text
Netflix/
│
├── index.html
├── login.html
├── browse.html
├── movie.html
├── search.html
├── watchlist.html
├── profile.html
│
├── assets/
│   ├── css/
│   │   ├── style.css
│   │   ├── components.css
│   │   ├── responsive.css
│   │   └── animations.css
│   │
│   ├── js/
│   │   ├── db.js
│   │   ├── app.js
│   │   ├── browse.js
│   │   ├── search.js
│   │   └── movie.js
│   │
│   └── images/
│       ├── profile/
│       │   └── dhanush.jpg
│       ├── movies/
│       └── banners/
│
└── README.md
```

---

# 💻 Installation & Run

### Clone the repository
```bash
git clone {{REPOSITORY_URL}}
```

### Navigate into the project
```bash
cd Netflix
```

### Run locally
Double-click `index.html` to launch directly in your web browser, or use VS Code Live Server extension.

### Demo Sign-In
- **Email:** `dhanushkumar.developer@gmail.com`
- **Name:** `Dhanush Kumar`

---

# 👨‍💻 Author

**Dhanush Kumar**  
Frontend Developer
