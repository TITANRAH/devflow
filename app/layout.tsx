import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "next-themes";
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
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // para usar nexttheme hay que evitar el warning de hidratacion
    // dentro de navbar que estsa dentro del themeprovider  
    // ponemos el boton que hace el switch para cmabiar de dark a lighit
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} ${spaceGrotesk.variable}  antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
