import css from "./post-grid.module.css";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const PostGrid = ({ content }) => {
  const [ end, setEnd ] = useState(10);
  const posts = content.slice(0, end);
  const next = () => {
    setEnd(end + 10);
  };
  const back = () => {
    setEnd(end - 10);
  }

  return (
    <div className={css.post_gird}>
      <div className={css.header}></div>

      <div className={css.grid}>
        {posts.map(post => (
          <Link className={css.post_card} key={post.title}
            href={`${encodeURIComponent(post.uri)}`}
          >
            <div className={css.group}>{post.categories.nodes[0].name}</div>
            <div className={css.imgBox}>
                <Image
                    src={post.featuredImage.node.sourceUrl}
                    alt=""
                    priority
                    fill
                    size=""
                    className={css.img}
                />
            </div>
            <div className={css.title}>{post.title}</div>    
          </Link>
        ))}
        
      </div>

      <div className={css.button_box}>
        {posts.length > 10 && <button onClick={back} >Back</button>}
        {posts.length < content.length && <button onClick={next}>Next</button>}    
      </div>    
      
    </div>
  )
};

export default PostGrid