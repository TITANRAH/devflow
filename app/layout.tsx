import type { Metadata } from "next";
import localFont from "next/font/local";
import React from "react";
import "./globals.css";

const inter = localFont({
  src: "./fonts/InterVF.ttf",
  variable: "--font-inter",
  weight: "100 200 300 400 500 600 700 800",
});

// TODO: FUENTE DE GOOGLE FONT:
// primer la descago de google font
// luego la guardo en fonts
// la declaro con una constnate apuntando a la ruta
// le doy un nombre de variable
// la pongo en el body class name y enel body del global
// si poingo className es la fuente por defecto
// luego delcaro las fuentes en el tailwindcss en fontFamily:
// agrego un var(--font-nombreVariable)

const spaceGrotesk = localFont({
  src: "./fonts/SpaceGroteskVF.ttf",
  variable: "--font-space-grotesk",
  weight: "300 400 500 700",
});

export const metadata: Metadata = {
  title: "DevFlow",
  description:
    "A community-driven platform for asking and answering programming questions. Get help, share knowledge, and collaborate with developers from around the world. Explore topics in web development, mobile app development, algorithms, data structures, and more.",
  icons: {
    icon: "/images/site-logo.svg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${spaceGrotesk.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
