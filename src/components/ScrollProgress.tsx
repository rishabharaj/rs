import { useEffect, useState } from 'react';

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const total = scrollHeight - clientHeight;
      const value = total > 0 ? (scrollTop / total) * 100 : 0;
      setProgress(value);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-1 bg-transparent">
      <div
        className="h-full progress-neon transition-[width] duration-75 ease-linear"
        style={{ width: `${progress}%` }}
      />
      {/* Neon head glow */}
      <div
        className="absolute top-0 h-1 w-2 rounded-r-full bg-white/60"
        style={{ left: `calc(${progress}% - 2px)` }}
      />
    </div>
  );
};

export default ScrollProgress;
