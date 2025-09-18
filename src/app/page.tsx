
// Tetrix - Not wrong spelling: Mobile-first Tetris UI
import { useEffect, useState } from "react";
// Piece type for Tetris
type Piece = {
  shape: number[][];
  color: string;
  x: number;
  y: number;
  type: number;
};

const BOARD_WIDTH = 10;
const BOARD_HEIGHT = 20;
const BLOCK_SIZE = 24; // px
const COLORS = [
  "bg-cyan-400", // I
  "bg-yellow-300", // O
  "bg-purple-400", // T
  "bg-green-400", // S
  "bg-red-400", // Z
  "bg-blue-400", // J
  "bg-orange-400", // L
];

const SHAPES = [
  // I
  [
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  // O
  [
    [1, 1],
    [1, 1],
  ],
  // T
  [
    [0, 1, 0],
    [1, 1, 1],
    [0, 0, 0],
  ],
  // S
  [
    [0, 1, 1],
    [1, 1, 0],
    [0, 0, 0],
  ],
  // Z
  [
    [1, 1, 0],
    [0, 1, 1],
    [0, 0, 0],
  ],
  // J
  [
    [1, 0, 0],
    [1, 1, 1],
    [0, 0, 0],
  ],
  // L
  [
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0],
  ],
];


function getRandomPiece(): Piece {
  const type = Math.floor(Math.random() * SHAPES.length);
  return {
    shape: SHAPES[type],
    color: COLORS[type],
    x: Math.floor((BOARD_WIDTH - SHAPES[type][0].length) / 2),
    y: 0,
    type,
  };


export default function Home() {
  const [board, setBoard] = useState<number[][]>(Array.from({ length: BOARD_HEIGHT }, () => Array(BOARD_WIDTH).fill(0)));
  const [piece, setPiece] = useState<Piece>(getRandomPiece());
  const [nextPiece, setNextPiece] = useState<Piece>(getRandomPiece());
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [intervalMs, setIntervalMs] = useState(500);
  const [touchStart, setTouchStart] = useState<{x: number, y: number} | null>(null);

  // Main game loop
  useEffect(() => {
    if (gameOver) return;
    const timer = setInterval(() => {
      moveDown();
    }, intervalMs);
    return () => clearInterval(timer);
    // eslint-disable-next-line
  }, [piece, intervalMs, gameOver]);

  function moveDown() {
    if (!checkCollision(board, piece, 0, 1)) {
      setPiece((p) => ({ ...p, y: p.y + 1 }));
    } else {
      // Merge piece
      const merged = merge(board, piece);
      const { newBoard, cleared } = clearLines(merged);
      setBoard(newBoard);
      setScore(s => s + cleared * 100);
      // New piece
      const newPiece = nextPiece;
      setPiece(newPiece);
      setNextPiece(getRandomPiece());
      // Check for game over
      if (checkCollision(newBoard, newPiece)) {
        setGameOver(true);
      }
    }
  }

  function moveLeft() {
    if (!checkCollision(board, piece, -1, 0)) {
      setPiece((p) => ({ ...p, x: p.x - 1 }));
    }
  }
  function moveRight() {
    if (!checkCollision(board, piece, 1, 0)) {
      setPiece((p) => ({ ...p, x: p.x + 1 }));
    }
  }
  function rotatePiece() {
    const rotated = rotate(piece.shape);
    if (!checkCollision(board, piece, 0, 0, rotated)) {
      setPiece((p) => ({ ...p, shape: rotated }));
    }
  }
  function drop() {
    let dropY = piece.y;
    while (!checkCollision(board, piece, 0, dropY - piece.y + 1)) {
      dropY++;
    }
    setPiece((p) => ({ ...p, y: dropY }));
    moveDown();
  }

  // Touch controls for mobile
  function handleTouchStart(e: React.TouchEvent) {
    const touch = e.touches[0];
    setTouchStart({ x: touch.clientX, y: touch.clientY });
  }
  function handleTouchEnd(e: React.TouchEvent) {
    if (!touchStart) return;
    const touch = e.changedTouches[0];
    const dx = touch.clientX - touchStart.x;
    const dy = touch.clientY - touchStart.y;
    if (Math.abs(dx) > Math.abs(dy)) {
      if (dx > 30) moveRight();
      else if (dx < -30) moveLeft();
    } else {
      if (dy > 30) moveDown();
      else if (dy < -30) rotatePiece();
    }
    setTouchStart(null);
  }

  function restart() {
    setBoard(Array.from({ length: BOARD_HEIGHT }, () => Array(BOARD_WIDTH).fill(0)));
    setPiece(getRandomPiece());
    setNextPiece(getRandomPiece());
    setScore(0);
    setGameOver(false);
    setIntervalMs(500);
  }

  // Render board with current piece
  const displayBoard = board.map(row => [...row]);
  for (let y = 0; y < piece.shape.length; y++) {
    for (let x = 0; x < piece.shape[y].length; x++) {
      if (piece.shape[y][x]) {
        const boardY = piece.y + y;
        const boardX = piece.x + x;
        if (boardY >= 0 && boardY < BOARD_HEIGHT && boardX >= 0 && boardX < BOARD_WIDTH) {
          displayBoard[boardY][boardX] = piece.type + 1;
        }
      }
    }
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-blue-100 to-indigo-200 py-4 px-2">
      <h1 className="text-3xl font-bold mb-2 text-indigo-700 tracking-tight">Tetrix</h1>
      <p className="text-xs text-gray-500 mb-2">Not wrong spelling</p>
      <div className="flex gap-4 mb-2 w-full max-w-xs justify-between">
        <div className="text-sm font-semibold text-indigo-700">Score: {score}</div>
        <button
          className="bg-indigo-500 text-white rounded px-3 py-1 text-xs font-semibold shadow hover:bg-indigo-600 active:scale-95 transition"
          onClick={restart}
        >
          {gameOver ? "Restart" : "Reset"}
        </button>
      </div>
      <div
        className="relative touch-none select-none mx-auto border-4 border-indigo-400 rounded-lg bg-white shadow-lg tetris-board"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Tetris Board */}
        {displayBoard.map((row, y) => (
          <div key={y} className="flex">
            {row.map((cell, x) => (
              <div
                key={x}
                className={`tetris-cell border border-gray-200 ${cell ? COLORS[cell - 1] + " shadow-inner" : "bg-white"}`}
              />
            ))}
          </div>
        ))}
        {/* Game Over Overlay */}
        {gameOver && (
          <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center z-10 rounded-lg">
            <div className="text-white text-2xl font-bold mb-2">Game Over</div>
            <button
              className="bg-indigo-500 text-white rounded px-4 py-2 font-semibold shadow hover:bg-indigo-600 mt-2"
              onClick={restart}
            >
              Play Again
            </button>
          </div>
        )}
      </div>
      {/* Controls for desktop */}
      <div className="flex gap-2 mt-4 sm:gap-4">
        <button className="bg-indigo-400 text-white rounded-full w-12 h-12 text-xl shadow" onClick={moveLeft} aria-label="Left">◀️</button>
        <button className="bg-indigo-400 text-white rounded-full w-12 h-12 text-xl shadow" onClick={rotatePiece} aria-label="Rotate">🔄</button>
        <button className="bg-indigo-400 text-white rounded-full w-12 h-12 text-xl shadow" onClick={moveRight} aria-label="Right">▶️</button>
        <button className="bg-indigo-600 text-white rounded-full w-12 h-12 text-xl shadow" onClick={drop} aria-label="Drop">⏬</button>
      </div>
      <div className="mt-6 text-xs text-gray-400 text-center max-w-xs">
        <div>Touch: Swipe left/right to move, up to rotate, down to drop.</div>
        <div>Desktop: Use on-screen controls or arrow keys (coming soon).</div>
      </div>
    </div>
  );
}

