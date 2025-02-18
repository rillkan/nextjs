import { formatDate } from "@/lib/utils"
import { EyeIcon } from "lucide-react"
import Image from "next/image"
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
          <Link href={`/user/${authorId}`}>
            <p className="text-16-medium line-clamp-1">{name}</p>
          </Link>
          <Link href={`/startup/${_id}`}>
            <h3 className="">{title}</h3>
          </Link>
          <Link href={`/user/${authorId}`}>
            <Image src="https://placehold.co/48x48" alt="placeholder" width={48} height={48} className="rounded-full" />
          </Link>
        </div>
      </div>
    </li>
  )
}

export default StartupCard