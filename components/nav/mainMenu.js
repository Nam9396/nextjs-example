import Link from "next/link";
import clsx from "clsx";
import data from "../../lib/pageData";

const MainMenu = ({ position }) => {
  const nav = data.nav;

  return (
    <div className={clsx(
      'hidden',
      position === 'nav' ? 'lg:box-row lg:justify-between lg:items-center lg:w-[50%]' : 
      'lg:w-full lg:box-row lg:justify-start lg:items-center',
      
    )}>
      <Link href='/' className="text-base text-a font-bold px-4 py-1 rounded-full hover:btn-hover">{nav.p[0]}</Link>
      <Link href='/phat-trien' className="text-base text-a font-bold px-4 py-1 rounded-full hover:btn-hover">{nav.p[1]}</Link>
      <Link href='/cham-soc-tre' className="text-base text-a font-bold px-4 py-1 rounded-full hover:btn-hover">{nav.p[2]}</Link>
      <Link href='/dinh-duong' className="text-base text-a font-bold px-4 py-1 rounded-full hover:btn-hover">{nav.p[3]}</Link>
    </div>
  )
};

export default MainMenu;