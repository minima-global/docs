"use client"
import useTheme from "@/__minidapp/hooks/useTheme"
import { ImageZoom } from "fumadocs-ui/components/image-zoom"

interface ThemeAwareSVGProps {
  src: string
  alt: string
  width: number
  height: number
}

export function ThemeAwareSVG({ src, alt, width, height }: ThemeAwareSVGProps) {
  const { getTheme } = useTheme()

  const themeAwareSrc = src.replace(
    "Lm.svg",
    getTheme() === "light" ? "Lm.svg" : "Dm.svg"
  )

  return (
    <ImageZoom src={themeAwareSrc} alt={alt} width={width} height={height} />
  )
}
