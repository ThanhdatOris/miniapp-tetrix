
# Tetrix - Not wrong spelling

Play online at: https://miniapp-tetrix.vercel.app/

A beautiful, mobile-first Tetris game built with Next.js and Tailwind CSS. Features glassmorphism design, dark mode support, and intuitive touch controls for modern gaming experience.

**Author:** Oris  
**Version:** 1.0.0  
**License:** MIT

## ✨ Features

- 🎮 **Classic Tetris Gameplay** - Traditional piece dropping and line clearing
- 📱 **Mobile-First Design** - Optimized for touch devices with swipe controls
- 🌙 **Dark/Light Mode** - Toggle between themes with glassmorphism effects
- 💎 **3D Glass Blocks** - Beautiful glassmorphism design with inner shadows
- 🎯 **Next Piece Preview** - See upcoming pieces to plan your strategy
- 🏆 **High Score Tracking** - Session-based high score system
- ⌨️ **Keyboard Support** - Full keyboard controls for desktop users
- 🎨 **Responsive Design** - Perfect on mobile, tablet, and desktop

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/ThanhdatOris/miniapp-tetrix.git
cd tetrix

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to play Tetrix!

## 🎮 How to Play

### Controls
- **📱 Mobile/Touch**: 
  - Swipe left/right to move pieces
  - Swipe up to rotate pieces
  - Swipe down to hard drop
- **⌨️ Desktop/Keyboard**: 
  - Arrow keys to move and rotate
  - Spacebar to hard drop
  - On-screen controls also available
- **🎯 Objective**: Clear horizontal lines to score points and increase level
- **⚡ Challenge**: Game speed increases as you progress through levels

### Game Features
- **Next Piece Preview**: Plan your moves with upcoming piece visibility
- **High Score**: Beat your session best score
- **Theme Toggle**: Switch between light and dark glassmorphism themes
- **Reset Button**: Restart anytime to improve your score

## 🏗️ Tech Stack

- **Framework**: Next.js 15.5.3 with App Router
- **Styling**: Tailwind CSS v4 with custom glassmorphism effects
- **Language**: TypeScript for type safety
- **State Management**: React hooks with custom game logic
- **Theme System**: Context-based dark/light mode with localStorage persistence
- **Build Tool**: Turbopack for fast development and builds

## 📁 Project Structure

```
src/
├── app/                  # Next.js App Router
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Main game page
│   └── globals.css      # Global styles and glassmorphism effects
├── components/          # Modular UI components
│   ├── GameBoard.tsx    # Main tetris board with 3D glass blocks
│   ├── GameInfo.tsx     # Score display and theme toggle
│   ├── GameControls.tsx # Touch/mouse controls
│   ├── NextPiecePreview.tsx # Upcoming piece display
│   ├── ResetButton.tsx  # Game reset functionality
│   ├── ThemeToggle.tsx  # Dark/light mode switcher
│   └── Instructions.tsx # How to play guide
├── hooks/               # Custom React hooks
│   ├── useTetrisGame.ts # Core game logic and state
│   ├── useTouchControls.ts # Touch gesture handling
│   └── useKeyboardControls.ts # Keyboard input
├── lib/                 # Pure utility functions
│   ├── boardUtils.ts    # Board manipulation functions
│   ├── pieceUtils.ts    # Piece rotation and generation
│   └── movementUtils.ts # Movement validation
├── contexts/            # React contexts
│   └── ThemeContext.tsx # Theme state management
├── types/               # TypeScript definitions
│   └── game.ts         # Game-related interfaces
└── constants/           # Configuration
    └── game.ts         # Game rules and piece definitions
```

## 🚀 Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Oris**
- Created with ❤️ for classic gaming enthusiasts
- Built with modern web technologies and glassmorphism design
- Optimized for mobile-first gaming experience

---

*Tetrix - Not wrong spelling* © 2025 Oris
