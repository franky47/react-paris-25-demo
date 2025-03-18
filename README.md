# React Paris 2025 Demo app

This is the demo app showcased in my React Paris 2025 talk: "Type-Safe URL State Management in React with nuqs".

## Installation

It requires a Node.js version capable of running TypeScript natively.

Run `fnm use` (or whichever Node.js version manager you use) to switch to the correct version, then install the dependencies with pnpm:

```
pnpm install
pnpm dev
```

It will run:

- On `http://localhost:3000`, a Next.js app
- On `http://localhost:3001`, the same app with React Router v7

## Albums demo

A prerequisite for the albums demo is to download the cover images
to the public folders for each framework (to avoid fetching from the
Spotify CDN at runtime, which requires a network connection).

You can do so by running:

```
cd packages/db
pnpm db:dl-images
```
