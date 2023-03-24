import clsx from "clsx";
import Image from "next/image";


const HeroImage = ({ srcUrl }) => {
  return (
    <div className={clsx(
      'w-[90%] h-[200px] mb-6 relative ',
      'md:w-[40%] md:pb-[30%] md:mr-8'
    )}>
      <Image
        src={srcUrl}
        alt=""
        fill
        priority
        className="object-cover"
      />
    </div>
  )
};

export default HeroImage;