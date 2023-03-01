import css from "./nav.module.css";
import Image from "next/image";
import longlogo2 from "../public/longlogo2.png";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className={css.nav}>
      <Link className={css.imgBox} href="/">
        <Image
          src={longlogo2}
          width={250}
          height={150}
          priority
          className={css.img}
          alt=""
        />
      </Link>

      <div className={css.menu}>
        <Link className={css.menuItem} href="/">Home</Link>
        <Link className={css.menuItem} href="/phat-trien">Phát triển</Link>
        <Link className={css.menuItem} href="/cham-soc-tre">Chăm sóc trẻ</Link>
        <Link className={css.menuItem} href="/dinh-duong">Dinh dưỡng</Link>
      </div>

    </nav>
  )
};

export default Nav;