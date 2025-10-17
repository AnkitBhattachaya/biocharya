# BioCharya — Next.js Starter

This is a deploy-ready starter for **BioCharya** (Next.js + TypeScript + Tailwind + Supabase).

## Quick start (local)

1. Install Node.js (v18+)
2. Copy `.env.example` to `.env.local` and fill your keys.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run development server:
   ```bash
   npm run dev
   ```
5. Open http://localhost:3000

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import it into Vercel (vercel.com) and set environment variables from `.env.example` in your Vercel dashboard.
3. Deploy.

## Notes
- Replace example content with your real copy, images, and keys.
- The project includes a Supabase helper and placeholder Razorpay endpoint.


## Deploy notes

1. Push this folder to a new GitHub repository.
2. In Vercel import the GitHub repo and set Environment Variables using values from your Supabase project.
3. After deploy, connect your domain `biocharya.in` in Vercel dashboard -> Domains and follow DNS instructions.
