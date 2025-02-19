"use client";
import { ImageZoom } from "fumadocs-ui/components/image-zoom";
import { useEffect, useState } from "react";

interface ThemeAwareSVGProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export function ThemeAwareSVG({ src, alt, width, height }: ThemeAwareSVGProps) {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Get initial theme
    const getTheme = () => {
      if (typeof window === "undefined") return false;
      const theme = localStorage.getItem("theme");
      return theme === "dark";
    };

    setIsDark(getTheme());
    setMounted(true);

    // Listen for theme changes
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "theme") {
        setIsDark(e.newValue === "dark");
      }
    };

    window.addEventListener("storage", handleStorageChange);

    // Also listen for direct changes to localStorage in the same window
    const observer = new MutationObserver(() => {
      setIsDark(getTheme());
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      observer.disconnect();
    };
  }, []);

  // Don't render anything until mounted to prevent hydration issues
  if (!mounted) {
    return null;
  }

  const themeAwareSrc = src.replace("Lm.svg", isDark ? "Dm.svg" : "Lm.svg");

  return (
    <ImageZoom src={themeAwareSrc} alt={alt} width={width} height={height} />
  );
}
