import "./globals.css";
import React from "react";
import Header from "../components/Header";

export const metadata = {
  title: "Profil Saya",
  description: "Landing page profil pribadi",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 container py-12">{children}</main>
          <footer className="bg-white border-t">
            <div className="container py-6 text-sm text-gray-500 text-center">© {new Date().getFullYear()} Nama Anda — Built with Next.js, Tailwind & Framer Motion</div>
          </footer>
        </div>
      </body>
    </html>
  );
}
