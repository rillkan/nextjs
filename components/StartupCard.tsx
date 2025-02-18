import { formatDate } from "@/lib/utils"
import { EyeIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"


const StartupCard = ({ post }: { post: StartupTypeCard }) => {

  const { _createdAt, views, author: { _id: authorId, name }, title, category, _id, image, description } = post
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
      <Link href={`/startup/${_id}`}>
        <p className="startup-card_desc">
          {description}
        </p>

        <img src={image} alt="placeholder" className="startup-card_img" />
      </Link>

      <div className="flex-between gap-3 mt-5">
        <Link href={`/?query=${category.toLowerCase()}`}>
          <p>{category}</p>
        </Link>
        <Button className="startip-card-btn" asChild>
          <Link href={`/startup/${_id}`}>
          </Link>
        </Button>
      </div>
    </li>
  )
}

export default StartupCard