'use client';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

import '../styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const segment = useSelectedLayoutSegment();

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <header>
          <nav>
            <ul className="flex flex-row p-4 shadow-sm gap-4">
              <li>
                <Link
                  className={
                    !segment
                      ? 'font-medium text-teal-700'
                      : 'font-normal hover:text-teal-700 text-black'
                  }
                  href={'/'}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={
                    segment === 'dashboard'
                      ? 'font-medium text-teal-700'
                      : 'font-normal hover:text-teal-700 text-black'
                  }
                  href={'/dashboard'}
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  className={
                    segment === 'settings'
                      ? 'font-medium text-teal-700'
                      : 'font-normal hover:text-teal-700 text-black'
                  }
                  href={'/settings'}
                >
                  Settings
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        {segment ? (
          <>{children}</>
        ) : (
          <main className="p-4 flex-1">{children}</main>
        )}
        <footer className="mt-auto p-4 bg-teal-700 text-white text-center flex-shrink-0 flex-grow-0">
          &copy; <span className="text-sm">{new Date().getFullYear()}</span>
        </footer>
      </body>
    </html>
  );
}
