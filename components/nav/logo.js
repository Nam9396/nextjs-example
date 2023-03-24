import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import data from "../../lib/pageData";
import longlogo2 from "../../public/longlogo2.png"

const Logo = () => {
  return (
    <Link href='/' >
      <Image 
        // src={data.nav.img}
        src={longlogo2}
        alt=""
        width={250}
        className=""
      />
    </Link>
  )
};

export default Logo;