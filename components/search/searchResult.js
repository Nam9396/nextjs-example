import { TitleText_2, TitleText_3 } from "../text/titleText";
import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";

const SearchResult = ({ resultPosts }) => {
  const [ display, setDisplay ] = useState(true);

  return (
    <div className={clsx(
      display ? "w-full h-fit py-4 bg-light_purple rounded-lg my-6 box-col items-center" : 'hidden',
    )}>
      
      <div className="w-full box-row justify-between items-center p-4">
        <TitleText_2 content={'Kết quả tìm kiếm'} />
        <span class="material-symbols-outlined p-1 border-box rounded-full" onClick={() => setDisplay(!display)}>
          close
        </span>
      </div>
      
      <div className="w-full box-col justify-center items-start px-4 ">
        {resultPosts.posts.nodes.map(item => (
          <Link
            href={`/posts/${item.slug}`} 
            key={item.id}
            className='border-bottom w-full py-4'
          >
            <TitleText_3 content={item.title} />
          </Link>
        ))}
      </div>
      
    </div>
  )
};

export default SearchResult;