import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import data from "../../lib/pageData";

const Logo = () => {
  return (
    <Link href='/' >
      <Image 
        src={data.nav.img}
        alt=""
        width={250}
        className=""
      />
    </Link>
  )
};

export default Logo;