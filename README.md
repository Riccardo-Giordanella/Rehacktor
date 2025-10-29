# 🎮 Rehacktor

**Rehacktor** is a modern and responsive web app for exploring video games, managing user profiles, writing reviews, and saving favorite titles. Built with React, TailwindCSS, DaisyUI, and Supabase, it delivers a smooth and visually refined experience.

---

## 🚀 Tech Stack

| Frontend        | Backend / DB | Styling     | Auth & Storage   |
| --------------- | ------------ | ----------- | ---------------- |
| React + Vite    | Supabase     | TailwindCSS | Supabase Auth    |
| React Router    | Supabase SQL | DaisyUI     | Supabase Storage |
| React Hook Form |              |             |                  |

---

## 🧑‍💻 Key Features

### 👤 User Profile

- Registration, login, and logout via Supabase Auth
- Edit personal data (first name, last name, username)
- Upload avatar with preview and save to Supabase Storage
- Display custom avatar in the navbar (cached via context)

### 🎮 Games

- View game details including description, rating, genres, and platforms
- Add/remove favorites with visual feedback
- Submit user reviews via textarea and dynamic list
- Display review author name via join with `profiles` table

### 🧠 Advanced Context

- `UserContext` manages session, profile, avatar, and CRUD operations
- Avatar is cached in context to prevent flickering on route changes

### 🖼️ Polished UI/UX

- Consistent dark theme with badges, cards, and microinteractions
- Game descriptions styled with `text-justify`, `indent`, `shadow-inner`, and elegant scroll
- Favorite games can transform into `GameCard` components via dynamic fetch from RAWG API

---

## 🔍 External Integrations

- **RAWG API**: used to fetch complete game details (e.g., `background_image`) when not available in the database
- **React Icons**: icons for platforms, actions, and visual feedback

---

## 📁 Folder Structure
```bash
src/
├── assets/         # Static images and icons
├── components/     # Reusable components (Navbar, GameCard, BodySection, etc.)
├── context/        # Global context (UserContext for session, profile, avatar)
├── database/       # Supabase client configuration
├── views/          # Main pages (Home, Profile, Settings, etc.)
├── router/         # Route definitions and navigation mapping
└── main.jsx        # Application entry point
```
---

## ⚙️ Local Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/rehacktor.git
cd rehacktor
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

- Create a .env file in the project root and add your Supabase and RAWG API keys:

```bash
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_RAWG_API_KEY=your_rawg_api_key
```

### 4. Start the local development server

```bash
npm run dev
```

# Author

Made with precision and passion by Riccardo — pragmatic perfectionist, UI/UX enthusiast, and clean code advocate.
