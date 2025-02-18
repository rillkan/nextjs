import { formatDate } from "@/lib/utils"
import { EyeIcon } from "lucide-react"
import Link from "next/link"

const StartupCard = ({ post }: { post: StartupTypeCard }) => {

  const { _createdAt, views, author: { _id: authorId, name }, title, category, _id, image } = post
  return (
    <li className="startup-card group">
      <div className="flex-between">
        <p className="startup_card_date">
          {formatDate(_createdAt)}
        </p>
        <div>
          <EyeIcon />
          <span>{views}</span>
        </div>
      </div>

      <div>
        <div className="flex-1">
          <Link href={`/user/${authorId}`} />
          <p className="text-16-medium line-clamp-1">{name}</p>
        </div>
      </div>
    </li>
  )
}

export default StartupCard