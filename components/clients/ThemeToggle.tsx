'use client';

import { useTheme } from 'next-themes';

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const nextTheme = resolvedTheme === 'dark' ? 'light' : 'dark';
  const label = nextTheme === 'light' ? '☀️ Light Mode' : '🌙 Dark Mode';

  return (
    <button
      type="button"
      aria-label={`Switch to ${nextTheme} mode`}
      onClick={() => setTheme(nextTheme)}
      className="p-2 cursor-pointer border rounded-md border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 transition-colors"
      suppressHydrationWarning
    >
      {label}
    </button>
  );
}