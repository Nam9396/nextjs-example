import { TitleText_3, TitleText_2 } from "../text/titleText";
import Link from "next/link";

const LastedPost = ({ newPost }) => {
  return (
    <div className="w-full h-fit py-4 rounded-lg mb-6 box-col items-center bg-light_purple">
      
      <TitleText_2 content={'Bài viết mới nhất'} />
      
      <div className="box-col justify-center items-start p-4">
        {newPost.map(item => (
          <Link
            href={`/posts/${item.slug}`} 
            key={item?.id}
            className='border-bottom w-full py-4'
          >
            <TitleText_3 content={item.title} />
          </Link>
        ))}
      </div>
      
    </div>
  )
};

export default LastedPost;