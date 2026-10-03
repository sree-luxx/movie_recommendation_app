# QuickShow Movie App



---
# Home Page
<img width="1917" height="837" alt="Screenshot 2026-10-03 123628" src="https://github.com/user-attachments/assets/76945d3a-a372-4f15-943d-27073dd85d12" />

# Movie List Page
<img width="1916" height="835" alt="Screenshot 2026-10-03 123702" src="https://github.com/user-attachments/assets/5b8892d7-0941-4ef6-a5e4-c264c148fb02" />

# Seat Booking page
<img width="1905" height="817" alt="Screenshot 2026-10-03 123647" src="https://github.com/user-attachments/assets/6ba02428-2b14-491f-a9f5-9c1a5c042b93" />

# QuickShow — Movie Ticket Booking Platform

A modern movie discovery and ticket booking web application built with **React, Vite, Tailwind CSS, and Clerk**. QuickShow provides a responsive cinema experience for discovering movies, exploring trailers, viewing showtimes, selecting seats, and managing bookings.

> **Project Status:** Frontend completed | Backend integration planned

---

## Overview

QuickShow is designed to provide a seamless movie-booking experience with separate interfaces for **customers and administrators**.

### User Experience

* Browse currently available movies
* Explore movie details, cast, and trailers
* View available show dates and time slots
* Select seats through an interactive seat layout
* Manage personal bookings
* Save favorite movies
* Authenticate securely using Clerk

### Admin Experience

* Dedicated admin dashboard
* View platform statistics
* Manage movie shows and showtimes
* View and manage bookings
* Separate admin navigation and layout

---

## Key Features

| Feature             | Description                                                      |
| ------------------- | ---------------------------------------------------------------- |
| Movie Discovery     | Browse movies through featured sections and movie listings       |
| Movie Details       | View movie information, cast, trailers, and show details         |
| Seat Selection      | Interactive theater seat layout with date and showtime selection |
| Booking Management  | View and manage user bookings                                    |
| Favorites           | Save and access preferred movies                                 |
| Authentication      | User authentication powered by Clerk                             |
| Admin Dashboard     | Dedicated dashboard for managing shows and bookings              |
| Responsive UI       | Optimized interface for different screen sizes                   |
| Client-side Routing | Structured navigation using React Router                         |
| Loading States      | Reusable loading components for asynchronous operations          |

---

## Tech Stack

### Frontend

* **React**
* **Vite**
* **Tailwind CSS**
* **React Router**
* **Clerk**
* **JavaScript (ES6+)**

### Development Tools

* **ESLint**
* **npm**
* **Git & GitHub**

---

## Application Architecture

```text
QuickShow
│
├── Public Application
│   ├── Home
│   ├── Movies
│   ├── Movie Details
│   ├── Seat Selection
│   ├── My Bookings
│   └── Favorites
│
├── Authentication
│   └── Clerk
│
└── Admin Application
    ├── Dashboard
    ├── Add Shows
    ├── List Shows
    └── List Bookings
```

---

## Project Structure

```text
src/
├── assets/
│   └── assets.js
│       └── Static assets and application data
│
├── components/
│   ├── admin/
│   │   ├── AdminNavbar
│   │   ├── AdminSidebar
│   │   └── Title
│   ├── BlurCircle.jsx
│   ├── DateSelect.jsx
│   ├── FeaturedSection.jsx
│   ├── Footer.jsx
│   ├── HeroSection.jsx
│   ├── Loading.jsx
│   ├── MovieCard.jsx
│   ├── Navbar.jsx
│   └── TrailerSection.jsx
│
├── lib/
│   ├── dateFormat.js
│   ├── isoTimeFormat.js
│   ├── kConverter.js
│   └── timeFormat.js
│
├── pages/
│   ├── admin/
│   │   ├── Layout.jsx
│   │   ├── Dashboard.jsx
│   │   ├── AddShows.jsx
│   │   ├── ListShows.jsx
│   │   └── ListBookings.jsx
│   │
│   ├── Home.jsx
│   ├── Movies.jsx
│   ├── MovieDetails.jsx
│   ├── SeatLayout.jsx
│   ├── MyBookings.jsx
│   └── Favorite.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## Routing

### Public Routes

| Route               | Purpose                      |
| ------------------- | ---------------------------- |
| `/`                 | Home page                    |
| `/movies`           | Movie listing                |
| `/movies/:id`       | Movie details                |
| `/movies/:id/:date` | Showtimes and seat selection |
| `/my-bookings`      | User bookings                |
| `/favorite`         | Favorite movies              |

### Admin Routes

```text
/admin/*
```

The admin application uses a dedicated layout containing:

* Admin navigation
* Sidebar
* Dashboard
* Show management
* Booking management

The public navigation and footer are automatically hidden for admin routes.

---

## Getting Started

### 1. Clone the repository

```bash
git clone <YOUR_REPOSITORY_URL>
cd movie_recommendation_app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root:

```env
VITE_CURRENCY=$
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

> Never commit private API keys, secrets, or production credentials to GitHub.

### 4. Start the development server

```bash
npm run dev
```

The application will be available at the local URL provided by Vite.

---

## Available Scripts

```bash
npm run dev       # Start development server with Vite
npm run build     # Create production build
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

---

## Environment Variables

| Variable                     | Description                                          |
| ---------------------------- | ---------------------------------------------------- |
| `VITE_CURRENCY`              | Currency symbol displayed throughout the application |
| `VITE_CLERK_PUBLISHABLE_KEY` | Clerk publishable key used for authentication        |

---

## Backend Integration

The current version uses structured local application data. The architecture is prepared for integration with a production backend.

Planned API integration includes:

```text
React Frontend
      │
      ▼
REST API
      │
      ├── Movies
      ├── Shows
      ├── Bookings
      ├── Users
      └── Favorites
      │
      ▼
Database
```

The planned integration will:

1. Introduce a dedicated `src/api/` service layer.
2. Replace local data sources with asynchronous API requests.
3. Persist movie shows and bookings in a database.
4. Associate bookings and favorites with authenticated Clerk users.
5. Add server-side validation and authorization for administrative operations.

---

## Development Highlights

This project demonstrates practical implementation of:

* Component-based React architecture
* Reusable UI components
* Client-side routing
* Authentication integration
* Protected administrative workflows
* State management with React hooks
* Responsive UI development
* Reusable utility functions
* Separation of public and administrative interfaces
* Scalable frontend project organization





