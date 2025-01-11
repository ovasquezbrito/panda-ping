import { cn } from "@/lib/utils"
import Image from "next/image"

interface DiscordMessageProps {
  avatarSrc: string
  avatarAlt: string
  username: string
  timestamp: string
  badgeText?: string
  badgeColor?: string
  title: string
  content: {
    [key: string]: string
  }
}

type BadgeColor = "#43b581" | "#faa61a" | string & {}

const getBadgeColor = (color: BadgeColor) => {
  switch (color) {
    case "#43b581":
      return "bg-gren-500/10 text-gren-400 ring-gren-500/20"
    case "#faa61a":
      return "bg-yellow-500/10 text-yellow-400 ring-yellow-500/20"
    default:
      return "bg-gren-500/10 text-gren-400 ring-gren-500/20"
  }
}
const DiscordMessage = ({avatarAlt, avatarSrc, badgeColor = "#43b581", badgeText, content, timestamp, title, username}: DiscordMessageProps) => {
  return (
    <div className="w-full flex items-start justify-start">
      <div className="flex items-center mb-2">
        <Image
          src={avatarSrc}
          alt={avatarAlt}
          width={40}
          height={40}
          className="object-cover rounded-full mr-3"
        />
      </div>
      <div className="w-full max-w-xl">
        <div className="flex items-center">
          <p className="font-semibold text-white">{username}</p>
          <span className="ml-2 px-1.5 py-0.5 text-xs font-semibold bg-brand-600 text-white rounded">APP</span>
          <span className="text-gray-400 ml-1.5 text-xs font-normal">{timestamp}</span>
        </div>
        <div className="bg-[#2f3136] text-sm w-full rounded p-3 mb-4 mt-1.5">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
            {badgeText ? (
              <span
                className={cn(
                  "inline-flex order-2 items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset",
                  getBadgeColor("#faa61a")
                )}
              >
                {badgeText}
              </span>
            ): null}
            <p className="text-white order-1 text-base/7 font-semibold">{title}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DiscordMessage