import {
  Blocks,
  BookOpen,
  CpuIcon,
  PencilRulerIcon,
  ShapesIcon,
  type LucideIcon,
} from "lucide-react"

export interface Mode {
  param: string
  name: string
  description: string
  icon: LucideIcon
}

export const modes: Mode[] = [
  {
    param: "core",
    name: "Introduction",
    description: "Introduction to Minima",
    icon: CpuIcon,
  },
  {
    param: "run-a-node",
    name: "Run a Node",
    description: "Run a Minima Node",
    icon: Blocks,
  },
  {
    param: "user-guides",
    name: "User Guides",
    description: "Guides about minima",
    icon: BookOpen,
  },

  {
    param: "development",
    name: "Devloper Tutorials",
    description: "Develop on Minima",
    icon: PencilRulerIcon,
  },
  {
    param: "learn",
    name: "Knowledge Base",
    description: "Learn Minima",
    icon: ShapesIcon,
  },
]
