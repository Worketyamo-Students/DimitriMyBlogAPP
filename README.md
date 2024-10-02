# React + TypeScript + Vite + Express + Prisma + PostgreSQL + Tailwind css

This is my Proposed solution to the Assignment of the Teacher - First commit

## Dependencies 
see > package.json

## Installation

> npm create vite@latest MYBLOGAPP
>cd MYBLOGAPP

>npm install -D tailwindcss postcss autoprefixer
>npx tailwindcss init -p

> ## tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

> ## index.css
@tailwind base;
@tailwind components;
@tailwind utilities;

body{
    height: 100vh;
    margin:0;
    padding:0;
}

## Test
>npm run dev