function rotate(shape: number[][]) {
  return shape[0].map((_, i) => shape.map(row => row[i]).reverse());
}

function checkCollision(board: number[][], piece: Piece, offsetX = 0, offsetY = 0, testShape?: number[][]) {
  const shape = testShape || piece.shape;
  for (let y = 0; y < shape.length; y++) {
    for (let x = 0; x < shape[y].length; x++) {
      if (!shape[y][x]) continue;
      const newX = piece.x + x + offsetX;
      const newY = piece.y + y + offsetY;
      if (
        newX < 0 ||
        newX >= BOARD_WIDTH ||
        newY >= BOARD_HEIGHT ||
        (newY >= 0 && board[newY][newX])
      ) {
        return true;
      }
    }
  }
  return false;
}

function merge(board: number[][], piece: Piece) {
  const newBoard = board.map(row => [...row]);
  for (let y = 0; y < piece.shape.length; y++) {
    for (let x = 0; x < piece.shape[y].length; x++) {
      if (piece.shape[y][x]) {
        const boardY = piece.y + y;
        const boardX = piece.x + x;
        if (boardY >= 0 && boardY < BOARD_HEIGHT && boardX >= 0 && boardX < BOARD_WIDTH) {
          newBoard[boardY][boardX] = piece.type + 1;
        }
      }
    }
  }
  return newBoard;
}

