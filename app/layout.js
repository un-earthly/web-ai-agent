import "./globals.css";
import React from 'react';
import Navbar from "@/components/navbar";




export default function EnhancedLayout({ children }) {
  return (
    <html>
      <body>
        <header className="sticky top-0 z-50 bg-black/[0.96]">
          <Navbar />
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>

  );
}
