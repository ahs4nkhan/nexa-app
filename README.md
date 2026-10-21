# Nexa - Productivity Platform

A frontend project: a public landing page and an admin dashboard for managing tasks and teams, built with React and live API data.

**Live demo:** _add your Netlify/Vercel link here_
**Repo:** _add your GitHub link here_

## Screenshots
_Add 2-3 screenshots here (landing page, dashboard, dark mode)._

## Features
- **Landing page** with animated sections and live tasks from an API
- **Dashboard** with stat cards, completion bar and two charts (task status, tasks per person)
- **Tasks page:** add, edit, delete, mark done, search, filter, priority tags
- **Team page** showing each member and how many tasks they have
- **Dark mode** that remembers your choice
- **Saved tasks:** changes are stored in the browser (with a "Reset to API data" button)
- **Toast notifications** for every action
- **Responsive** layout with a slide-out sidebar on mobile
- **Hover effects and transitions** throughout, and a custom 404 page

## Tech stack
React 18 · React Router 6 · Tailwind CSS 3 · Recharts · JSONPlaceholder REST API

## Project structure
```
src/
  api/          fetch calls
  components/   reusable UI (cards, forms, charts, sidebar ...)
    landing/    landing page sections
  data/         static landing page content
  hooks/        useNexaData, useTaskFilter, useDarkMode, useToasts
  pages/        Landing, Dashboard, Tasks, Team, NotFound
  App.js        routes and layout
```

## Run locally
```
npm install
npm start
```

## Deploy
- **Netlify:** `npm run build`, then drag the `build` folder into netlify.com/drop (the `public/_redirects` file makes page refresh work on /dashboard).
- **Vercel:** push to GitHub, import the repo on vercel.com (`vercel.json` handles the routing).

## What I learned
Component design and props, state and hooks (including custom hooks), API integration with loading and error states, client-side routing, form handling, localStorage, responsive design with Tailwind, and charts.

## Note
The data comes from JSONPlaceholder, a free demo API. It does not save changes, so edits are stored in the browser instead.
