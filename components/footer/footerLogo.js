import Image from "next/image";
import Link from "next/link";
import data from "../../lib/pageData";

const FooterLogo = () => {
  const footer = data.footer;

  return (
    <Link href='/' className="w-[150px] h-[150px] relative">
      <Image
        src={footer.img}
        alt=""
        priority
        fill
        className="object-cover"
      />
    </Link>
  )
};

export default FooterLogo;