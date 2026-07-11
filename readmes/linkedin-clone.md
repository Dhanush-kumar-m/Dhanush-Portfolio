# 💼 LinkedIn UI Clone

> A fully responsive LinkedIn-inspired user interface built using **HTML5**, **CSS3**, and **Vanilla JavaScript**. This project recreates the overall user experience of a professional networking platform while demonstrating modern front-end development practices.

> **Disclaimer:** This project is created solely for educational and portfolio purposes. It is an independent UI clone and is not affiliated with or endorsed by LinkedIn or Microsoft.

---

# 📖 Overview

This project recreates the desktop and mobile interface of a professional networking platform similar to LinkedIn.

The objective is to practice building a large-scale responsive UI using semantic HTML, modern CSS, and JavaScript while maintaining clean architecture and reusable components.

---

# ✨ Features

## Authentication
- **Login Screen** - interactive credentials submission prefilled for testing.
- **Sign Up Screen** - register name, immediately updating the active session.
- **Forgot Password Interface**
- **Responsive Authentication Pages**

## Navigation
- **Responsive Top Navigation**
- **Company Logo** (Clean inline SVG vectors)
- **Global Search** - search feed posts by author, headline, or body copy.
- **Home, My Network, Jobs, Messaging, Notifications links**
- **User Profile Menu** - dropdown containing profile summary, logout link, and **Light/Dark Theme toggle switch**.
- **Interactive Badges Tally** - updates dynamically based on unread messages, pending connection invitations, and fresh notifications.

## Home Feed
- **Share a Post Card** - input field opening the modal composer.
- **Interactive Composer Modal** - create text posts, configure mock image attachments, and post to feed.
- **Reaction Likes** - toggle likes to increment/decrement counters with matching active color transitions.
- **Comments Thread** - view comments, submit comments in real-time, and watch comment totals update.
- **Repost & Send Micro-interactions** - copies post links to clipboard and triggers copy alerts.

## My Network
- **Invitations Card** - approve connection request invites (incrementing total connections count) or ignore invites.
- **Suggested Connections Grid** - send invitations to people you may know, changing button states to "Pending".

## Jobs
- **Job Search Filters** - search and filter recommended openings by role name, company, or geographical location.
- **Double Split Pane Details Layout** - selecting job cards on the left renders complete descriptions and workplace specs on the right.
- **Easy Apply Modal** - apply to roles by submitting contacts and documents, immediately converting listings to "Applied" states.

## Messaging
- **Conversation List** - sidebar listing connections, showing last message preview, unread status indicators, and online status badges.
- **Chat Window** - scrollable message flow showing profile avatars and speech bubbles.
- **Dynamic Auto-Replies** - typing and sending messages triggers realistic recruiter responses after a simulated 1.5-second writing delay.

## Notifications
- **Alert List** - showing profile views, mention notifications, and connection accepts.
- **Unread Indicator Panels** - highlight new notifications. Clicking notifications marks them as read.
- **Dismiss Alerts** - delete specific notifications or clear the queue.

---

# 📁 Project Structure

```text
LinkedIn-Clone/
│
├── index.html
├── login.html
├── signup.html
├── home.html
├── profile.html
├── jobs.html
├── network.html
├── messaging.html
├── notifications.html
│
├── css/
│   ├── style.css
│   ├── responsive.css
│   ├── components.css
│   ├── profile.css
│   └── animations.css
│
├── js/
│   ├── app.js
│   ├── feed.js
│   ├── jobs.js
│   ├── profile.js
│   ├── messaging.js
│   ├── network.js
│   └── notifications.js
│
├── assets/
│   ├── images/
│   │   └── user_cover.jpg
│   ├── avatars/
│   │   └── user_avatar.jpg
│   ├── icons/
│   └── logos/
│
└── README.md
```

---

# 💻 Installation & Usage

### Method 1: Local Launch
Double click on `index.html` to open the welcome portal directly in your favorite web browser.

### Method 2: Development Server (VS Code)
If you are using Visual Studio Code, right-click on `index.html` and select **"Open with Live Server"** to run a local development environment.

---

# 📱 Responsive Design

Fully optimized for mobile and desktop screens including:
- **360px - 425px** (Mobile Phones)
- **768px** (Tablets)
- **1024px** (Tablets Landscape & Laptops)
- **1280px - 1920px** (Large Screens)

---

# 🎯 Learning Outcomes
- Designing modern color token systems with support for **Light and Dark theme switching**.
- Constructing structural layouts using **CSS Flexbox and Grid**.
- Building a mock database layer using **HTML5 LocalStorage** to persist likes, comments, connections, job applications, and messaging logs across page reloads.
- Reusing global styles across multiple dashboard screens.

---

# 👨‍💻 Author

**Dhanushkumar**  
Frontend Developer
