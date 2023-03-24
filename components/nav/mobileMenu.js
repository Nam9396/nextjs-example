import Link from "next/link";
import clsx from "clsx";
import { useState } from "react";
import data from "../../lib/pageData";

const MobileMenu = () => {
  const nav = data.nav;
  const [ display, setDisplay ] = useState(false);

  return (
    <div className={clsx(
      'w-full h-fit',
      'box-col justify-center items-center',
      'lg:hidden'
    )}>

      <div className="p-0" onClick={() => setDisplay(!display)}>
        <span class="material-symbols-outlined p-1 rounded-md font-bold bg-light_purple my-2">
          menu
        </span>
      </div>

      <div className={clsx( 
        'w-full h-fit border-box',
        display ? 'box-col justify-center items-center' : 'hidden',
      )}>
        <Link href='/' className="text-base text-a font-bold px-4 py-1 rounded-full mb-1 hover:btn-hover">{nav.p[0]}</Link>
        <Link href='/phat-trien' className="text-base text-a font-bold px-4 py-1 rounded-full mb-1 hover:btn-hover">{nav.p[1]}</Link>
        <Link href='/cham-soc-tre' className="text-base text-a font-bold px-4 py-1 rounded-full mb-1 hover:btn-hover">{nav.p[2]}</Link>
        <Link href='/dinh-duong' className="text-base text-a font-bold px-4 py-1 rounded-full mb-1 hover:btn-hover">{nav.p[3]}</Link>
      </div>

    </div>
  )
};

export default MobileMenu;