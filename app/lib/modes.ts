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
    description: "How to use Minima",
    icon: BookOpen,
  },
  {
    param: "learn",
    name: "Knowledge Base",
    description: "Learn how Minima works",
    icon: ShapesIcon,
  },
  {
    param: "development",
    name: "Developer Tutorials",
    description: "Build on Minima",
    icon: PencilRulerIcon,
  },
]
