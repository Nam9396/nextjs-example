import clsx from "clsx";
import Image from "next/image";
import LastedPost from "./lastedPost";


const SideBar = ({ newPost }) => {
  return (
    <div className={clsx(
      'w-full h-fit box-col justify-start items-center rounded-lg mb-6',
      'lg:w-[300px] my-0'
    )}>
      <Image
        src='https://img.freepik.com/free-vector/watercolor-illustration-mother-s-day-celebration_23-2150206098.jpg?w=740&t=st=1679315302~exp=1679315902~hmac=792800f7197c45be92c22c623a23af6633f30618f56c75a1b81e309d53066973'
        alt=''
        width={300}
        height={300}
        priority
        className="mb-6"
      />
      <LastedPost newPost={newPost} />
    </div>
  )
  
};

export default SideBar;