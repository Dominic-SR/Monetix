// app/page.tsx
import ThemeToggle from '@/components/ThemeToggle';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        Monetix Dashboard
      </h1>
      
      <div className="p-6 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-sm">
        <p className="text-gray-600 dark:text-gray-300">
          This card adjusts its background and text colors dynamically.
        </p>
      </div>

      <ThemeToggle />
    </main>
  );
}