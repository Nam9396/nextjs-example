import Image from "next/image";
import ParaText from "../text/paraText";
import data from "../../lib/pageData";

const Author = () => {
  return (
    <div className="w-fit h-fit box-row justify-start items-center ">
      <Image
        src={data.author.img}
        alt=""
        width={80}
        height={80}
        className="rounded-full mr-4"
      />
      <div className="w-fit h-fit box-col justify-center items-start">
        <ParaText content={data.author.p[0]} />
        <ParaText content={data.author.p[1]} />
      </div>    
    </div>
  )
};

export default Author;