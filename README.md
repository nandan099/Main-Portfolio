# Nandan Reddy Portfolio

A personal portfolio website built with React + Vite, styled with Tailwind CSS, and animated with Framer Motion.

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS 4
- Framer Motion
- EmailJS (contact form)
- Lucide React icons

## Features

- Responsive single-page portfolio layout
- Hero, About, Projects, Contact, and Footer sections
- Animated UI elements and transitions
- Contact form integration using EmailJS
- Reusable UI components (buttons, animated border button)

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Create a `.env` file in the project root:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

These are required for the contact form in `src/sections/Contact.jsx`.

### 3. Run development server

```bash
npm run dev
```

App runs on the local Vite URL printed in your terminal (typically `http://localhost:5173`).

## Available Scripts

- `npm run dev` - Start local development server
- `npm run build` - Create production build in `dist/`
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint checks

## Project Structure

```text
src/
  components/    Reusable UI components
  layout/        Navbar and footer
  sections/      Page sections (Hero, About, Projects, Contact)
  App.jsx        Main page composition
```

## Deployment

Build the app before deploying:

```bash
npm run build
```

Deploy the generated `dist/` folder to your hosting provider (for example, Vercel or Netlify).
