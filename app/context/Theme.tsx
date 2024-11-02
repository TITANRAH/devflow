'use client'

// TODO: MODO DARK asi creamos el provider para cambiar a modo dark
// LUEGO LO LLAMAMOS EN EL LAYOUT
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";

function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
export default ThemeProvider;
