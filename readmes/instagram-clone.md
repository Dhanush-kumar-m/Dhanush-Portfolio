# 📸 Instagram Clone - Modern Social Media Platform

The **Instagram Clone** is a fully responsive frontend recreation of the popular social media platform interface. The project replicates the main feed layouts, horizontal stories track, explore grid, messages threads, vertical snap reels, settings, and profile statistics using only HTML5, CSS3, and Vanilla JavaScript.

---

## 🎨 UI/UX Features & State Management

*   **Responsive Sidebars & Navigations:**
    *   **Desktop:** Left sidebar navigation panel (`width: 245px`).
    *   **Tablet:** Left sidebar collapses to icon-only buttons (`width: 72px`), hiding textual labels like real Instagram.
    *   **Mobile:** Sidebar hides completely and is replaced by a bottom sticky navigation bar (`mobile-nav-bar`).
*   **Persistent Themes (Dark / Light Mode):**
    *   Saves preferences inside the browser's Local Storage. Users can toggle the setting directly in [settings.html](file:///D:/instagram-clone/settings.html).
*   **Horizontal Stories Carousel & Story Modal Viewer:**
    *   Features seen/unseen story ring states. Clicking a story opens a fullscreen preview modal with an animated progress line bar.
*   **Likes, Saves, and Comments Client Storage API:**
    *   **Like Toggles:** Double-tapping post images runs a custom scaling heart animation, adds +1 to the likes count, and updates the icon.
    *   **Post Saves:** Binds a bookmark save button that writes to `localStorage` and lists posts under the profile's "Saved" tab.
    *   **Post Comments:** Allows users to submit comments that append immediately under posts and persist.
*   **Vertical-Snap Reels Scrolling:**
    *   `reels.html` implements vertical CSS snapping pages (`scroll-snap-type: y mandatory`) mimicking social media video interfaces.
*   **Real-time Explore Grid Search Query:**
    *   Filter explore posts in real-time as users input search keywords.
*   **Active Message Threads & Auto-Responses:**
    *   Allows users to cycle through inbox threads and send messages. A simulated auto-responder replies after 1 second.

---

## 📁 Project Structure

```text
D:/instagram-clone/
├── login.html           # Login screen & phone slider mockups
├── index.html           # Home feed & Suggestions panel
├── explore.html         # Search input keyword filters
├── reels.html           # Vertical snap video cards
├── profile.html         # User statistics & Saved tabs
├── messages.html        # Dual split chat window pane
├── notifications.html   # Dismissible liked & followed updates
├── settings.html        # Private visibility & Appearance toggles
├── README.md            # Project Documentation
└── assets/
    ├── css/
    │   ├── variables.css   # Main design token overrides
    │   ├── animations.css  # Heart pops, loading skeletons, story progress
    │   ├── style.css       # Core components layout
    │   └── responsive.css  # Collapsing sidebars & bottom bars
    └── js/
        ├── utils.js        # Local Storage state & mock database
        ├── navbar.js       # Page-routing active state decoders
        ├── feed.js         # Like, double-tap, and comment listeners
        ├── stories.js      # Fullscreen story viewer & progress timers
        ├── reels.js        # Reels snap scrolling actions
        ├── profile.js      # Posts/Saved tabs grid filters
        ├── messages.js     # Chat message threads & auto replies
        ├── notifications.js# Follow actions updates
        ├── explore.js      # Masonry filters
        └── app.js          # Master theme initializers
```

---

## 🚀 How to Run the Project

1.  Navigate to `D:/instagram-clone/`.
2.  Open `login.html` in your browser.
3.  Type in a username (min 4 characters) and password (min 6 characters), and click **Log In** to log in and redirect to the Home feed page `index.html`.
4.  Test out double-tapping feed images, saving posts, filtering explore cards, chatting with thread users, and toggling dark mode in the settings panel!
