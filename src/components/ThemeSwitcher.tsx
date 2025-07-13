"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import Image from "next/image";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    >
      {theme === "dark" ? (
        <Image 
          src="/assets/img/NewUI/sun.svg" 
          width={20} 
          height={20} 
          alt="Switch to light mode" 
          className="w-5 h-5"
        />
      ) : (
        <Image 
          src="/assets/img/NewUI/moon.svg" 
          width={20} 
          height={20} 
          alt="Switch to dark mode" 
          className="w-5 h-5"
        />
      )}
    </button>
  );
};

export default ThemeSwitcher;
