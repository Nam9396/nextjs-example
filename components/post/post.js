import clsx from "clsx"
import Image from "next/image";
import { replaceUri } from "../../lib/function";
import PostMeta from "./postMeta";
import { useRouter } from "next/router";


const Post = ({ post }) => {
  const router = useRouter();  

  return (
    <div className={clsx(
      'w-full h-fit mb-6 box-col justify-between items-center',
      'md:w-[90%] lg:w-[60%]'
    )}>

      <PostMeta post={post} />

      <div className="relative w-full h-0 pb-[50%]">
        <Image
            src={post?.featuredImage?.node?.sourceUrl}
            alt=""
            priority
            fill
            className="object-cover"
        />  
      </div>

      <div onClick={(e) => {
        e.preventDefault();
        const url = e.target.href;
        if (url.includes("bibohealth.com")) {
          const internalLink = replaceUri(url);
          router.push(`/posts/${internalLink}`);
          // window.open(`https://bacsichobeyeu.com/posts/${internalLink}`,
          // '_blank', 'noopener,noreferrer'
          // );
        } else {
          window.open(url, '_blank', 'noopener,noreferrer');
        }
      }}>

        <article 
          dangerouslySetInnerHTML={{__html: post?.content}}
        ></article>

      </div>

    </div>
  )
};

export default Post;