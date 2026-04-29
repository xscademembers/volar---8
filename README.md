<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/8417dba8-f0b7-4385-b450-d8853b1901e5

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploy on Vercel

This project is ready for Vercel static deployment:

- Framework preset: `Vite`
- Build command: `npm run build`
- Output directory: `dist`

`vercel.json` includes a SPA rewrite so client-side routes resolve to `index.html`.
