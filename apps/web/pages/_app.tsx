/*This file initializes all pages and components. Runs first on every page load.
Used for:
- Global CSS imports
- Global JS imports
- Global state management
- Global context providers
- Global error boundary
- Global SEO optimizations
- Global analytics
- Global authentication
- Global API clients
- Global testing utilities
- Global configuration
- Global documentation
- Global type safety
- Global performance optimizations
*/

import type { AppProps } from 'next/app';
import '../app/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
} 