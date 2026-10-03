# QuickShow Movie App

> The main application package. For the full project overview, see the [top-level README](../README.md).

---
<img width="1917" height="837" alt="Screenshot 2026-10-03 123628" src="https://github.com/user-attachments/assets/76945d3a-a372-4f15-943d-27073dd85d12" />

<img width="1916" height="835" alt="Screenshot 2026-10-03 123702" src="https://github.com/user-attachments/assets/5b8892d7-0941-4ef6-a5e4-c264c148fb02" />

<img width="1905" height="817" alt="Screenshot 2026-10-03 123647" src="https://github.com/user-attachments/assets/6ba02428-2b14-491f-a9f5-9c1a5c042b93" />

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Then open **http://localhost:5173**.

---

## 🛠 Scripts

```bash
npm run dev       # Start dev server (Vite + HMR)
npm run build     # Build for production → dist/
npm run preview   # Preview the production build
npm run lint      # Run ESLint
```

---

## ⚙️ Environment Variables

Create/edit `.env` in this directory:

| Variable                      | Example                                      | Description                  |
|-------------------------------|----------------------------------------------|------------------------------|
| `VITE_CURRENCY`               | `$`                                          | Currency symbol for pricing  |
| `VITE_CLERK_PUBLISHABLE_KEY`  | `pk_test_XXXXXXXX.clerk.accounts.dev`        | Clerk publishable key (auth) |

---

## 📁 Source Structure

```
src/
├── assets/
│   └── assets.js           # Static asset exports + all dummy data (shows, trailers, casts, dashboard)
├── components/
│   ├── admin/              # AdminNavbar, AdminSidebar, Title
│   ├── BlurCircle.jsx      # Decorative blurred background circles
│   ├── DateSelect.jsx      # Date picker for showtimes
│   ├── FeaturedSection.jsx # Horizontal movie carousel
│   ├── Footer.jsx          # Public site footer
│   ├── HeroSection.jsx     # Home landing hero
│   ├── Loading.jsx         # Loading spinner
│   ├── MovieCard.jsx       # Reusable movie poster card
│   ├── Navbar.jsx          # Public navbar (Clerk auth buttons)
│   └── TrailerSection.jsx  # YouTube trailer grid
├── lib/
│   ├── dateFormat.js       # Date formatter
│   ├── isoTimeFormat.js    # ISO-8601 → readable time
│   ├── kConverter.js       # Number → 1.2K / 3.4M format
│   └── timeFormat.js       # Duration formatter
├── pages/
│   ├── admin/
│   │   ├── Layout.jsx      # Admin shell (sidebar + nested outlet)
│   │   ├── Dashboard.jsx   # Stats cards + active shows
│   │   ├── AddShows.jsx    # Create showtime form
│   │   ├── ListShows.jsx   # Shows CRUD table
│   │   └── ListBookings.jsx# All bookings table
│   ├── Home.jsx
│   ├── Movies.jsx
│   ├── MovieDetails.jsx
│   ├── SeatLayout.jsx      # Theater seat map + time slot picker
│   ├── MyBookings.jsx
│   └── Favorite.jsx
├── App.jsx                 # Route declarations
├── main.jsx                # Entry: ClerkProvider → BrowserRouter → App
└── index.css               # Tailwind v4 import + @theme tokens + globals
```

---

## 🔌 Connecting a Real Backend

Currently, data is hardcoded in `src/assets/assets.js`. To integrate a live API:

1. Create a `src/api/` folder with service functions (e.g. `shows.js`, `bookings.js`).
2. Replace each `dummy*` import inside the page components with the async API call.
3. Keep the existing `useState`/`useEffect` loading patterns — they already handle `Loading` fallback rendering.
4. Persist bookings/favorites via the authenticated Clerk user ID (`useAuth()` → `userId`).

---

## 🎯 Routing Notes

- **`/admin/*`** uses its own `Layout` (see [pages/admin/Layout.jsx](src/pages/admin/Layout.jsx)) with sidebar + top nav. The public `Navbar` and `Footer` are conditionally hidden via `useLocation().pathname.startsWith('/admin')` in [App.jsx](src/App.jsx#L18-L22).
- **Nested seat route**: `/movies/:id/:date` — the date segment filters which showtimes are rendered on the seat map.

---

## ⚠️ Known Dev Warnings

- **Node engine**: Vite 7 recommends Node ≥ 20.19. 20.16.x works but prints a warning on startup.
- **React DOM `class` → `className`**: There are some components using the HTML `class` attribute instead of React's `className`. These are harmless dev-only warnings. Search for `class=` in `.jsx` files and replace with `className=` to fix.
