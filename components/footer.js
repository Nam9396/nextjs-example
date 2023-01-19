import Image from "next/image";
import css from "./footer.module.css";
import favicon from "../public/favicon.ico";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={css.footer}>

      <div className={css.imgBox}>
        <Image
          src={favicon}
          width={200}
          height={200}
          priority
          className={css.img}
          alt=""
        />
      </div>

      <div className={css.content}>
        <div className={css.menu}>
          <Link className={css.menuItem} href="/" >Home</Link>
          <Link className={css.menuItem} href="/phat-trien" >Phát triển</Link>
          <Link className={css.menuItem} href="/cham-soc-tre" >Chăm sóc trẻ</Link>
          <Link className={css.menuItem} href="/dinh-duong" >Dinh dưỡng</Link>
        </div>

        <div className={css.infoBox}>
          <p className={css.info}>Tác giả: Bác sĩ Nguyễn Thành Nam</p>
          <p className={css.info}>Mọi góp ý xin gửi về email: bibohealth@gmail.com</p>
          <p className={css.info}>Các bài viết chỉ mang tính chất tham khảo, không thể thay thế ý kiến chuyên môn của bác sĩ</p>
        </div>
      </div>

    </footer>
  )
};

export default Footer;