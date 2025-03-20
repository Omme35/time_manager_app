// Import all necessary types and components
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

//Load the Inter font from Google Fonts
const inter = Inter({ subsets: ["latin"] });

// Define metadata for the app (title, description, etc.)
export const metadata: Metadata = {
  title: "Time Manager",
  description: "Your personal time management solution",
};

//Main layout component. Wrapper that surrounds all the papers.
export default function RootLayout({
  children, //Content of the pages
}: {
  children: React.ReactNode; //typescript type for the children prop
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {/* Navigation bar that apears on all pages */} 
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <h1 className="text-xl font-bold">Time Manager</h1>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {/* Main content area */}
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {children}
        </main>
      </body>
    </html>
  );
} 