import { TouchGesture } from "@/types/game";
import { useState } from "react";

export function useTouchControls() {
  const [touchStart, setTouchStart] = useState<TouchGesture>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    setTouchStart({ x: touch.clientX, y: touch.clientY });
  };

  const handleTouchEnd = (
    e: React.TouchEvent,
    callbacks: {
      onMoveLeft: () => void;
      onMoveRight: () => void;
      onMoveDown: () => void;
      onRotate: () => void;
    }
  ) => {
    if (!touchStart) return;
    
    const touch = e.changedTouches[0];
    const dx = touch.clientX - touchStart.x;
    const dy = touch.clientY - touchStart.y;
    
    const threshold = 30;
    
    if (Math.abs(dx) > Math.abs(dy)) {
      // Horizontal swipe
      if (dx > threshold) callbacks.onMoveRight();
      else if (dx < -threshold) callbacks.onMoveLeft();
    } else {
      // Vertical swipe
      if (dy > threshold) callbacks.onMoveDown();
      else if (dy < -threshold) callbacks.onRotate();
    }
    
    setTouchStart(null);
  };

  return {
    handleTouchStart,
    handleTouchEnd,
  };
}