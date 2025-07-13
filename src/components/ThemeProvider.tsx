"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ComponentProps, ReactNode } from "react";

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ 
  children, 
  ...props 
}: ThemeProviderProps & ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
