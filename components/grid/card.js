import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import LabelText from "../text/labelText";
import { TitleText_1 } from "../text/titleText";

const Card = ({ post }) => {
  return (
    <Link href={`/posts/${post.slug}`} className={clsx(
      'sm-card-box bg-white shadow-card',
      'md:lg-card-box',
      'hover:card-hover'
    )}>
      <div className={clsx(
        'sm-img-box sm-img-radius relative',
        'md:lg-img-box'
      )}>
        <Image 
          src={post.featuredImage.node.sourceUrl}
          alt=''
          priority
          fill
          className="object-cover sm-img-radius md:lg-img-radius"
        />
      </div>

      <div className={clsx(
        'sm-header-box py-2 px-4',
        'md:lg-header-box'
      )}>
        <LabelText content={post.categories.nodes[0].name} />
        <TitleText_1 content={post.title} />
      </div>
    </Link>
  )
};

export default Card;