function clearLines(board: number[][]) {
  const newBoard = board.filter(row => row.some(cell => !cell));
  const cleared = BOARD_HEIGHT - newBoard.length;
  while (newBoard.length < BOARD_HEIGHT) {
    newBoard.unshift(Array(BOARD_WIDTH).fill(0));
  }
  return { newBoard, cleared };
}

  const [board, setBoard] = useState<number[][]>(Array.from({ length: BOARD_HEIGHT }, () => Array(BOARD_WIDTH).fill(0)));
  const [piece, setPiece] = useState<Piece>(getRandomPiece());
  const [nextPiece, setNextPiece] = useState<Piece>(getRandomPiece());
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [intervalMs, setIntervalMs] = useState(500);
  const [touchStart, setTouchStart] = useState<{x: number, y: number} | null>(null);

  // ...existing code for Tetris logic and rendering...

  // Main game loop
  useEffect(() => {
    if (gameOver) return;
    const timer = setInterval(() => {
      moveDown();
    }, intervalMs);
    return () => clearInterval(timer);
    // eslint-disable-next-line
  }, [piece, intervalMs, gameOver]);

  function moveDown() {
    if (!checkCollision(board, piece, 0, 1)) {
      setPiece((p) => ({ ...p, y: p.y + 1 }));
    } else {
      // Merge piece
      const merged = merge(board, piece);
      const { newBoard, cleared } = clearLines(merged);
      setBoard(newBoard);
      setScore(s => s + cleared * 100);
      // New piece
      const newPiece = nextPiece;
      setPiece(newPiece);
      setNextPiece(getRandomPiece());
      // Check for game over
      if (checkCollision(newBoard, newPiece)) {
        setGameOver(true);
      }
    }
  }

  function moveLeft() {
    if (!checkCollision(board, piece, -1, 0)) {
      setPiece((p) => ({ ...p, x: p.x - 1 }));
    }
  }
  function moveRight() {
    if (!checkCollision(board, piece, 1, 0)) {
      setPiece((p) => ({ ...p, x: p.x + 1 }));
    }
  }
  function rotatePiece() {
    const rotated = rotate(piece.shape);
    if (!checkCollision(board, piece, 0, 0, rotated)) {
      setPiece((p) => ({ ...p, shape: rotated }));
    }
  }
  function drop() {
    let dropY = piece.y;
    while (!checkCollision(board, piece, 0, dropY - piece.y + 1)) {
      dropY++;
    }
    setPiece((p) => ({ ...p, y: dropY }));
    moveDown();
  }

  // Touch controls for mobile
  function handleTouchStart(e: React.TouchEvent) {
    const touch = e.touches[0];
    setTouchStart({ x: touch.clientX, y: touch.clientY });
  }
  function handleTouchEnd(e: React.TouchEvent) {
    if (!touchStart) return;
    const touch = e.changedTouches[0];
    const dx = touch.clientX - touchStart.x;
    const dy = touch.clientY - touchStart.y;
    if (Math.abs(dx) > Math.abs(dy)) {
      if (dx > 30) moveRight();
      else if (dx < -30) moveLeft();
    } else {
      if (dy > 30) moveDown();
      else if (dy < -30) rotatePiece();
    }
    setTouchStart(null);
  }

  function restart() {
    setBoard(Array.from({ length: BOARD_HEIGHT }, () => Array(BOARD_WIDTH).fill(0)));
    setPiece(getRandomPiece());
    setNextPiece(getRandomPiece());
    setScore(0);
    setGameOver(false);
    setIntervalMs(500);
  }

  // Render board with current piece
  const displayBoard = board.map(row => [...row]);
  for (let y = 0; y < piece.shape.length; y++) {
    for (let x = 0; x < piece.shape[y].length; x++) {
      if (piece.shape[y][x]) {
        const boardY = piece.y + y;
        const boardX = piece.x + x;
        if (boardY >= 0 && boardY < BOARD_HEIGHT && boardX >= 0 && boardX < BOARD_WIDTH) {
          displayBoard[boardY][boardX] = piece.type + 1;
        }
      }
    }
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-blue-100 to-indigo-200 py-4 px-2">
      <h1 className="text-3xl font-bold mb-2 text-indigo-700 tracking-tight">Tetrix</h1>
      <p className="text-xs text-gray-500 mb-2">Not wrong spelling</p>
      <div className="flex gap-4 mb-2 w-full max-w-xs justify-between">
        <div className="text-sm font-semibold text-indigo-700">Score: {score}</div>
        <button
          className="bg-indigo-500 text-white rounded px-3 py-1 text-xs font-semibold shadow hover:bg-indigo-600 active:scale-95 transition"
          onClick={restart}
        >
          {gameOver ? "Restart" : "Reset"}
        </button>
      </div>
      <div
        className="relative touch-none select-none mx-auto border-4 border-indigo-400 rounded-lg bg-white shadow-lg tetris-board"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Tetris Board */}
        {displayBoard.map((row, y) => (
          <div key={y} className="flex">
            {row.map((cell, x) => (
              <div
                key={x}
                className={`tetris-cell border border-gray-200 ${cell ? COLORS[cell - 1] + " shadow-inner" : "bg-white"}`}
              />
            ))}
          </div>
        ))}
        {/* Game Over Overlay */}
        {gameOver && (
          <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center z-10 rounded-lg">
            <div className="text-white text-2xl font-bold mb-2">Game Over</div>
            <button
              className="bg-indigo-500 text-white rounded px-4 py-2 font-semibold shadow hover:bg-indigo-600 mt-2"
              onClick={restart}
            >
              Play Again
            </button>
          </div>
        )}
      </div>
      {/* Controls for desktop */}
      <div className="flex gap-2 mt-4 sm:gap-4">
        <button className="bg-indigo-400 text-white rounded-full w-12 h-12 text-xl shadow" onClick={moveLeft} aria-label="Left">◀️</button>
        <button className="bg-indigo-400 text-white rounded-full w-12 h-12 text-xl shadow" onClick={rotatePiece} aria-label="Rotate">🔄</button>
        <button className="bg-indigo-400 text-white rounded-full w-12 h-12 text-xl shadow" onClick={moveRight} aria-label="Right">▶️</button>
        <button className="bg-indigo-600 text-white rounded-full w-12 h-12 text-xl shadow" onClick={drop} aria-label="Drop">⏬</button>
      </div>
      <div className="mt-6 text-xs text-gray-400 text-center max-w-xs">
        <div>Touch: Swipe left/right to move, up to rotate, down to drop.</div>
        <div>Desktop: Use on-screen controls or arrow keys (coming soon).</div>
      </div>
    </div>
  );
}
