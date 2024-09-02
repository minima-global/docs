"use client"
import { ImageZoom } from "fumadocs-ui/components/image-zoom"
import { useTheme } from "next-themes"
interface ThemeAwareSVGProps {
  src: string
  alt: string
  width: number
  height: number
}

export function ThemeAwareSVG({ src, alt, width, height }: ThemeAwareSVGProps) {
  const { resolvedTheme } = useTheme()

  const themeAwareSrc = src.replace(
    "Lm.svg",
    resolvedTheme === "dark" ? "Dm.svg" : "Lm.svg"
  )

  return (
    <ImageZoom src={themeAwareSrc} alt={alt} width={width} height={height} />
  )
}
