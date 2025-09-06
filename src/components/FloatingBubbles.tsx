import { useEffect, useState } from 'react';

interface Bubble {
  id: number;
  left: number;
  delay: number;
  size: number;
  duration: number;
}

export default function FloatingBubbles({ count = 15 }: { count?: number }) {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    const newBubbles = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      size: Math.random() * 20 + 10,
      duration: Math.random() * 10 + 15,
    }));
    setBubbles(newBubbles);
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute rounded-full bg-bubble-gradient border border-accent/20 animate-float opacity-30"
          style={{
            left: `${bubble.left}%`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            animationDelay: `${bubble.delay}s`,
            animationDuration: `${bubble.duration}s`,
            bottom: '-50px',
            boxShadow: 'inset 0 0 20px rgba(255, 255, 255, 0.1), 0 0 20px rgba(0, 255, 255, 0.2)',
          }}
        />
      ))}
    </div>
  );
}