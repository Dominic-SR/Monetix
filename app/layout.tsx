import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from './providers';
import style from "styled-jsx/style";



export const metadata: Metadata = {
  title: "Monetix",
  description: "Data Visualization and Analytics Platform",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className="h-full dark"
      style={{ colorScheme: "dark" }}
    >
      <body className="bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors duration-200">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
