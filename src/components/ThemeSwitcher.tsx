'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Avoid rendering mismatch by returning a placeholder or null
    return <div className="w-8 h-8" />;
  }

  return (
    <button
      className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-secondary hover:bg-slate-200 dark:hover:bg-bg-card-hover transition-colors"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label="Toggle theme"
    >
      {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  );
};
