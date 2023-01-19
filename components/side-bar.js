import css from "./side-bar.module.css";
import Link from "next/link";

const Side_bar = ({ lasted_post }) => {
  return (
    <div className={css.sideBar}>

      <div className={css.lastedPost}>
        <div className={css.lasted_header}>Bài viết mới nhất</div>
        <div className={css.lasted_list}>
          {lasted_post.map(item => (
            <Link
              className={css.lasted_item} 
              href={`${encodeURIComponent(item.uri)}`} 
              key={item.id}
            >{item.title}</Link>
          ))}
        </div>
      </div>

    </div> 
  )
};

export default Side_bar;