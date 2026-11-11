import { useRef } from 'react';
import type { TouchEvent } from 'react';

const MIN_DISTANCE = 40;

// Touch handlers that turn a mostly-horizontal drag into previous/next.
// Pair with `touch-action: pan-y` so vertical scrolling still works.
export function useSwipe(onPrevious: () => void, onNext: () => void) {
  const start = useRef<{ x: number; y: number } | null>(null);

  return {
    onTouchStart: (event: TouchEvent) => {
      const touch = event.touches[0];
      start.current = event.touches.length === 1 ? { x: touch.clientX, y: touch.clientY } : null;
    },
    onTouchEnd: (event: TouchEvent) => {
      const from = start.current;
      start.current = null;
      if (!from) return;
      const touch = event.changedTouches[0];
      const dx = touch.clientX - from.x;
      const dy = touch.clientY - from.y;
      if (Math.abs(dx) < MIN_DISTANCE || Math.abs(dx) < Math.abs(dy) * 1.5) return;
      if (dx < 0) onNext();
      else onPrevious();
    },
    onTouchCancel: () => {
      start.current = null;
    },
  };
}
