import React, { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  delay?: number; // ms
  y?: number; // px translateY distance (used when direction is up/down)
  x?: number; // px translateX distance (used when direction is left/right)
  direction?: 'up' | 'down' | 'left' | 'right';
  once?: boolean;
  className?: string;
};

const Reveal: React.FC<RevealProps> = ({
  children,
  delay = 0,
  y = 24,
  x = 24,
  direction = 'up',
  once = true,
  className,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Respect reduced motion
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setVisible(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.unobserve(entry.target);
        } else if (!once) {
          setVisible(false);
        }
      },
      { root: null, rootMargin: "0px", threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? 'translate(0, 0)'
          : direction === 'up'
            ? `translateY(${y}px)`
            : direction === 'down'
              ? `translateY(-${y}px)`
              : direction === 'left'
                ? `translateX(${x}px)`
                : `translateX(-${x}px)`,
  transition: `opacity 800ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform 800ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
};

export default Reveal;
