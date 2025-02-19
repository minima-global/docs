import {
  Blocks,
  BookOpen,
  Waypoints,
  GraduationCap,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export interface Mode {
  param: string;
  name: string;
  description: string;
  icon: LucideIcon;
}

export const modes: Mode[] = [
  {
    param: "core",
    name: "Introduction",
    description: "Welcome to Minima",
    icon: Sparkles,
  },
  {
    param: "run-a-node",
    name: "Run a Node",
    description: "Join the Minima network",
    icon: Waypoints,
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
    icon: GraduationCap,
  },
  {
    param: "development",
    name: "Developer Tutorials",
    description: "Build on Minima",
    icon: Blocks,
  },
];
