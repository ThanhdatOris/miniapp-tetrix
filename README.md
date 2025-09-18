
# Tetrix - Not wrong spelling

Tetrix is a beautiful, mobile-first Tetris game built with Next.js and Tailwind CSS. Enjoy classic gameplay with a modern, touch-friendly interface optimized for mobile devices.

---

This project was bootstrapped with [Next.js](https://nextjs.org) and [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to play Tetrix!

## How to Play

### Controls
- **Mobile**: Swipe left/right to move pieces, swipe up to rotate, swipe down to drop
- **Desktop**: 
  - **Keyboard**: Use arrow keys to move and rotate, spacebar to hard drop
  - **Mouse**: Click on-screen controls
- Clear horizontal lines to score points and increase your level
- Game gets faster as you progress through levels

## Project Structure

- `/src/components` - Modular UI components (GameBoard, Controls, etc.)
- `/src/hooks` - Custom React hooks for game logic and touch controls
- `/src/lib` - Pure utility functions for game mechanics
- `/src/types` - TypeScript type definitions
- `/src/constants` - Game configuration and constants

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
