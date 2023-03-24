import clsx from "clsx";
import Card from "./card";


const PostGrid = ({ postArray }) => {
  return (
    <div className={clsx(
      'bg-light_blue my-12',
      'box-col w-full justify-center items-start p-2',
      'md:box-row md:justify-center md:items-start',
    )}>
    {postArray.map(post => (
        <Card post={post} key={post.title} />
    ))}
    </div>
  )
};
  
export default PostGrid;