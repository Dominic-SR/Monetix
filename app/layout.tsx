import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from './providers';


export const metadata: Metadata = {
  title: "Monetix",
  description: "Data Visualization and Analytics Platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className="h-full"
      suppressHydrationWarning
    >
      <body className="bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
