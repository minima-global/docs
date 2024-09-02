import type { LucideIcon } from "lucide-react"
import { TerminalIcon } from "lucide-react"

interface IconProps {
  icon?: LucideIcon
}

export default function Icon({ icon: Icon }: IconProps): React.ReactElement {
  return (
    <div className="rounded-md border bg-gradient-to-b from-secondary p-1 shadow-sm">
      {Icon ? <Icon /> : <TerminalIcon />}
    </div>
  )
}
