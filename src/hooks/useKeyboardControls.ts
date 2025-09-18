import { useEffect } from "react";

interface KeyboardControlsProps {
  onMoveLeft: () => void;
  onMoveRight: () => void;
  onMoveDown: () => void;
  onRotate: () => void;
  onDrop: () => void;
  gameOver: boolean;
}

export function useKeyboardControls({
  onMoveLeft,
  onMoveRight,
  onMoveDown,
  onRotate,
  onDrop,
  gameOver,
}: KeyboardControlsProps) {
  useEffect(() => {
    if (gameOver) return;

    const handleKeyPress = (event: KeyboardEvent) => {
      // Prevent default behavior for arrow keys to avoid page scrolling
      if (['ArrowLeft', 'ArrowRight', 'ArrowDown', 'ArrowUp', ' '].includes(event.key)) {
        event.preventDefault();
      }

      switch (event.key) {
        case 'ArrowLeft':
          onMoveLeft();
          break;
        case 'ArrowRight':
          onMoveRight();
          break;
        case 'ArrowDown':
          onMoveDown();
          break;
        case 'ArrowUp':
          onRotate();
          break;
        case ' ': // Spacebar for hard drop
          onDrop();
          break;
        default:
          break;
      }
    };

    // Add event listener
    window.addEventListener('keydown', handleKeyPress);

    // Cleanup
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [onMoveLeft, onMoveRight, onMoveDown, onRotate, onDrop, gameOver]);
}