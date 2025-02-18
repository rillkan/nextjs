import { formatDate } from "@/lib/utils"
import { EyeIcon } from "lucide-react"
import Link from "next/link"

const StartupCard = ({ post }: { post: StartupTypeCard }) => {
  return (
    <li className="startup-card group">
      <div className="flex-between">
        <p className="startup_card_date">
          {formatDate(post._createdAt)}
        </p>
        <div>
          <EyeIcon />
          <span></span>
        </div>
      </div>

      <div>
        <div className="flex-1">
          <Link href={`/user/${post.author?._id}`} />
          <p className="text-16-medium line-clamp-1">{post.author?.name}</p>
        </div>
      </div>
    </li>
  )
}

export default StartupCard